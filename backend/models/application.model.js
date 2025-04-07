import mongoose from "mongoose";
 const applicationSchema= new mongoose.Schema({
    job:{
        type:mongoose.Schmea.Types.ObjectId,
        ref:'job',
        required:true
    },
    job:{
        type:mongoose.Schmea.Types.ObjectId,
        ref:'job',
        required:true
    },
    applicant:{
        type:mongoose.Schmea.Types.ObjectId,
        ref:'User',
        required:true
    },
    status:{
        type:String,
        enum:['pending','accepted','rejected'],
        default:'pending'
    }
 },{timestamps:true});
 export const Application =  mongoose.model("Application",applicationSchema);