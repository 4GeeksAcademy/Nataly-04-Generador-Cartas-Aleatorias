import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let cardSymbols = ["♦", "♥", "♠", "♣",];
  let randomcardNumber = [Math.floor(Math.random() * cardNumber.length)]
  let randomcardSymbols = [Math.floor(Math.random() * cardSymbols.length)]


  console.log(cardNumber[randomcardNumber]);
  console.log(cardSymbols[randomcardSymbols]);

  let palo_alto = document.querySelector(".palo-alto")
  palo_alto.innerHTML = cardSymbols[randomcardSymbols]

  let palo_bajo = document.querySelector(".palo-bajo")
  palo_bajo.innerHTML = cardSymbols[randomcardSymbols]

  let colorClass = cardSymbols[randomcardSymbols] === "♥" || cardSymbols[randomcardSymbols] === "♦" ? "rojo" : "negro"
  palo_alto.classList.add(colorClass)
  palo_bajo.classList.add(colorClass)

  let numero = document.querySelector(".numero")
  numero.innerHTML = cardNumber[randomcardNumber]


};
 