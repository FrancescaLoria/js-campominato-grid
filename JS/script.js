// **Consegna**
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// CREO LA FUNZIONE PER GENERARE LE MIE BOX
const gridElement = document.querySelector(".grid");

function generateBoxes() {
  // se la mia griglia non ha figli allora generelo le box, altrimenti non lo faccio.
  if (!gridElement.firstChild) {
    for (let i = 1; i <= 100; i++) {
      const boxElement = document.createElement("div");
      boxElement.classList.add("box");
      boxElement.innerHTML = i;
      // metodo che agg. figli "box" (nel mio caso)
      gridElement.appendChild(boxElement);
      boxElement.addEventListener("click", activeBox);
    }
  }
}

function activeBox() {
  console.log(this.textContent);
  this.classList.add("box-active");
}

// RENDO ATTIVO IL BOTTONE AL CLICK
const playBtn = document.querySelector(".play-button");
playBtn.addEventListener("click", generateBoxes);
