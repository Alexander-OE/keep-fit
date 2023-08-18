import { Document } from "mongoose";

export default interface admin extends Document {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: number;
  age: number;
  gender: string;
  weight: number;
  height: number;
  profileImage: string;
  profileIsPublic: boolean;
}