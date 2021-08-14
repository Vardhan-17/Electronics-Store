const HttpError = require("../models/http-Error");
const User = require("../models/user");

const loginUserById = async (req, res, next) => {
  const { email, password } = req.body;

  let user;

  try {
    user = await User.find({ email: email });
  } catch (err) {
    return next(new HttpError("Something went wrong,try again later", 500));
  }

  if (!user || user.length === 0) {
    return next(new HttpError("User doesn't exists.", 404));
  }

  if (password !== user[0].password) {
    return next(new HttpError("Incorrect password.", 404));
  }

  res.json(user.map((u) => u.toObject()));
};

const signinUserById = async (req, res, next) => {
  const { email, username, password } = req.body;

  const user = new User({ email, username, password, cart: [] });

  let checkUser;

  try {
    checkUser = await User.find({ email: email });
  } catch (err) {
    return next(new HttpError("Something went wrong,try again later", 500));
  }

  if (checkUser.length !== 0) {
    return next(new HttpError("User already exists,try to login", 400));
  }

  try {
    await user.save();
  } catch (err) {
    return next(new HttpError("Error", 500));
  }

  res.json(user);
};

const getCartItemsByUserId = async (req, res, next) => {
  const email = req.params.uid;

  let items;
  try {
    items = await User.find({ email });
  } catch (err) {
    return next(new HttpError("Something went wrong", 500));
  }

  res.json(items[0].cart);
};

const addCartItemsByUserId = async (req, res, next) => {
  const { email, productId, quantity } = req.body;

  let item;
  try {
    item = await User.find({ email });
  } catch (err) {
    return next(new HttpError("Something went wrong", 500));
  }

  let curItem = item[0].cart.filter((it) => {
    return it.productId.equals(productId);
  });

  if (!curItem || curItem.length === 0) {
    item[0].cart.push({ productId, quantity });
  } else {
    curItem[0].quantity += +quantity;
  }

  try {
    await item[0].save();
  } catch (err) {
    return next(new HttpError("Something went wrong", 500));
  }

  res.json(item[0].cart);
};

exports.addCartItemsByUserId = addCartItemsByUserId;
exports.getCartItemsByUserId = getCartItemsByUserId;
exports.signinUserById = signinUserById;
exports.loginUserById = loginUserById;
