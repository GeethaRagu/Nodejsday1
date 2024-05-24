import express from "express";
//import


//declare/initialize
const app = express();
const PORT = 4000;

//middleware
app.use(express.json())

//routes
app.get(`/`,(req,res)=>{
    res.status(200).json({message:"Hi all welcome to our first node app"})
    //res.status(200).send(`<div style="background-color:Aqua;color:black"><h1>Welcome to our first app in node js</h1></div>`)
})

//running port

app.listen(PORT,()=>{
    console.log(`App is listening on the port ${PORT}`);
})
