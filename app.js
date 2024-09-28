const express = require("express");
const app = express();
const path=require("path");
const ejsMate = require("ejs-mate");

let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

app.listen(port , ()=>{
    console.log("app is listening on port 8080");
});

app.get("/", (req,res)=>{
    res.render("index.ejs");
});

app.get("/signin", (req,res)=>{
    res.render("signin.ejs");
});

app.get("/login", (req,res)=>{
    res.render("login.ejs");
});

app.post("/SIGNIN", (req,res)=>{
    res.render("ris.ejs");
});

app.post("/LOGIN", (req,res)=>{
    res.render("xrt.ejs");
});

app.get("/learn", (req,res)=>{
    res.render("learn.ejs");
});

app.get("/instruct", (req,res)=>{
    res.render("interact.ejs");
})

app.get("/yes" , (req,res)=>{
    res.render("yes.ejs");
});

app.get("/no" , (req,res)=>{
    res.render("no.ejs");
});

app.get("/permission" , (req,res)=>{
   res.render("perm.ejs");
});


