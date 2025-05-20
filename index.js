
let cards = [];
let hasBlackjack=false;
let isAlive = false;
let message = "";
let sum=0;

let messageEl=document.getElementById("message-El");
let sumEl=document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");



function getRandomInt(min, max) {
  let number = Math.floor(Math.random() * (max - min + 1)) + min;
  if(number===1){
    return 11;
  }
  if(number>=11 && number<=13){
    return 10;
  }
  else{
    return number;
  }
}

function startGame(){
    isAlive=true;
    let firstCard=getRandomInt(1, 13);
    let secondCard=getRandomInt(1, 13);
    cards=[firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function newCard(){
    if(isAlive && !hasBlackjack){
        let card=getRandomInt(1, 13);
        cards.push(card);
        sum+=card;

        renderGame();
    }
}

function renderGame(){
    if(sum===21){
        hasBlackjack=true;
        message = "Hooray! You got Blackjack!";
    }

    else if(sum<21){
        message="Do you want to pick another card?"
    }

    else {
        isAlive = false;
        message = "Woops! You lost."
    }

    messageEl.textContent=message;
    sumEl.textContent=sum;
    arr_size = cards.length;

    cardEl.textContent="";

    for(let i=0; i<arr_size; i++){
        cardEl.textContent+=cards[i] + " ";
    }

}




