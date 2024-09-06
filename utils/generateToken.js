import jwt from "jsonwebtoken";

const generateTokenAndCookie = async (userId, res) => {
  const token = await jwt.sign({ userId }, process.env.JWT_TOKEN_SECRET, {
    expiresIn: "10d",
  });

  const options = {
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite: "strict", // CSRF attack cross-site request forgery attacks
    secure: true,
  };

  res.status(200).cookie("token", token, options);
};

export default generateTokenAndCookie;