class PacMan {

  constructor(doc) {
    this.doc = doc;
  }

  init() {
    const body = this.doc.querySelector('body');
    const divElement = this.doc.createElement('div');
    const h1Element = this.doc.createElement('h1');
    h1Element.innerText = this;
    // const h1Text = this.doc.createTextNode(DiPacMan);
    // h1Element.appendChild(h1Text);
    divElement.appendChild(h1Element);


    const pElement = this.doc.createElement('p');
    pElement.innerHTML = 'Game initialized!';
    divElement.appendChild(pElement);

    this.doc.body.appendChild(divElement);
  }

  toString() {
    return 'Pac Man!';
  }
}

export default PacMan;
