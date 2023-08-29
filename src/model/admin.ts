import { Schema, model } from "mongoose";
import generalInterface from "../utils/general.interface"

const adminSchema = new Schema<generalInterface>({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  profileImage: {
    type: String,
  },
  profileIsPublic: {
    type: Boolean,
    default: false,
  },
});

export const Admin = model<generalInterface>("admin", adminSchema);
