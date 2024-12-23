const bodyParser = require("body-parser");
const express=require("express");
const mongoose=require("mongoose");
const path=require('path');
constbodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:false}));

const port=5000;

app.use(express.static(path.join(__dirname,'Public')));


app.get('/',(req,res)=>{
    // res.send("Welcome Server is running........");
    res.send(__dirname + '/Public/index.html');
})
console.log(__dirname + '/Public/index.html')

mongoose.connect("mongodb://localhost:27017",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Mongo is connected");
})


const Schema=mongoose.Schema;
const dataSchema=new Schema({
    name:String,
    email:String,
    MobileNumber:Number 
});


const Data = mongoose.model('Data',dataSchema);

app.post('/submit',(req,res)=>{
    const {Name,Email,MobileNumber}=req.body;
    const newData=new Data({
        Name,
        Email,
        MobileNumber,
    });
    newData.save();
    res.send("Thanks for filling the form...Your Event has been booked");
})

app.listen(port,()=>{
    console.log(`port is running ${port}`);
})