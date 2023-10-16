import mongoose from "mongoose";

const answerSchema = mongoose.Schema(
    {
        id: { type: String },
        creatorId: { type: String },
        creatorName: { type: String },
        question: { type: String },
        answer: { type: String },
        images: {
            type: [String], default: []
        },
        createdAt: {
            type: Date,
            default: new Date()
        },
        likes: {
            type: [String], default: []
        }

    }
)

export default mongoose.model("Answer", answerSchema);