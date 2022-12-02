
let score = 0;
let count = 0;
let hasQuizTimedOut = false;
let data = []

function displayQuizz(){
    let question = document.querySelector("main .question");
    let answer1 = document.querySelector("main .label-1");
    let answer2 = document.querySelector("main .label-2");
    let answer3 = document.querySelector("main .label-3");
    let answer4 = document.querySelector("main .label-4");
    console.log(count);
    console.log(questions[count]);
    question.innerHTML = questions[count].question;
    answer1.innerHTML = questions[count].answers[0][0];
    answer2.innerHTML = questions[count].answers[1][0];
    answer3.innerHTML = questions[count].answers[2][0];
    answer4.innerHTML = questions[count].answers[3][0];
}

function handleClick(e){
    count++;
    e.preventDefault();
    if(count<4){
        updateScore()
        displayQuizz();
    }else {
        console.log(score);
        displayScore();
    }
}

function displayScore(){
    sendData(score)
    hideTime();
    let scoreEl = document.querySelector('.result .title');
    let form = document.querySelector('.answers-form');
    let title = document.querySelector('.question');
    title.style.display = 'none';
    form.style.display= 'none';
    scoreEl.innerHTML =  `${hasQuizTimedOut ? "Le temps est écoulé.<br><br>":""}Tu as ${score} réponse(s) justes sur 4`;
}

function updateScore(){
    let answerValue1 = document.querySelector("main .answer-1").checked;
    let answerValue2 = document.querySelector("main .answer-2").checked;
    let answervalue3 = document.querySelector("main .answer-3").checked;
    let answervalue4 = document.querySelector("main .answer-4").checked;
    let answers = [answerValue1,answerValue2,answervalue3,answervalue4];
    data.push({"question":questions[count],answers:[
        [document.querySelector("main .answer-1").innerHTML,questions[count].answers[0][1]],
        [document.querySelector("main .answer-2").innerHTML,questions[count].answers[1][1]],
        [document.querySelector("main .answer-3").innerHTML,questions[count].answers[2][1]],
        [document.querySelector("main .answer-4").innerHTML,questions[count].answers[3][1]]
    ]})
    console.log(data);
    answers.forEach((answer,i)=>{
        console.log(answer,questions[count].answers[i][1]);
        if(answer==true && true==questions[count].answers[i][1]){
            score++;
            console.log(score);
        }
    })
}

function initListeners(){
    let button = document.querySelector("main .send-btn");
    button.addEventListener("click",handleClick);
}

initListeners();
displayQuizz();