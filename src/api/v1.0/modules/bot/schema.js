import mongoose, { Schema } from "mongoose";

const botSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    user: String,
    body: Object,
    data: Object,
    time: {
        type: Date,
        default: Date.now
    }
})

const bot = mongoose.model("bot", botSchema);

export { bot };