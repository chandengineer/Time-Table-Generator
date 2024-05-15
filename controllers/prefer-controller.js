const prefer_model= require("../models/prefer-model");



const prefer = async(req,res)=>{
try {
    const response=req.body;
    await prefer_model.create(response);
    return res.status(200).json({msg:"preferences added successfully"});

} catch (error) {
    return res.status(200).json({msg:"preferences failed to add"});    
}
};
module.exports=prefer;