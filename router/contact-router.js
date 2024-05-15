const express = require("express");
const router= express.Router();
const courseForm=require("../controllers/contact-controller");

router.route("/course").post(courseForm);

module.exports=router;