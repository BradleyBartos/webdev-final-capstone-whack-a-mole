const timerDisplay = document.querySelector('#timer');

let time = 0;

/**
 * Get the value of time after timing separated from index
 */
export const getTime = () => time;

/** 
 * Set the initial value of time
 */
export const setTime = (startTime) => time = startTime;

/**
*
* Starts the timer using setInterval. For each 1000ms (1 second)
* the updateTimer function get called. This function is already implemented
*
*/
export const startTimer = () => {
  const timer = setInterval(updateTime, 1000);
  return timer;
}

/**
 * 
 * Update the game time and call update timer
 * 
 */
const updateTime = () => {
  time -= 1000;
  updateTimer(time);

  return time;
}

/**
*
* Updates the control board with the formated time 
*
*/
export const updateTimer = () => {
  const sec = time / 1000;
  const min = parseInt(sec / 60);
  const displaySec = parseInt(sec % 60).toLocaleString('en-US', {minimumIntegerDigits: 2});
  timerDisplay.textContent = `${min}:${displaySec}`;
}

// Used for testing purposes.
window.time = time;
