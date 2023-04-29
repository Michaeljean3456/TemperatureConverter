"use strict";
// defining variables for functions
const Celsiusinput = document.getElementById("Celsiusinput");
const Fahrenheitoutput = document.getElementById("Fahrenheitoutput");
const calculatebtn = document.getElementById("calculatebtn");

function init(){
    calculatebtn.onclick = calculatebtnclicked;
}

window.onload = init;

function calculatebtnclicked(){
    let celsius = Celsiusinput.value;
    let result = (celsius * 9/5) + 32;
    Fahrenheitoutput.value = result;
}
