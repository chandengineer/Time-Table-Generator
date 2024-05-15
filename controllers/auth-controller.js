const User=require("../models/user-model");
const bcrypt = require("bcryptjs");


//home page logic:
const home=async(req,res)=>{
    try {
        res.status(200).send("well come to chand world using controller");
    } catch (error) {
        console.log(error);
    }
};

//registration page logic:
/*const register=async(req,res)=>{
    try {
        console.log(req.body)
        res.status(200).json({message:req.body});
    } catch (error) {
        res.status(200).json({message:"page not found"});
    }
};*/
//registration page logic:
const register=async(req,res)=>{
    try {
        console.log(req.body);
        const{username,email,phone,password}=req.body;
        const userexit=await User.findOne({email});
        if(userexit){
            return res.status(200).json({msg:"Email already exits"});
        }
        const hash_pass=await bcrypt.hash(password,10);
        const usercreate= await User.create({
            username,
            email,
            phone,
            password:hash_pass,});
            res.status(201).json({
                msg: "Registration Successful",
                token: await usercreate.generateToken(),
                userId: usercreate._id.toString(),
              });
        
    } catch (error) {
        res.status(200).json("internal server error");
    }
};
/*const login=async(req,res)=>{
  try {
    console.log(req.body);
    const {email,password}=req.body;
    const userexit=await User.findOne({email});
    if(!userexit){
       return res.status(400).json("Invalid Email");
    }
    else{
    const pass_match= await bcrypt.compare(password,userexit.password);
    //const pass_match= await userexit.comparePassword(password);
    if(pass_match){
        return res.status(200).json("Login Successfull");
    }
    else{
       return res.status(200).json("Invalid Email or password");

    }
}
  } catch (error) {
    res.status(200).json("Internal server error");

  }  
};*/
/*login page logic */
const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const userExist = await User.findOne({ email });
  
      if (!userExist) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      // const user = await bcrypt.compare(password, userExist.password);
      const isPasswordValid = await userExist.comparePassword(password);
      if (isPasswordValid) {
        res.status(200).json({
          message: "Login Successful",
          token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        });}
      else {
        res.status(401).json({ message: "Invalid email or passord " });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  
     
  };

  /* to send user data from database logic*/
  const user = async (req, res) => {
    try {
      // const userData = await User.find({});
      const userData = req.user;
      console.log(userData);
      return res.status(200).json({ userData });
    } catch (error) {
      console.log(` error from user route ${error}`);
    }
  };

  
module.exports={home,register,login,user};