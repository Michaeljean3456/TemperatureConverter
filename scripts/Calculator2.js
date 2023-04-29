"use strict";
// defining variables for functions
const Fahrenheitinput = document.getElementById("Fahrenheitinput");
const Celsiusoutput = document.getElementById("Celsiusoutput");
const calculatebtn = document.getElementById("calculatebtn");

function init(){
    calculatebtn.onclick = calculatebtnclicked;
}

window.onload = init;

function calculatebtnclicked(){
    let Fahrenheit = Fahrenheitinput.value;
    let result = (Fahrenheit - 32) * 5/9;
    Celsiusoutput.value = result;
}
