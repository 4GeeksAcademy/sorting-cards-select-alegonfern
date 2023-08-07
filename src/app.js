/* eslint-disable */
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector(".card").classList.add(pintaGenerator());
  document.querySelector(".card").innerHTML = numberGenerator();
};

var numberGenerator = () => {
  var numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  var index = Math.floor(Math.random() * numeros.length);
  return numeros[index];
};

let pintaGenerator = () => {
  var pinta = ["diamond", "spade", "heart", "club"];
  var index2 = Math.floor(Math.random() * pinta.length);
  return pinta[index2];
};
