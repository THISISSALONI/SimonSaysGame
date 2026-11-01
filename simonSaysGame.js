let gameSeq = [];
let userSeq =[];
let started = false;
let level = 0;
let h4 = document.querySelector("h4");
let btns = ["pink", "red", "blue", "green"];

window.addEventListener("keypress", function(){
    if (started == false) {
        console.log("Game has started");
        started = true;
        levelUp();
    }
});

// can use only one flash function as btnflash. using two different to distinguish between user pressed flash and game flash.

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
       btn.classList.remove("gameflash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash");
    }, 200);
}

function levelUp(){
    userSeq = [];

    level++;
    h4.innerText= `level ${level}`;
    let rdmIdx = Math.floor(Math.random() * 3);
    let rdmClr = btns[rdmIdx];
    let rdmBtn = document.querySelector(`.${rdmClr}`);
    gameSeq.push(rdmClr);
    console.log(gameSeq);
    gameFlash(rdmBtn);
}
function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h4.innerHTML = `Game Over! <b> Your score is: ${level}</b> 
        <br> Press any key to start again!`;
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"
        },200);
        reset();
    }
}
function btnpress(){
let btn = this;
userFlash(btn);

usercolor = btn.getAttribute("id");
userSeq.push(usercolor);
checkAns(userSeq.length-1);
}

let allbtn = document.querySelectorAll(".button");
for (let btn of allbtn) {
    btn.addEventListener("click", btnpress);
}
function reset(){
    userSeq = [];
    gameSeq = [];
    level = 0;
    started = false;
}
