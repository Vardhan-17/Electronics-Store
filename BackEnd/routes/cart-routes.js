const express = require("express");

const cartControllers = require("../controllers/cart-controllers");

const router = express.Router();

router.get("/", cartControllers.getCartItemsByUserId);

router.post("/", cartControllers.addCartItemsByUserId);

module.exports = router;