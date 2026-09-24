const express = require("express");
const router = express.Router();
const {
    signupUser,
    loginUser

} = require("../controllers/userControllers");


router.post("/login", loginUser);
router.post("/signup", signupUser);
// /api/users/signup
module.exports = router;
