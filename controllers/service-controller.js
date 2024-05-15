const service_model= require("../models/service-model");



const faculty = async(req,res)=>{
try {
    const response=req.body;
    await service_model.create(response);
    return res.status(200).json({msg:"faculty added successfully"});

} catch (error) {
    return res.status(200).json({msg:"faculty failed to add"});    
}
};
module.exports=faculty;