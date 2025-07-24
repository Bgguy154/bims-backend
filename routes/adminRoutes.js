const express = require("express");
const { getAllBankAccounts } = require("../controllers/adminController");
const { verifyToken } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", verifyToken, getAllBankAccounts);

module.exports = router;
