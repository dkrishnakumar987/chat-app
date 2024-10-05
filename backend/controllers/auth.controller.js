import User from "../models/user.model.js";
import generateAvatarSVG from "../utils/generateAvatar.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { displayName, username, password, confirmPassword } = req.body;

    //Password Confirmation
    if (password != confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    //Check existence of User
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    //Hashing Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Generating Default Profile Picture
    const profilePic = generateAvatarSVG(username);

    const newUser = new User({
      displayName,
      username,
      password: hashedPassword,
      profilePic,
    });

    if (newUser) {
      //Generate JWT Token
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      console.log(`User ${username} Signed Up Successfully`);
      res.status(201).json({
        _id: newUser._id,
        displayName: newUser.displayName,
        username: newUser.username,
        profilePic: newUser.profilePic,
        message: "Created User successfully",
      });
    } else {
      console.log("Invalid User Data Received");
      res.status(400).json({ error: "Invalid User Data" });
    }
  } catch (error) {
    console.log("Error in Signup Controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid Username or Password" });
    }

    generateTokenAndSetCookie(user._id, res);

    console.log(`User ${username} Logged In`);
    res.status(200).send({
      _id: user._id,
      displayName: user.displayName,
      username: user.username,
      profilePic: user.profilePic,
      message: "Logged In Successfully",
    });
  } catch (error) {
    console.log("Error in Login Controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });

    console.log("User Logged Out");
    res.status(200).send({ message: "Logged Out Successfully" });
  } catch (error) {
    console.log("Error in Logout Controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
