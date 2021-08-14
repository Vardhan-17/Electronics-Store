const express = require("express");

const usersControllers = require("../controllers/users-controllers");

const router = express.Router();

router.post("/login", usersControllers.loginUserById);

router.post("/signin", usersControllers.signinUserById);

router.get("/cart/:uid", usersControllers.getCartItemsByUserId);

router.post("/cart", usersControllers.addCartItemsByUserId);

module.exports = router;
