const express=require("express");
const app=express();
app.get("/adduser",(req,res)=>{
    res.sendFile("./register.html");
})
app.use(express.urlencoded("true"));
app.listen(4545,()=>{
    console.log("server started");
})
