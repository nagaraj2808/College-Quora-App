import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        id: { type: String },
        creatorId: { type: String },
        creatorName: { type: String },
        message: { type: String },
        images: { type: [String], default: [] },
        likes: { type: [String], default: [] },
        createdAt: {
            type: Date,
            default: new Date()
        }


    }
)

export default mongoose.model("Post", postSchema);