import { Schema, model } from "mongoose";

const CustomerSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
  },
  { toJson: { getters: true }, toObject: { getters: true }, timestamps: true }
);

export const Customer = model("Customer", CustomerSchema);
