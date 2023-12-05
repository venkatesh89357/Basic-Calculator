"use strict";

const list = [];
let allNumbers = "";

const addToList = (value) => {
  if (["+", "-", "*", "/", "%"].includes(value)) {
    list.push(` ${value} `);
  } else {
    list.push(value);
  }
  document.getElementById("result").innerHTML = list.join("");
};

const calc = () => {
  const expression = list.join("");
  const regex = /^[\d\s()+\-*/.,%]+$/;
  if(!regex.test(expression)) {
    throw new Error("Invalid Input");
  }
  const result = eval(expression);
  document.getElementById("result").innerHTML = result;
  document.getElementById("calcul").innerHTML = expression;
  list.length = 0;
};

const reset = () => {
    list.length = 0;
    document.getElementById("result").innerHTML = 0;
    document.getElementById("calcul").innerHTML = "";
}

const del = () => {
    list.pop();
    document.getElementById("result").innerHTML = list.join("");
}
