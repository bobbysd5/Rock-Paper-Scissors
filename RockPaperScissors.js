const buttons = document.querySelectorAll("button");
const output = document.querySelector(".output");
let gameArray = ["Rock", "Paper", "Scissors"];
let score = [0,0];

for (i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", play)
};

function play (rps){
    computerPlay = Math.floor(Math.random() * 3);
    computerDecision = gameArray[computerPlay];
    playerDecision = rps.target.innerText;

   
    

    let result = checkWinner (playerDecision, computerDecision);
  /*   if (result == "Player Wins") {
        score[0]++;
    } else if (result == "Computer Wins"){
        score[1]++;
    }else {
        result += "tie rematch!"
    }

    console.log(result);
    console.log(score);
    output.innerHTML =`${playerDecision} vs ${computerDecision} <br> Player ${score[0]} Computer ${score[1]}`; */
    output.innerHTML =`${playerDecision} vs ${computerDecision} <br> Player ${score[0]} Computer ${score[1]}`;
    console.log(result)
    console.log(score);
};

function checkWinner (pd, cd) {
    if (pd === cd){
        return "It's a tie"
    };
    if (pd === "Rock"){
        if (cd === "Scissors"){
            score[0]++
            return "Player Wins"
            
        }else {
            score[1]++;
            return "Computer Wins"
            
        };
    };
    if (pd === "Scissors") {
        if(cd === "Paper"){
            score[0]++
            return "Player Wins"
            
        }else {
            score[1]++;
            return "Computer Wins"
            
        };
    };
    if (pd === "Paper") {
        if(cd === "Rock"){
            score[0]++
            return "Player Wins"
            
        }else{
            score[1]++;
            return "Computer Wins"
            
        };
    };
};
