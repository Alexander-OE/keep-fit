import { User } from "../model/user";
import { Request, Response } from "express";
import transporter from "utils/email";

const registerUser = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const userExist = await User.findOne({ email: req.body.email });
    if (!userExist) {
      const mailOptions = {
        from: "your-email@example.com",
        to: email,
        subject: "Account Created",
        text: "Your account has been successfully created!",
      };

      transporter.sendMail(mailOptions, (error:any, info:any) => {
        if (error) {
          console.error("Error sending email:", error);
          res.status(500).json({ error: "Error sending email" });
        } else {
          console.log("Email sent:", info.response);
          res.status(200).json({ message: "Account created successfully" });
        }
      });
      const user = await User.create({ ...req.body });
    } else {
      res.json({ msg: "User already exist" });
    }
  } catch (error) {}
};

const loginUser = () => {};
