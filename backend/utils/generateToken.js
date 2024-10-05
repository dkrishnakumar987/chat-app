import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, //Prevent XSS Attacks (Cross Site Scripting)
    sameSite: true, //Prevent CSRF Attacks (Cross Site Request Forgery)
    maxAge: 15 * 24 * 60 * 60 * 1000, //15 days in ms
    secure: process.env.NODE_ENV === "development" ? false : true, //Cookie only works in HTTPS in Production
  });
};

export default generateTokenAndSetCookie;
