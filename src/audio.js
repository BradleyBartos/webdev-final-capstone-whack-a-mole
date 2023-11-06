import { randomInteger } from "./difficultySwitches";
// import chicken1 from '../assets/audio/chicken1.mp3';
// import chicken2 from '../assets/audio/chicken2.mp3';
// import chicken3 from '../assets/audio/chicken3.mp3';
// import chicken4 from '../assets/audio/chicken4.mp3';
// import chicken5 from '../assets/audio/chicken5.mp3';
// import chicken6 from '../assets/audio/chicken6.mp3';
// import chicken7 from '../assets/audio/chicken7.mp3';
// import chicken8 from '../assets/audio/chicken8.mp3';
// import chicken9 from '../assets/audio/chicken9.mp3';
// import chicken10 from '../assets/audio/chicken10.mp3';
// import chicken11 from '../assets/audio/chicken11.mp3';
// import chicken12 from '../assets/audio/chicken12.mp3';
// import chicken13 from '../assets/audio/chicken13.mp3';

const opener = document.querySelector('#opener')
const easy = document.querySelector('#easy')
const normal = document.querySelector('#normal')
const hard = document.querySelector('#hard')
const audioLoc = "https://github.com/BradleyBartos/webdev-final-capstone-whack-a-mole/tree/main/assets/audio/";
const chickens = [
  new Audio(audioLoc + "chicken1.mp3"),
  new Audio(audioLoc + "chicken2.mp3"),
  new Audio(audioLoc + "chicken3.mp3"),
  new Audio(audioLoc + "chicken4.mp3"),
  new Audio(audioLoc + "chicken5.mp3"),
  new Audio(audioLoc + "chicken6.mp3"),
  new Audio(audioLoc + "chicken7.mp3"),
  new Audio(audioLoc + "chicken8.mp3"),
  new Audio(audioLoc + "chicken9.mp3"),
  new Audio(audioLoc + "chicken10.mp3"),
  new Audio(audioLoc + "chicken11.mp3"),
  new Audio(audioLoc + "chicken12.mp3"),
  new Audio(audioLoc + "chicken13.mp3"),
]
// const chickens = [
//   new Audio(chicken1),
//   new Audio(chicken2),
//   new Audio(chicken3),
//   new Audio(chicken4),
//   new Audio(chicken5),
//   new Audio(chicken6),
//   new Audio(chicken7),
//   new Audio(chicken8),
//   new Audio(chicken9),
//   new Audio(chicken10),
//   new Audio(chicken11),
//   new Audio(chicken12),
//   new Audio(chicken13),
// ];

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
  console.log('playing music from difficulty: ' + difficulty)
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
  audio.loop = false;
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
