const express = require("express");
const router = express.Router();
const {
  generateOtp,
  register,
  login,
} = require("../controllers/authController");

router.post("/generate-otp", generateOtp);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
