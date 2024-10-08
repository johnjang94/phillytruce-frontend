import mongoose, { Schema } from "mongoose";
const SPMSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    terms: {
        type: Boolean,
        required: true,
    },
}, { timestamps: true });
export const User = mongoose.model("User", SPMSchema);
