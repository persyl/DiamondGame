import Point from './Point.js';
const body = document.querySelector('body');
const divElement = document.createElement('div');
const innerText = document.createTextNode('Resultat från Point.js: ' + new Point(1, 23));
divElement.appendChild(innerText);
body.appendChild(divElement) ;
