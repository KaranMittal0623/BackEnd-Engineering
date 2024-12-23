const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/customerRegistration",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log(`Connection sucessfull`);
}).catch((e)=>{
    console.log(`Connection Error`,e);  
}) 