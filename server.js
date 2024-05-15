require("dotenv").config();
const express=require("express");
const cors = require("cors");
const path = require("path");
const app=express();
const router=require("./router/auth-router");
const connectdb=require("./utils/db");
const contactroute = require("./router/contact-router");
const faculty_route=require("./router/service-router");
const admin=require("./router/admin-router");
const user=require("./router/prefer-router");


const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };

  
  app.use(cors(corsOptions));
  app.use(express.json());
app.use("/api/",router);
app.use("/api/",contactroute);
app.use("/api/",faculty_route);
app.use("/api/admin/",admin);
app.use("/api/user/",user);
app.get("/", (req, res) => {
app.use(express.static(path.resolve(__dirname, "client", "dist")));
res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
 });

// app.get("/",(req,res)=>{
//     res.status(200).send("well come to chand world");
// });
// app.get("/register",(req,res)=>{
//     res.status(200).send("well come to Registration page");
// });

const port=5000;
connectdb().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running at port number :${port}`);
    });

});
