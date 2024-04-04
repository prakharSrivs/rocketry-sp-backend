const express = require('express');
const cors = require("cors");

const app = express();

app.use(cors());

app.get('/accel',async(req,res)=>{
    try{
        const response = await fetch("http://192.168.238.186/accel")
        const data = await response.json();
        return res.json(data);
    }catch(e){
        console.log(e.message);
        return res.json({ "error":"Network Error" });
    }
})

app.get('/alti',async(req,res)=>{
    try{
        const response = await fetch("http://192.168.238.186/bmp")
        const data = await response.json();
        return res.json(data);
    }catch(e){
        console.log(e.message);
        return res.json({ "error":"Network Error" })
    }
})

app.listen(4400,()=>{
    console.log("Server started on port 4400");
})