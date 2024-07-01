import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"

const __dirname=dirname(fileURLToPath(import.meta.url));

const app=express();
const port=3000;

// Set EJS as the view engine
// app.set("view engine", "ejs");
// // Set the views directory
// app.set("views", __dirname + "/views");

// // Middleware to serve static files (CSS, images, etc.)
// app.use(express.static(__dirname + '/public'));

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true }));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/submit",(req,res)=>{
    res.render("block1.ejs");
});

app.post("/submit2",(req,res)=>{
    res.render("block2.ejs");
});

app.post("/submit3",(req,res)=>{
    res.render("block5.ejs");
});

app.post("/submit4",(req,res)=>{
    res.render("block3.ejs");
});

app.post("/submit5",(req,res)=>{
    res.render("block4.ejs");
});

app.post("/submit6",(req,res)=>{
    res.render("block6.ejs");
});


app.post("/submit7",(req,res)=>{
    res.render("block7.ejs");
});

app.post("/submit8",(req,res)=>{
    res.render("block8.ejs");
});

app.post("/submit9",(req,res)=>{
    res.render("winner.ejs");
});


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
