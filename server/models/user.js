import mongoose from "mongoose";
const followSchema =mongoose.Schema(
    {
        id:{type:String},
        name:{type:String}        
    },{_id:false}
)
const userSchema = mongoose.Schema(
    {
        name:{type:String,required:true},
        email: { type: String, required: true },
        password:{type:String,required:true},
        id: { type: String },
        followers:[
            followSchema
        ],
        following:[
            followSchema
        ]


    }
)

export default mongoose.model("User",userSchema);