var timer = 0;
let  stratId;
function startGame(){
    var timerObj = document.getElementById("showTimer");
    stratId = setInterval(function (){
        timerObj.innerText = timer++;
    },1000)
}

function stopTimer(){
    clearInterval(stratId)

}
function resetTimer(){
    clearInterval(stratId)
    var timerObj = document.getElementById("showTimer");
    timerObj.innerText = 0;
    timer = 0;
}

// resetTimer();