const {Schema,model}=require("mongoose");

const preferschema= new Schema({
    faculty_id:{
        type:String, required:true
    },
    faculty_name:{
        type:String, required:true
    },
    course_code:{
        type:String, required:true
    },
    course_name:{
        type:String, required:true
    },
});

const Prefer = new model("Prefer",preferschema);
module.exports=Prefer;