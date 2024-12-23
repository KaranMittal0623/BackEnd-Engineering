const mongoose=require("mongoose");
const employeeSchema = new mongoose.Schema(
    {
        firstname:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        gender:{
            type:String,
            required:true
        },
        phoneNumber:{
            type:Number,
            required:true,
            unique:true
        },
        age:{
            type:Number,
            required:true
        }
    }
)


// now we need to create a collection

const Customer = new mongoose.model("Customer");

module.exports=Customer;