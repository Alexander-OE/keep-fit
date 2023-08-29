import express, { Express } from "express";
import dotenv from "dotenv";
import { urlConnection } from "./config/database";
dotenv.config();


const app: Express = express();

app.use(express.json());

const Port = process.env.PORT || 4000;

const startUp = async () => {
  try {
    await urlConnection(process.env.MONGO_URL!);
    app.listen(Port, () => {
      console.log(`Server has started at port ${Port}`);
    });
  } catch (error) {
    console.log("Error starting the server ", error);
  }
};

startUp();
