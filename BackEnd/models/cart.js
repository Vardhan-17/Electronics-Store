const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  productId: { type: String, required: true },
  userId: { type: String, required: true },
  quantity: { type: String, required: true }
});

module.exports = mongoose.model("Cart", cartSchema);
