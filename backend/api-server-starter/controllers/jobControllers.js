const mongoose = require("mongoose");
const Job = require("../models/jobModel");
const getAllJobs = async(req, res) => {
    try {
        const jobs = await Job.find({}).sort({createdAt: -1});
        res.status(200).json(jobs);
    } catch(error) {
        res.status(500).json({message: "Failed to retrive jobs"});
    }
};
const getJob = async(req, res) => {
const {jobId} = req.params;
    try {
        const job = await Job.findById(jobId);
        console.log(job,"This is the job")
        if (!job) {
            return res.status(404).json({message: "Job not found"});
        }else{
        res.status(200).json(job);
        }
    }catch(error){
        res.status(500).json({message: "Get Job Failed", error: error.message})
    }
};

const createJob = async(req, res) =>{
    // console.log("inside create job")
    try {
        const newJob = await Job.create({ ...req.body});
        res.status(201).json(newJob);
    } catch (error) {
        res.status(404).json({message: "Failed to create job--", error:error.message});
    };


};
const updateJob = async(req, res) => {
    const {jobId} = req.params;

    if(!mongoose.Types.ObjectId.isValid(jobId)){
        return res.status(400).json({message: "Invalid job ID"});
    }
    try {
        const updatedJob = await Job.findOneAndUpdate(
            { _id: jobId },
            { ...req.body },
            { new: true }
    );
     if (updatedJob) {
      res.status(200).json(updatedJob);
    } else {
      res.status(404).json({ message: "Job not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update job" });
  }
};

const deleteJob = async(req, res) => {
    const {jobId} = req.params;

    if(!mongoose.Types.ObjectId.isValid(jobId)){
        return res.status(400).json({message: "Invalid job ID"});
    }
    try {
        const deletedJob = await Job.findOneAndDelete({_id:jobId});
        if(deletedJob) {
            res.status(204).send();
        } else {
            console.log("helre")
            res.status(404).json({message: "Job not found"});
        }
    } catch (error){
        res.status(500).json({message: "Failed to delete job"});
    }

};
module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
};
