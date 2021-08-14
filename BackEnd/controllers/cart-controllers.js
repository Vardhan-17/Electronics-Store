const HttpError = require("../models/http-Error");
const Cart = require("../models/cart");

const getCartItemsByUserId = async (req, res, next) => {
  const { userId } = req.body;

  let items;
  try {
    items = await Cart.find({ userId });
  } catch (err) {
    throw new HttpError("Something went wrong", 500);
  }

  res.json({ items: items.map((item) => item.toObject()) });
};

const addCartItemsByUserId = async (req, res, next) => {
  const { userId, productId, quantity } = req.body;

  let item;
  try {
    item = await Cart.find({ userId, productId });
  } catch (err) {
    throw new HttpError("Something went wrong", 500);
  }

  if (item.length === 0) {
    try {
      item = new Cart({ userId, productId, quantity });
      await item.save();
    } catch (err) {
      throw new HttpError("Something went wrong", 500);
    }
  } else {
    item = item[0];
    item.quantity += quantity;
    try {
      await item.save();
    } catch (err) {
      throw new HttpError("Something went wrong", 500);
    }
  }

  res.json({ item });
};

exports.getCartItemsByUserId = getCartItemsByUserId;
exports.addCartItemsByUserId = addCartItemsByUserId;
