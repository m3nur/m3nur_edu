import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/User.js";

/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const { name, email, password: pass } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(pass, salt);

    const newUser = new User({
      name,
      email,
      password: passwordHash,
    });
    const savedUser = await newUser.save();
    const { password, ...others } = savedUser._doc;
    res.status(201).json({ ...others });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password: pass } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ msg: "User does not exist. " });
      return;
    }

    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      res.status(400).json({ msg: "Invalid credentials. " });
      return;
    }

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "90d" }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({ token, ...others });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
