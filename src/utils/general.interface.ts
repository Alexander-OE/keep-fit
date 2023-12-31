import { Document } from "mongoose";

export default interface generalInterface extends Document {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: number;
  age: number;
  gender: string;
  weight: number;
  height: number;
  profileImage: string;
  profileIsPublic: boolean;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}
