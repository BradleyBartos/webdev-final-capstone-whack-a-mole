export const easyTime = 2 * 60 * 1000;

/**
 * Generates a random integer within a range.
 *
 * The function takes two values as parameters that limits the range 
 * of the number to be generated. For example, calling randomInteger(0,10)
 * will return a random integer between 0 and 10. Calling randomInteger(10,200)
 * will return a random integer between 10 and 200.
 *
 */
export const randomInteger = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
}

/**
 * Sets the time delay given a difficulty parameter.
 *
 * The function takes a `difficulty` parameter that can have three values: `easy`
 * `normal` or `hard`. If difficulty is "easy" then the function returns a time delay
 * of 1500 milliseconds (or 1.5 seconds). If the difficulty is set to "normal" it should
 * return 1000. If difficulty is set to "hard" it should return a randomInteger between
 * 600 and 1200.
 *
 * Example: 
 * setDelay("easy") //> returns 1500
 * setDelay("normal") //> returns 1000
 * setDelay("hard") //> returns 856 (returns a random number between 600 and 1200).
 *
 */
export const setDelay = (difficulty) => {
  switch(difficulty) {
    case 'hard': 
      return randomInteger(600, 1000);
    case 'normal': 
      return 1000;
    case 'easy':
    default:
      return 1500;
  }
}

/**
 * Determine the total points needed to win based on the difficulty level.
 */
export const setRemainder = (difficulty) => {
  switch(difficulty) {
    case 'hard': 
      return 30;
    case 'normal': 
      return 30;
    case 'easy':
    default:
      return 20;
  }
}

/**
*
* This function sets the duration of the game. The time limit, in seconds,
* that a player has to click on the sprites.
*
*/
export const setDuration = (difficulty) => {
  switch (difficulty) {
    case 0:
      return 0;
    case 'hard':
      return 0.5 * 60 * 1000;
    case 'normal':
      return 1 * 60 * 1000;
    case 'easy':
    default:
      return easyTime;
  }
}

// Used for testing purposes.
window.randomInteger = randomInteger;
window.setDelay = setDelay;
window.setDuration = setDuration;

