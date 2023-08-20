import { defaultAdmin } from "./defaultAdmin";
import { Admin } from "./admin.model";
import dotenv from "dotenv";
import { urlConnection } from "config/database";
dotenv.config();

const adminStartUp = async () => {
  try {
    await urlConnection(process.env.MONGO_URL!);
    await Admin.deleteMany(defaultAdmin);
    await Admin.create(defaultAdmin);
    process.exit(0);
  } catch (error) {
    console.log(`Failed to create Admin ${error}`);
    process.exit(1);
  }
};
