const mongoose = require("mongoose");
const validator = require("validator");


const contactUsSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength: 1
    },
    email:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error(`Invalid Email Address`)
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min: 10,
    },
    message:{
        type:String,
        required:true,
        minLength: 2
    },
})



const Contact = mongoose.model("Contact", contactUsSchema);

module.exports = Contact;