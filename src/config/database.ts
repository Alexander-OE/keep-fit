import createAdmin from "../controllers/admin/admin.controller";
import mongoose from "mongoose";

export const urlConnection = (url: string) => {
  try {
    mongoose.connect(url);
    console.log("DB connection is on");
    createAdmin();
  } catch (error) {
    console.log("Mongoose connection error ", error);
  }
};
