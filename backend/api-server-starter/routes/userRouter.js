const express =  require("express");
const {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,

} = require("../controllers/userControllers");

const router = express.Router();
router.get("/", getAllJobs);
router.post("/", createJob);
router.get("/jobId", getJob);
router.put("/jobId", updateJob);
router.delete("/jobId", deleteJob);

module.exports = router;
