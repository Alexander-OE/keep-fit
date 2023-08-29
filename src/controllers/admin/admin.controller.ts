import { Admin } from "../../model/admin";
import { defaultAdmin } from "../../utils/defaultAdmin";

const createAdmin = async () => {
  try {
    const existingAdmin = await Admin.findOne({ lastname: "smith" });

    if (!existingAdmin) {
      const newAdmin = new Admin(defaultAdmin);
      await newAdmin.save();
      console.log("Admin user created successfully");
    } else {
      console.log("Admin user already exists");
    }
  } catch (error) {
    console.error("Error creating admin:", error);
  }
};


export default createAdmin;