const openTitle = 'Welcome to the Potato Farm';
const openText = 'Oh no! The farm has been infested by grubs!<br>' + 
  'We have to collect the wriggly monsters before they eat all the taters. ' +
  'Grab those grubs when they poke their heads out of a hole and toss them in a pile.<br>' +
  'Susie will take care of the rest.';
const openButton = 'Continue';

const winTitle = 'You Did It!';
const winText = 'You cleared enough of those grubs to save the taters.<br>' +
  'Time to wash up, I\'m making omelets from some of Susie\'s fine eggs.';
const winButton = 'Reset Game';

const loseTitle = 'Gosh darn it!';
const loseText = 'The grubs have bred like, well, bugs and all the taters are eaten.<br>' +
  'Worst of all, Susie didn\'t lay any eggs. We\'re broke and hungry.'
const loseButton = 'Try Again';

const html = document.querySelector('html');
const body = document.querySelector('body');
const button = document.querySelector('.modal button');

/**
* Open the welcome modal
*/
export const welcomeModal = () => {
  showModal(openTitle, openText, openButton);
}

export const winModal = () => {
  showModal(winTitle, winText, winButton);
}

export const loseModal = () => {
  showModal(loseTitle, loseText, loseButton);
}

function showModal(title, text, buttonText) {
  // copy template
  const modal = document.querySelector('.overlay').cloneNode(true);

  // fill text
  modal.classList.add('show-modal');
  modal.querySelector('h2').innerHTML = title;
  modal.querySelector('p').innerHTML = text;
  modal.querySelector('button').innerHTML = buttonText;

  // show modal
  console.log('Showing modal with title ' + title);
  html.insertBefore(modal, body);

  // add button listener
  modal.querySelector('#reset').addEventListener('click', closeModal);
}

function closeModal(event) {
  console.log('Closing modal');
  document.querySelector('.show-modal').remove();
}
