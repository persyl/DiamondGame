// import Point from './Point.js';
import PacMan from './pacman';

const DiPacMan = new PacMan();
const body = document.querySelector('body');
const divElement = document.createElement('div');
const h1Element = document.createElement('h1');
h1Element.innerText = DiPacMan;
// const h1Text = document.createTextNode(DiPacMan);
// h1Element.appendChild(h1Text);
divElement.appendChild(h1Element);


const pElement = document.createElement('p');
pElement.innerHTML = `Run <i>"webpack --watch"</i> to re-compile the javascript modules into bundle.js.<br />${DiPacMan.init()}`;
divElement.appendChild(pElement);

body.appendChild(divElement);