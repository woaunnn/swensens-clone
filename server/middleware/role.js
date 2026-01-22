const checkRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    console.log(`[Tawan] LOG: roles ---> `, roles);
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        error:
          "Access denied. You do not have permission to perform this action",
      });
    }

    next();
  };
};

module.exports = { checkRole };
