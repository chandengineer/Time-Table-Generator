const express=require("express");
const router=express.Router();
const controller=require("../controllers/auth-controller");
const authMiddleware = require("../middleware/auth-middleware");
router.route("/").get(controller.home);
//router.route("/register").get(controller.register); get method edag..namda pages daga yen bardeti la ..adu post man daga torsteti
router.route("/register").post(controller.register);//post method : database dagind data display madteti
router.route("/login").post(controller.login);
 router.route("/user").get(authMiddleware,controller.user);
module.exports=router;