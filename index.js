const body_parser = require('body-parser');
const express = require('express');
const ejs = require('ejs');
const app = express();
const quiz = require("./models/quiz_db")
const scoreboard = require("./routes/scoreboard")
require("dotenv").config()

/* MiddleWares 
=============== */

app.set('view engine','ejs');
app.use(express.static(__dirname));
app.use(body_parser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.render('index.ejs');
});

app.get('/quizz',(req,res)=>{
    res.render('quizz.ejs')
});

app.get('/apprendre',(req,res)=>{
    res.render('apprendre.ejs');
});

app.get('/score', async (req,res) =>{
    await scoreboard.addScore(res)
})


/* Listener 
=============== */

app.listen(process.env.PORT, process.env.IP);

quiz.mongConnect().catch(console.dir)
quiz.fillQuiz()