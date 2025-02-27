const express=require("express");
const app=express();
let userData = [];
app.use(express.urlencoded({ extended: true }));
app.get("/adduser",(req,res)=>{
    let path=__dirname+"/register.html";
    res.sendFile(path);
})
app.post("/adduser",(req,res)=>{
    let{username,useremail,userpassword}=req.body;
    console.log(username,useremail,userpassword);
    let newUser={
        name:username,
        email:useremail,
        password:userpassword
    }
    userData.push(newUser);
    res.send(userData);
})
app.listen(4545,()=>{
    console.log("server started");
})
//express.urlencoded middleware or function passes the url encoded data to object