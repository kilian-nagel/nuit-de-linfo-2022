const body_parser = require('body-parser');
const express = require('express');
const ejs = require('ejs');
const app = express();

/* MiddleWares 
=============== */

app.set('view engine','ejs');
app.use(express.static(__dirname));
app.use(body_parser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.render('index.ejs');
})


/* Listener 
=============== */

app.listen(3000);