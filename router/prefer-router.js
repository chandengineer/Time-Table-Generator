const express = require("express");
const router= express.Router();
const prefer= require("../controllers/prefer-controller");

router.route("/prefer").post(prefer);

module.exports=router;