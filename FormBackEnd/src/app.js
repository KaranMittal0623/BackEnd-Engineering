const express=require('express');
const path=require("path");
const app=express();

require("./db/conn");

const Customer=require("./models/customers");
const port=process.env.PORT || 3000;

const static_path=path.join(__dirname,"../Public");
app.use(express.static(static_path));
app.set("view engine", "hbs");



app.get("/", (req,res)=>{
    // res.send("Hello from Karan Mittal, Welcome Sir")q
    res.render("index")
});

app.listen(port,()=>{
    console.log(`Server is running at ${port}`); 
})