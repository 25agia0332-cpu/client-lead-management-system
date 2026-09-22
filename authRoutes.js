const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "Admin@123";
  if (!email || !password) return res.status(400).json({ message: "Email and password are required" });
  if (email.toLowerCase() !== adminEmail.toLowerCase() || password !== adminPassword)
    return res.status(401).json({ message: "Invalid admin credentials" });
  const token = jwt.sign({ email: adminEmail, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "8h" });
  res.json({ message: "Login successful", token, admin: { email: adminEmail, role: "admin" } });
});
module.exports = router;
