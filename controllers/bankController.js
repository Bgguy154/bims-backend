const BankAccount = require("../models/BankAccount");

exports.addBank = async (req, res) => {
  try {
    const bank = new BankAccount({ ...req.body, user: req.userId });
    await bank.save();
    res.status(201).json(bank);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBanks = async (req, res) => {
  const banks = await BankAccount.find({ user: req.userId });
  res.json(banks);
};

exports.updateBank = async (req, res) => {
  const updated = await BankAccount.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteBank = async (req, res) => {
  await BankAccount.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};
