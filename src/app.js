/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("excusaAleatoria").addEventListener("click", () => {
    document.getElementById("excuse").innerHTML = excusaAleatoria();
  });
};
//write your code here

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function excusaAleatoria() {
  let randomWho = who[Math.floor(who.length * Math.random())];
  let randomAction = action[Math.floor(action.length * Math.random())];
  let randomWhat = what[Math.floor(what.length * Math.random())];
  let randomWhen = when[Math.floor(when.length * Math.random())];
  const escusaGenerada = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  return escusaGenerada;
}
