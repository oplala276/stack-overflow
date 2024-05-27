import mongoose from 'mongoose'

const loginHistorySchema = new mongoose.Schema({
    browser: String,
    os: String,
    device: String,
    ip: String,
    loginTime: { type: Date, default: Date.now },
  });

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required:true
    },
    about: {
        type: String,
    },
    tags: {
        type: [String],
    },
    loginHistory: [loginHistorySchema],
    joinedOn: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("User", userSchema)