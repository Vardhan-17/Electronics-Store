const express = require("express");

const ordersControllers = require("../controllers/orders-controllers");

const router = express.Router();

router.get("/", ordersControllers.getOrdersByUserId);

router.post("/", ordersControllers.addOrdersByUserId);

module.exports = router;