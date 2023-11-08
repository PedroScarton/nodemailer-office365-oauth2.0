import { MailToken, MailTokenDocument } from "../../schemas/";

export const initializeSingleton = async (): Promise<MailTokenDocument> => {
  const docCount = await MailToken.countDocuments();

  if (docCount === 0) {
    console.log("INIT NEW MAILTOKEN");
    const newToken = await MailToken.create({
      accessToken: "", // set your access token here
      refreshToken: "", // set your refresh token here
      expires: 0, // you might want to initialize this with an actual expiration time
    });
    return newToken;
  }

  const existingToken = await MailToken.findOne();
  if (!existingToken) {
    throw new Error("No MailToken found.");
  }
  return existingToken;
};


