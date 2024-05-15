const contact= require("../models/contact-model");



const contactForm = async(req,res)=>{
try {
    const response=req.body;
    await contact.create(response);
    return res.status(200).json({msg:"Course added successfully"});

} catch (error) {
    return res.status(200).json({msg:"course failed to add"});    
}
};
module.exports=contactForm;