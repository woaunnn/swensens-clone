const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getPromotionProducts,
} = require("../controllers/productController");
const { protect } = require("../middleware/auth");
const { checkRole } = require("../middleware/role");

router.get("/", getAllProducts);
router.get("/promotions", getPromotionProducts);
router.get("/:id", getProductById);

router.post("/", protect, checkRole("admin"), createProduct);
router.put("/:id", protect, checkRole("admin"), updateProduct);
router.delete("/:id", protect, checkRole("admin"), deleteProduct);

module.exports = router;
