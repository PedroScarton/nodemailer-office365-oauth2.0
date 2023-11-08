import nodemailer from "nodemailer";
import axios from "axios";

import { initializeSingleton } from "../init-token";

import { MailToken, MailTokenDocument } from "../../../schemas";

import {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_USER,
  MICROSOFT_CLIENT_ID,
  MICROSOFT_CLIENT_SECRET,
  MICROSOFT_TENANT_ID,
} from "../../constants/env";

export const sendEmail = async (to: string, subject: string, text: string) => {
  try {
    const transporter = await configureTransporter();

    await transporter.sendMail({
      from: {
        name: "Nodemailer OAuth2.0",
        address: MAIL_USER,
      },
      to: to,
      subject: subject,
      text: text,
    });
  } catch (error) {
    throw error;
  }
};

async function configureTransporter() {
  const tokenDoc = await getOrUpdateToken();
  if (!tokenDoc) {
    throw new Error("Access token not found.");
  }

  const { accessToken, refreshToken } = tokenDoc;

  const config: { [key: string]: any } = {
    port: MAIL_PORT,
    host: MAIL_HOST,
    secure: false,
    auth: {
      type: "OAuth2",
      user: MAIL_USER,
      clientId: MICROSOFT_CLIENT_ID,
      clientSecret: MICROSOFT_CLIENT_SECRET,
      refreshToken: refreshToken,
      accessToken: accessToken,
      tenantId: MICROSOFT_TENANT_ID,
    },
  };

  const transporter = nodemailer.createTransport(config);

  return transporter;
}

export const getOrUpdateToken = async () => {
  const currentTime = new Date().getTime() / 1000;

  try {
    let tokenDoc: MailTokenDocument | null = await MailToken.findOne();

    if (!tokenDoc) {
      console.log("error here");
      tokenDoc = await initializeSingleton();
    }

    const { expires, refreshToken } = tokenDoc;

    if (currentTime >= expires) {
      console.log("UPDATING ACCESS TOKEN");
      const response = await axios.post(
        `https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID}/oauth2/v2.0/token`,
        {
          client_id: process.env.MICROSOFT_CLIENT_ID,
          client_secret: process.env.MICROSOFT_CLIENT_SECRET,
          grant_type: "refresh_token",
          refresh_token: refreshToken,
          scope: "https://outlook.office365.com/.default offline_access",
        },
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      // Update the MailToken document
      tokenDoc.accessToken = response.data.access_token;
      tokenDoc.expires = currentTime + response.data.expires_in;
      tokenDoc.refreshToken = response.data.refresh_token;

      await tokenDoc.save();
    }
    return tokenDoc;
  } catch (err) {
    throw new Error("Could not refresh the microsoft 365 access token");
  }
};
