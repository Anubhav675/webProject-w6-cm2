const express =  require("express");
const {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,

} = require("../controllers/userControllers");

const router = express.Router();
router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/userId", getUser);
router.put("/userId", updateUser);
router.delete("/userId", deleteUser);

module.exports = router;
