const express = require('express');
const app = express();
const port = 8888;

var fs = require("fs");
var html = fs.readFileSync("index.html");
var html_admin = fs.readFileSync("admin.html");

app.get('/', (req,resp) => {
    resp.end(html);
});

app.get('/admin', (req,resp) => {
    resp.end(html_admin);
});

app.listen(8888, ()=> {
    console.log("rodando express")
})