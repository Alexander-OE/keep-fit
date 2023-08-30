import { Schema, model } from "mongoose";
import { NextFunction } from "express";
import generalInterface from "../utils/general.interface";
import * as bcrypt from "bcryptjs";

const userSchema = new Schema<generalInterface>({
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
    enum: ["male", "female"],
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
  password: {
    type: String,
    trim: true,
  },
});

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


export const User = model<generalInterface>("user", userSchema);
