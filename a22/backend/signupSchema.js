import mongoose from "mongoose";

const signupSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const signupModel = mongoose.model('userDatabase',signupSchema)

export default signupModel