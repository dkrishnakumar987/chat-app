import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const loggenInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggenInUserId },
    }).select("-password");

    res.status(200).json({ users: filteredUsers });
  } catch (error) {
    console.error("Error in getUsers Controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
