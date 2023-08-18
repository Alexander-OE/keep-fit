import { Schema, model } from "mongoose";
import admin from "./admin.interface";

const adminSchema = new Schema<admin>({
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
    required: true,
  },
  profileIsPublic: {
    type: Boolean,
    default: false,
  },
});
