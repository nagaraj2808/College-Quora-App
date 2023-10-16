import mongoose from "mongoose";

const questionSchema = mongoose.Schema(
    {   
        creatorId:{type:String},
        
        question:{type:String,unique:true},

        createdAt:{
            type: Date,
            default: new Date()
        }

    }
)

export default mongoose.model("Question",questionSchema);