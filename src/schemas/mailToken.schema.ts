import { Schema, model, Document } from "mongoose";

interface mailTokenModel {
  accessToken: string;
  refreshToken: string;
  expires: number;
}

export interface MailTokenDocument extends Document, mailTokenModel {
  accessToken: string;
  refreshToken: string;
  expires: number;
}

const MailTokenSchema = new Schema<MailTokenDocument>(
  {
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    expires: { type: Number, required: true },
  },
  { timestamps: true }
);

export const MailToken = model<MailTokenDocument>("MailToken", MailTokenSchema);
