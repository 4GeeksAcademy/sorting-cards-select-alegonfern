/* eslint-disable */
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector(".card").classList.add("heart");
  setTimeout(() => {
    document.querySelector(".card").classList.remove("heart");
    document.querySelector(".card").classList.add("spade");
  }, 1000);
};
