import { Schema, model } from "mongoose";
import plans from "./plans.interface";

const planSchema = new Schema<plans>({
  name: {
    type: String,
    required: true,
  },
  descriptions: {
    type: String,
    required: true,
  },
  goals: {
    type: String,
    required: true,
  },
  duration: {
    type: Date,
    required: true,
  },
  timeIntervals: {
    type: Number,
    required: true,
  },
  subscriptionCount: {
    type: Number,
    required: true,
  },
  isPublic: {
    type: Boolean,
    required: true,
  },
}, {timestamps: true});

export const Plans = model<plans>("plans", planSchema);
