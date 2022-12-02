
let time = 30000;

function changeTime(){
    if(time>0){
        displayTime();
        time -= 1000;
    }
    else {
        hideTime();
        stopQuizz();
        clearInterval(changeTime);
    }
}

function displayTime(){
    let timeEl = document.querySelector(".timer");
    timeEl.innerHTML = time/1000;
}

function hideTime(){
    let timeEl = document.querySelector(".timer");
    timeEl.style.display = "none";
}

function stopQuizz(){
    hasQuizTimedOut = true;
    displayScore();
}

setInterval(changeTime,1000);
