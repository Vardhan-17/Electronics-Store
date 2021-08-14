const HttpError = require("../models/http-Error");
const Product = require("../models/product");

const getProducts = async (req, res, next) => {
  let products;

  try {
    products = await Product.find();
  } catch (err) {
    console.log(err)
    return next(new HttpError("Something went wrong,try again later", 500));
  }

  res.json(products);
};

const getProductById = async (req, res, next) => {
  const id=req.params.pid;
  let product;

  try {
    product = await Product.findById(id);
  } catch (err) {
    return next(new HttpError("Something went wrong,try again later", 500));
  }

  res.json(product);
};

const addProduct = async (req, res, next) => {
  const { product, price, model, description, image ,category} = req.body;

  let newproduct = new Product({
    product,
    price,
    model,
    description,
    category,
    image,
  });

  try {
    await newproduct.save();
  } catch (err) {
    console.log(err);
    return next(new HttpError("Something went wrong,try again later", 500));
  }

  res.json(newproduct);
};

exports.getProducts = getProducts;
exports.addProduct = addProduct;
exports.getProductById=getProductById;
