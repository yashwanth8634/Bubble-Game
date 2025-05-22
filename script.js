var score=0
var timeinsec=60;

function MakeBubble(){
    let clutter="";

for (let i = 0; i < 152; i++) {
    let rn=Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML=clutter;
}

function RunTimer(){
    
    let timerin= setInterval(function(){
        if(timeinsec>0){
            timeinsec--;
            document.querySelector("#timer").textContent=timeinsec
        } 
        else{
            clearInterval(timerin);
            document.querySelector("#pbtm").innerHTML=`<h1 id="gameover">GAME OVER!!</h1>`
        }
    },1000)
}
var rn1
function getNewVal(){
    rn1=Math.floor(Math.random()*10)
    document.querySelector("#hitval").innerHTML=rn1;
}

function IncreaseScore(){
    document.querySelector("#score").textContent=score;  
    score += 10;

}

document.querySelector("#pbtm")
.addEventListener("click",function(a){
    var clickednum=Number(a.target.textContent)
    if(rn1===clickednum){
        IncreaseScore();
        MakeBubble();
        getNewVal();
    }
})

MakeBubble();
RunTimer();
getNewVal();
IncreaseScore();