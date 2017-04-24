var express = require("express");

var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("index");
});

app.get("*", function(req, res){
    res.render("404");
});

app.listen(8002, function(){
   console.log("TRAPPIST-1 age calculator running..."); 
});