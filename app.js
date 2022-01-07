//Game will start with prompts.
//Prompts will lead you to matching game.



/*
-write code for on click event where upon clicking card,
the card shows a face with an animoji (linked image)


- images should be in a class that pushes to an array.


-Computer uses Math.random in some capacity to choose two cards.


-Cards will have number values.


-Win Function will be if the numbers match, the player wins.


-If computer wins, Player loses game. 


-After winning the first round, player will click NEXT ROUND BUTTON


-If player loses a round, the game restarts. WRITE LOOP FOR WIN/LOSE SEQUENCE.


-EXIT LOOP AND RESTART GAME UPON LOSING A LEVEL.


-Next Round button will take player to the next round in which they pick two cards,
see if they match, and if they dont, the computer gets a turn to randomly choose two cards.


-THE LOOP CONTINUES UNTIL THE COMPUTER WINS OR THE PLAYER WINS, ETC. 


-3 ROUNDS.


-PROMPTS ON EVERY LEVEL TO LEAD WITH THE STORY LINE. 

*/

console.log("working")
//EVENT FOR CARD "FLIP"
const stage1 = document.getElementById('stage1');
const stage2 = document.getElementById('stage2');

// stage2.classList.toggle('hidden');

// stage1.addEventListener('mousedown', ()=> {
//   if (stage1.classList.contains('hidden')){
//   }
//   stage1.classList.toggle('hidden');
//   stage2.classList.remove('hidden');
//   stage2.classList.remove('show');

// });

// stage2.addEventListener('mouseup', ()=> {
//   stage1.classList.remove('hidden');
//   stage1.classList.toggle('show');
//   stage2.classList.remove('show');
//   stage2.classList.toggle('hidden');
// });

// using timeout
// stage1.addEventListener(`click`, () => {
//   stage1.classList.toggle(`hidden`)
//   stage1.classList.remove(`show`)
//   stage2.classList.toggle(`hidden`)
//   setTimeout(() => {
//     stage2.classList.toggle(`hidden`)
//     stage1.classList.remove(`hidden`)
//     stage1.classList.toggle('show')
//   }, 2000)
// })
console.log(stage1)
// console.log(stage2)
