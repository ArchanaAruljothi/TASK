require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');


let port = process.env.PORT;
let host = process.env.HOST;

// use of express.static middle ware top serve static on server

app.use(express.static(__dirname+"/Task1"));


//path of template folder in that view folder
let viewPath = path.join(__dirname+'/templates/views');
let partialPath = path.join(__dirname+'/templates/partials')

//set view engine 
app.set("view engine","hbs");
app.set("views",viewPath);

hbs.registerPartials(partialPath);

app.get("/",(req,res,next)=>{
    // res.send("This is Home page");
    res.render("index1",{
        title:"Home",
        author:"Archana"
    })
})
app.get("/about1",(req,res,next)=>{
    // res.send("This is About page");
    res.render("about1",{
        title:"About",
        author:"Archana"
    })
})  
app.get("/contact1",(req,res,next)=>{
    // res.send("This is About page");
    res.render("contact1",{
        title:"About",
        author:"Archana"
    })
})  
app.get("/help1",(req,res,next)=>{
    // res.send("This is Help page");
    res.render("helpdesk1",{
        title:"Help",
        author:"Archana"
    })

})
app.get("/service1",(req,res,next)=>{
    // res.send("This is service page");
    res.render("servicegalary1",{
        title:"Service",
        author:"Archana"
    })
})
app.get("**",(req,res,next)=>{
    res.send("Page not Found");
})

app.listen(port,()=>{
    console.log(`server get started on ${host}:${port}`);

});