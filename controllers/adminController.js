const BankAccount = require("../models/BankAccount");
const User = require("../models/User");

exports.getAllBankAccounts = async (req, res) => {
  const query = req.query || {};
  const banks = await BankAccount.find(query).populate("user", "username email");
  res.json(banks);
};
