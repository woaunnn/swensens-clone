const User = require("../models/User");
const jwt = require("jsonwebtoken");

const otpStorage = new Map();

const generateOtp = (req, res) => {
  const { phoneNumber } = req.body;

  if (!phoneNumber) {
    return res.status(400).json({ error: "Phone number is required" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  otpStorage.set(phoneNumber, {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000,
  });

  console.log(`OTP for ${phoneNumber}: ${otp}`);

  res.json({
    success: true,
    message: "OTP sent successfully",
    otp,
  });
};

const register = async (req, res) => {
  try {
    const { userData, otp } = req.body;

    if (!userData || !otp) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { phoneNumber, pin } = userData;

    if (!pin) {
      return res.status(400).json({ error: "PIN is required" });
    }

    const storedOtpData = otpStorage.get(phoneNumber);

    if (!storedOtpData) {
      return res.status(400).json({ error: "OTP not found or expired" });
    }

    if (Date.now() > storedOtpData.expiresAt) {
      otpStorage.delete(phoneNumber);
      return res.status(400).json({ error: "OTP expired" });
    }

    if (storedOtpData.otp !== otp) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    otpStorage.delete(phoneNumber);

    const existingUser = await User.findOne({ phoneNumber });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    userData.role = "user";

    const user = await User.create(userData);

    res.json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const login = async (req, res) => {
  try {
    const { phoneNumber, pin, email, password } = req.body;
    console.log(`[Tawan] LOG: req.body ---> `, req.body);

    let user;

    if (email && password) {
      user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      if (user.pin !== password) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
    } else if (phoneNumber && pin) {
      user = await User.findOne({ phoneNumber });

      if (!user) {
        return res.status(401).json({ error: "Invalid phone number or PIN" });
      }

      if (user.pin !== pin) {
        return res.status(401).json({ error: "Invalid phone number or PIN" });
      }
    } else {
      return res.status(400).json({
        error: "Please provide either email/password or phone number/PIN",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        phoneNumber: user.phoneNumber,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      message: "Login successful",
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  generateOtp,
  register,
  login,
};
