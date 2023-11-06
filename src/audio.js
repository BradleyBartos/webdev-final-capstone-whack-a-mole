import { randomInteger } from "./difficultySwitches";

const opener = document.querySelector('#opener')
const easy = document.querySelector('#easy')
const normal = document.querySelector('#normal')
const hard = document.querySelector('#hard')
const chickens = document.querySelectorAll('.chicken')

let currentAudio = opener;

/**
 * Play the opening track
 */
export const playOpener = () => {
  playButton(opener);
}

/**
 * Play a track based on the difficulty value passed
 */
export const playGameTrack = (difficulty) => {
  switch(difficulty) {
    case 'hard': 
      playButton(hard);
      break;
    case 'normal': 
      playButton(normal);
      break;
    case 'easy':
    default:
      playButton(easy);
  }
}

/**
 * Play a random chicken noise from the array
 */
export const playRandChicken = () => {
  const ii = randomInteger(0, chickens.length - 1);
  const audio = chickens[ii];
  audio.play();
}

/**
 * Stop current audio playback
 */
export const stopAudio = () => {
  currentAudio.pause();
}

/**
 * Stop current audio and play provided new audio
 */
const playButton = (newAudio) => {
  // pausing and hiding current audio
  let muted = currentAudio.muted;
  currentAudio.pause();
  currentAudio.classList.add('hidden');
  
  // playing new audio, maintaining mute
  newAudio.classList.remove('hidden');
  newAudio.load();
  newAudio.muted = muted;
  newAudio.play();

  // set new audio to current
  currentAudio = newAudio;
}
