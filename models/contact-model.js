const {Schema,model}=require("mongoose");

const contactschema= new Schema({
    course_code:{
        type:String, required:true
    },
    course_name:{
        type:String, required:true
    },
    credits:{
        type:String, required:true
    }
});

const Contact = new model("Course",contactschema);
module.exports=Contact;