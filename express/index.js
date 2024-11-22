const express = require("express");
const app = express();
exports.app = app;

app.get("/", function(req,res){
    res.sendFile(__dirname+"/html/index.html");
})

app.get("/sobre",function(req,res){
    res.send("Sobre meu app")
})

app.get("/blog", function(req,res){
    res.send("blog do meu site")
})

app.listen(8081, function(){
    console.log("Servidor funcionando na URL http://localhost:8081")
})
//Para acessar: 
//localhost:8081