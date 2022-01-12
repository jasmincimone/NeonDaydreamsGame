//Game will start with prompts.
//Prompts will lead you to matching game.




//- images should be in an array.


//-Computer uses Math.random in some capacity to choose two cards.


//-Cards will have number values.


//-Win Function will be if the numbers match, the player wins.


//-If computer wins, Player loses game. 


//-After winning the first round, player will click NEXT ROUND BUTTON


//-If player loses a round, the game restarts. WRITE LOOP FOR WIN/LOSE SEQUENCE.


//-EXIT LOOP AND RESTART GAME UPON LOSING A LEVEL.


//-Next Round button will take player to the next round in which they pick two cards,
//see if they match, and if they dont, the computer gets a turn to randomly choose two cards.


//-THE LOOP CONTINUES UNTIL THE COMPUTER WINS OR THE PLAYER WINS, ETC. 


//-3 ROUNDS.


//-PROMPTS ON EVERY LEVEL TO LEAD WITH THE STORY LINE. 


// -write code for on click event where upon clicking card,
// the card shows a face with an animoji (linked image)

// const stage1 = document.getElementById('stage1');
// const stage2 = document.getElementById('stage2');

// stage1.classList.toggle('hidden');
// // using timeout
// stage2.addEventListener(`click`, () => {
//   stage2.classList.toggle(`hidden`)
//   stage2.classList.remove(`show`)
//   stage1.classList.toggle(`hidden`)
//   setTimeout(() => {
//     stage1.classList.toggle(`hidden`)
//     stage2.classList.remove(`hidden`)
//     stage2.classList.toggle('show')
//   }, 2000)
// })



// selects all memory-card elements
const cards = document.querySelectorAll('.memory-card');
// const roundOne = document.getElementById('roundOne')
// const roundTwo = document.getElementById('roundTwo')
// const roundThree = document.getElementById('roundThree')

// Variables hasFlippedCard & flippedCard manage flip state; 
let hasFlippedCard= false;
//lockBoard variable declared so when player clicks 2nd card, lockBoard is set to true 
//and condition if (lockBoard) return; will prevent any card flipping before cards are hidden or match
let lockBoard = false;
let firstCard, secondCard;

//FLIP CARD FUNCTION - when card clicked, flipCard function is fired. 
// This represents card click. function accesses element's classList and toggles flip class
function flipCard() {
    // this.classList.toggle('flip');
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

// If no card is flipped, hasFlippedCard is set to true, and flippedCard is set to clicked card.
if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
    }


secondCard = this;
lockBoard = true; 

checkForMatch();
}

var switchPlayer= (player) =>{
    setTimeout(()=>{
        // alert("Change Player")
         var gamePrompts = document.getElementById("gamePrompts")
        gamePrompts.innerHTML = "Your Turn!"
        var switchPlayerPrompt = confirm("WRONG MATCH. =( Switch Player.")
    }, 1000)
    var gamePrompts = document.getElementById("gamePrompts")
    gamePrompts.innerHTML = " "
}

var winner = () => {
    setTimeout(() => {
        // alert("You Have Won!!!")
        // var gamePrompts = document.getElementById("gamePrompts")
        // gamePrompts.innerHTML = "Next Round!"
        var winnerPrompt = confirm("IT'S A MATCH!!! <3");
       return;

       resetBoard();
    }, 1000)
}

//DISABLE CARDS FUNCTION - invoked if there is a match and 
// event listeners on both cards are detached to prevent further flipping
function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}
//UNFLIP CARDS FUNCTION - if there is no match, unflipCards is invoked & turns both cards
//back by 1500ms timeout that removes .flip class
function unflipCards(){
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')

        resetBoard()
    }, 1000)
}


// RESET BOARD FUNCTION - resets the firstCard and secondCard variables after each round.
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}


//SHUFFLE FUNCTION - Shuffle function to iterate through cards, generate a random number & assign it to flex-item order property.
(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
})();

// loops through each element and attaches event listener
cards.forEach(card => card.addEventListener('click', flipCard));



// create next round
// function gameTwo(){
//     roundOne.classList.toggle('hidden');
// // using timeout
//     round2.addEventListener(`click`, () => {
//     roundTwo.classList.toggle(`hidden`)
//     roundTwo.classList.remove(`show`)
//     roundOne.classList.toggle(`hidden`)
//   setTimeout(() => {
//     roundOne.classList.toggle(`hidden`)
//     roundTwo.classList.remove(`hidden`)
//     roundTwo.classList.toggle('show')
//   }, 1500)
// //   var roundThreePrompt = confirm("Click Round 3 Button")
// //   var gamePrompts = document.getElementById("gamePrompts")
// //         gamePrompts.innerHTML = "Next Round!"
// })
// }

// function gameThree(){
//     roundTwo.classList.toggle('hidden');
//     // using timeout
//         round3.addEventListener(`click`, () => {
//         roundThree.classList.toggle(`hidden`)
//         roundThree.classList.remove(`show`)
//         roundTwo.classList.toggle(`hidden`)
//       setTimeout(() => {
//         roundTwo.classList.toggle(`hidden`)
//         roundThree.classList.remove(`hidden`)
//         roundThree.classList.toggle('show')
//       }, 1500)
//     //   var gamePrompts = document.getElementById("gamePrompts")
//     //     gamePrompts.innerHTML = "That's Game!"
//     })
// }

//CHECK FOR MATCH FUNCTION - method that checks for match and sets hasFlippedCard back to false
function checkForMatch(){
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards()
    if(isMatch){
    winner()
    setTimeout(() => {
    var gamePrompts = document.getElementById("gamePrompts")
        gamePrompts.innerHTML = "Next Round!"
    }, 1500)
    // var gameTwoPrompt = confirm("Click Round 2 Button")
    // gameTwo()
    }

    if(!isMatch){
    switchPlayer()
   
    }
}


// round2.onclick = gameTwo;
// round3.onclick = gameThree;