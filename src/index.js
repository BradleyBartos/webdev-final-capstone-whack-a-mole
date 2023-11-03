import {easyTime, setDuration, setDelay, setRemainder} from './difficultySwitches.js';
import { startTimer, updateTimer, getTime, setTime } from './timing.js';
import { loseModal, welcomeModal, winModal } from './modals.js';

const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const diffs = document.querySelectorAll('.difficulty');
const startButton = document.querySelector('#start');
const count = document.querySelector('#count');

let lastHole = -1;
let timer;
let remainder = 0;
let difficulty = 'easy';

// Open welcome modal first
welcomeModal();

// Setup buttons and text
setTime(easyTime);
updateTimer();
clearScore();
startButton.addEventListener('click', startGame);
diffs.forEach(button => button.addEventListener('click', event => setDifficulty(event.target.value)));

/**
*
* This is the function that starts the game when the `startButton`
* is clicked.
*
*/
function startGame() {
  // disable menu and set the correct values, just in case
  startButton.setAttribute('disabled', true);
  diffs.forEach(button => button.setAttribute('disabled', true));
  updateTimer();
  clearScore();

  setEventListeners();
  timer = startTimer();
  showUp();
  return "game started";
}

/**
* Adds the event listeners to the moles and radio buttons. 
*/
function setEventListeners() {
  const moles = document.querySelectorAll('.mole');
  moles.forEach(mole => mole.addEventListener('click', whack));
}

/**
 * Handler for difficulty radio button clicks.
 * Sets the difficulty level, then sets the duration, timer, and score.
 */
function setDifficulty(selectedDiff) {
  difficulty = selectedDiff;
  const startTime = setDuration(difficulty);
  setTime(startTime);
  updateTimer();
  clearScore();
}

/**
 * Chooses a random hole from a list of holes.
 *
 * This function should select a random Hole from the list of holes.
 * 1. generate a random integer from 0 to 8 and assign it to an index variable
 * 2. get a random hole with the random index (e.g. const hole = holes[index])
 * 3. if hole === lastHole then call chooseHole(holes) again.
 * 4. if hole is not the same as the lastHole then keep track of 
 * it (lastHole = hole) and return the hole
 *
 * Example: 
 * const holes = document.querySelectorAll('.hole');
 * chooseHole(holes) //> returns one of the 9 holes that you defined
 */
function chooseHole(holes) {

  // get random hole, ensuring it's not the same
  let ii;
  do {
    ii = randomInteger(0, holes.length-1);
  } while (ii === lastHole)
  lastHole = ii;
  const hole = holes[ii]
  
  // ensure clicks are enabled
  hole.querySelector('.mole').style.pointerEvents = 'auto'; 

  return hole;
}

/**
*
* Calls the showUp function if time > 0 and stops the game if time = 0.
*
* The purpose of this function is simply to determine if the game should
* continue or stop. The game continues if there is still time `if(time > 0)`.
* If there is still time then `showUp()` needs to be called again so that
* it sets a different delay and a different hole. If there is no more time
* then it should call the `stopGame()` function. The function also needs to
* return the timeoutId if the game continues or the string "game stopped"
* if the game is over.
*
*/
function gameOver() {
  if (getTime() > 0 && remainder > 0) {
    return showUp();
  } else {
    return stopGame();
  }
}

/**
*
* Calls the showAndHide() function with a specific delay and a hole.
*
* This function simply calls the `showAndHide` function with a specific
* delay and hole. The function needs to call `setDelay()` and `chooseHole()`
* to call `showAndHide(hole, delay)`.
*
*/
function showUp() {
  let delay = setDelay(difficulty);
  const hole = chooseHole(holes);
  return showAndHide(hole, delay);
}

/**
*
* The purpose of this function is to show and hide the mole given
* a delay time and the hole where the mole is hidden. The function calls
* `toggleVisibility` to show or hide the mole. The function should return
* the timeoutID
*
*/
function showAndHide(hole, delay){
  toggleVisibility(hole);
  return setTimeout(() => {
    toggleVisibility(hole);
    gameOver();
  }, delay);
}

/**
*
* Adds or removes the 'show' class that is defined in styles.css to 
* a given hole. It returns the hole.
*
*/
function toggleVisibility(hole){
  hole.classList.toggle('show');
  return hole;
}

/**
*
* This function is called when the game is stopped. 
* Displays the winning or losing message
* Clears the timer using clearInterval. 
* Returns "game stopped".
*
*/
function stopGame() {
  // stopAudio(song);  //optional
  remainder <= 0 ? winModal() : loseModal();
  startButton.removeAttribute('disabled');
  diffs.forEach(button => button.removeAttribute('disabled'));
  clearInterval(timer);
  setDifficulty();
}

/**
*
* This is the event handler that gets called when a player
* clicks on a mole. The setEventListeners should use this event
* handler (e.g. mole.addEventListener('click', whack)) for each of
* the moles.
* This also disables clicks on the targetted mole to prevent race conditions.
*
*/
function whack(event) {
  event.target.style.pointerEvents = 'none';
  updateScore();
  return remainder;
}

/**
*
* This function increments the points global variable and updates the scoreboard.
* Use the `points` global variable that is already defined and increment it by 1.
* After the `points` variable is incremented proceed by updating the scoreboard
* that you defined in the `index.html` file. To update the scoreboard you can use 
* `score.textContent = points;`. Use the comments in the function as a guide 
* for your implementation:
*
*/
function updateScore() {
  if (remainder > 0) remainder --;
  count.textContent = remainder;
  return remainder;
}

/**
*
* This function clears the score by setting `points = 0`. It also updates
* the board using `score.textContent = points`. The function should return
* the points.
*
*/
function clearScore() {
  remainder = setRemainder(difficulty);
  count.textContent = remainder;
  return remainder;
}

// Please do not modify the code below.
// Used for testing purposes.
window.chooseHole = chooseHole;
window.startGame = startGame;
window.gameOver = gameOver;
window.showUp = showUp;
window.holes = holes;
window.moles = moles;
window.showAndHide = showAndHide;
window.remainder = remainder;
window.updateScore = updateScore;
window.clearScore = clearScore;
window.whack = whack;
window.toggleVisibility = toggleVisibility;
window.setEventListeners = setEventListeners;
