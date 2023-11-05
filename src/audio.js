import { randomInteger } from "./difficultySwitches";

const audioLoc = "https://github.com/BradleyBartos/webdev-final-capstone-whack-a-mole/tree/main/assets/audio/";
const audioEle = document.querySelector('audio');
const audioSrc = audioEle.querySelector('source');
const opener = new Audio(audioLoc + "LoboLocoFreeGuitarWalkingBluesF015.mp3?raw=true");
const easy = new Audio(audioLoc + "OvMoiOmmIWasDifferent.mp3?raw=true");
const normal = new Audio(audioLoc + "MidAirMachineAppalachianCoalMines.mp3?raw=true");
const hard = new Audio(audioLoc + "IHaveFoundAWayTruncated.mp3?raw=true");
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
];

let currentAudio = hard;

export const playOpener = () => {
  console.log('Starting playOpener with track ' + hard);
  currentAudio = hard;
  playButton();
}

export const playGameTrack = (difficulty) => {
  switch(difficulty) {
    case 'hard': 
      currentAudio = hard;
    case 'normal': 
      currentAudio = normal;
    case 'easy':
    default:
      currentAudio = easy;
  }
  playButton();
}

export const playRandChicken = () => {
  const ii = randomInteger(0, chickens.length - 1);
  const audio = chickens[ii];
  audio.loop = false;
  audio.play();
}

export const playButton = () => {
  console.log(`Current audio file is ${currentAudio}`)
  audioEle = currentAudio;
  currentAudio.pause();
  currentAudio.load();
  currentAudio.controls = true;
  currentAudio.loop = true;
  currentAudio.play();
  // audioEle.pause();
  // audioSrc.setAttribute('src', currentAudio);
  // audioEle.load();
  // audioEle.loop = true;
  // audioEle.play();
}
