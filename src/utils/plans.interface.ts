import { Document, Schema } from "mongoose";

export default interface plans extends Document {
  name: string;
  descriptions: string;
  goals: string;
  duration: Date;
  timeIntervals: number;
  subscriptionCount: number;
  isPublic: boolean;
  createdBy: Schema.Types.ObjectId
}
