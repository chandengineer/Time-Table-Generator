const mongoose=require("mongoose");
const bcrypt = require("bcryptjs");
const jwt= require("jsonwebtoken");

const userschema= new mongoose.Schema({
    username:{
        type:String,require:true
    },
    email:{
        type:String,require:true
    },
    phone:{
        type:String,require:true
    },
    password:{
        type:String,require:true
    },
    isAdmin:{
        type:Boolean,default:false
    }
});

userschema.methods.generateToken = async function () {
    console.log("I am token");
    try {
      return jwt.sign(
        {
          userId: this._id.toString(),
          email: this.email,
          isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "30d",
        }
      );
    } catch (error) {
      console.error("Token Error: ", error);
    }
  };
  userschema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
//create my first collection or table named User in database name mern_admin
const User= new mongoose.model("User",userschema);
module.exports=User;