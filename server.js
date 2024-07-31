//mongoose use CICD pipe lines
const express = require("express");//comman JS Vanela JS
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");

const app = express();
const PORT = 8000;
let data =[
    {
        name:"Raj",
        age:20
    },
    {
        name:"Raaj",
        age:20
    },
    {
        name:"Raaaj",
        age:22
    },
    {
        name:"Raaaaj",
        age:21
    },
]

app.get('/',(req,res)=>{
    res.send("<h1>i am tanmay</h1>");
    console.log("hello tanmay");
});//get is for send request from browser,, post is for send request from Server

app.get('/users',(req,res)=>{
    res.send(data);
    console.log("hello tanmay");
});
app.get('/users/greater',(req,res)=>{
    const greter = data.filter((users)=>users.age>20);
    res.send(greter);
    console.log("hello tanmay");
});

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`.bgBlue.black);
})