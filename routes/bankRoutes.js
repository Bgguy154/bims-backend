const express = require("express");
const { verifyToken } = require("../middlewares/authMiddleware");
const {
  addBank,
  getBanks,
  updateBank,
  deleteBank
} = require("../controllers/bankController");

const router = express.Router();

router.post("/", verifyToken, addBank);
router.get("/", verifyToken, getBanks);
router.put("/:id", verifyToken, updateBank);
router.delete("/:id", verifyToken, deleteBank);

module.exports = router;
