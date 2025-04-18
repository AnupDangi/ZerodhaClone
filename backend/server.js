require("dotenv");
const express=require("express");
const app=express();

const port=process.env.port||5000;


app.use("/",(req,res)=>{
    res.send("This is root");
})

app.listen(port,()=>{
    console.log(`Server is listening to http://localhost:${port}`);
})
