const express= require("express");
const path = require("path");
const app = express()

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));});

app.get("/about" , (req , res) =>{
    res.sendFile(path.join(__dirname, "aboutMe.html"))})
app.get("/home" , (req , res) =>{
    res.sendFile(path.join(__dirname, "home.html"))})
app.get("/ContactMe" , (req , res) =>{
    res.sendFile(path.join(__dirname, "ContactMe.html"))})


app.listen(3000)