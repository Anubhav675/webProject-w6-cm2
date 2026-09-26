const express =  require("express");
const requireAuth = require("../middleware/requireAuth");

const {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
} = require("../controllers/jobControllers");
const router = express.Router();

router.get("/", getAllJobs);
router.get("/:jobId", getJob);
router.use(requireAuth);
router.post("/", createJob);
router.put("/:jobId", updateJob);
router.delete("/:jobId", deleteJob);

module.exports = router;
