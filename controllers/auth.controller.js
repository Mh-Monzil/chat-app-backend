import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    // console.log(req.body);

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://i.ibb.co/fFY2Vc1/man-avatar.png`;
    const girlProfilePic = `https://i.ibb.co/SJHKDcG/woman-avatar.png`;

    const newUser = await User.create({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "Male" ? boyProfilePic : girlProfilePic,
    });
    
    // await newUser.save();

    res.status(201).json({
        _id: newUser.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = (req, res) => {
  console.log("loginUser");
};

export const logout = (req, res) => {
  console.log("logoutUser");
};
