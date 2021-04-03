var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Olá Mundo!");
//    res.json({ nome: "Joao Lima", idade: 64 })
});
app.listen(3000, function(){
    console.log("Executando na porta 3000");
});