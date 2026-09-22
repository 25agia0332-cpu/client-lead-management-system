const mongoose = require("mongoose");
const leadSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, trim: true, default: "" },
  source: { type: String, trim: true, default: "Website" },
  status: { type: String, enum: ["New", "Contacted", "Converted"], default: "New" },
  notes: { type: String, trim: true, default: "" },
  followUpDate: { type: Date, default: null }
}, { timestamps: true });
module.exports = mongoose.model("Lead", leadSchema);
