import { User } from "../model/user";
import { Request, Response } from "express";
import { sendMail } from "utils/email";

const registerUser = async (req: Request, res: Response) => {
  const {
    firstname,
    lastname,
    email,
    phonenumber,
    age,
    gender,
    weight,
    height,
    profileImage,
    profileIsPublic,
  } = req.body;

  try {
    const userExist = await User.findOne({ email });

    if (!userExist) {
      const newUser = new User({
        firstname,
        lastname,
        email,
        phonenumber,
        age,
        gender,
        weight,
        height,
        profileImage,
        profileIsPublic,
      });

      await newUser.save();
      await sendMail(email); 
      res.json(newUser);
    } else {
      res.json({ msg: "User already exists" });
    }
  } catch (error) {
    console.log("Registration error: " + error);
    res.status(500).json({ error: "Error registering user" });
  }
};





const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    const isPassword = await user.comparePassword(password)


    // Exclude the password field from the response
    const userWithoutPassword = {
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    };

    res.status(200).json({ message: 'Login successful', user: userWithoutPassword });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login error' });
  }
};
