const {Schema,model}=require("mongoose");

const facultyschema= new Schema({
    faculty_id:{
        type:String, required:true
    },
    faculty_name:{
        type:String, required:true
    },
    designation:{
        type:String, required:true
    },
    branch:{
        type:String, required:true
    }
});

const faculty = new model("Faculty",facultyschema);
module.exports=faculty;