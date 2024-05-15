const express = require("express");
const router= express.Router();
const faculty=require("../controllers/service-controller");

router.route("/faculty").post(faculty);

module.exports=router;