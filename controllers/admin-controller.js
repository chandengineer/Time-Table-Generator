const Prefer= require("../models/prefer-model");

const getallusers=async(req,res)=>{
try {
    const users= await Prefer.find();
    console.log(users);
    if(!users||users.length==0){
        return res.status(200).json({message:"no users found"});
    }
    return res.status(200).json(users);
} catch (error) {
    next(error);
}
};
// const getallcontact=async(req,res)=>{
//     try {
//         const contacts= await Contact.find();
//         console.log(contacts);
//         if(!contacts||contacts.length==0){
//             return res.status(200).json({message:"no contacts found"});
//         }
//         return res.status(200).json(contacts);
//     } catch (error) {
//         next(error);
//     }
//     };

const deleteuser=async(req,res)=>{
    try {
        const id=req.params.id;
        await Prefer.deleteOne({_id:id});
        res.status(200).json({msg:"user deleted succesfully"});
    } catch (error) {
        console.log(error);
    }
};
    const getusersbyid=async(req,res)=>{
        try {
            const id=req.params.id;
           const data= await Prefer.findOne({_id:id});
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
        }

};

// const updateuserbyid =async(req,res)=>{
//     try {
//         const id=req.params.id;
//        const updateuserdata= req.body;
//        const updatedData=await User.updateOne({_id:id},{
//         $set:updateuserdata,
//        });
//        return  res.status(200).json(updatedData);
//     } catch (error) {
//         console.log(error);
//     }

// };
module.exports={getallusers,deleteuser,getusersbyid};