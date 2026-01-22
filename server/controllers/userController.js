const User = require("../models/User");

const getCurrentUser = async (req, res) => {
  try {
    res.json({
      success: true,
      user: {
        id: req.user._id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        role: req.user.role,
        phoneNumber: req.user.phoneNumber,
        email: req.user.email,
        birthday: req.user.birthday,
        gender: req.user.gender,
        acceptTerms: req.user.acceptTerms,
        receivedNews: req.user.receivedNews,
        createdAt: req.user.createdAt,
      },
    });
  } catch (error) {
    console.error("Get current user error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getCurrentUser,
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-pin");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      success: true,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        email: user.email,
        birthday: user.birthday,
        gender: user.gender,
        acceptTerms: user.acceptTerms,
        receivedNews: user.receivedNews,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error("Get user error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getCurrentUser,
};
