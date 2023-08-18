import mongoose from "mongoose";

export const urlConnection = (url: string) => {
  try {
    mongoose.connect(url);
    console.log("DB connection is on");
    
  } catch (error) {
    console.log('Mongoose connection error ', error);
  }
};


