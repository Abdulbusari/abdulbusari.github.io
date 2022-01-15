"use strict";

const outputCelcius = document.getElementById("outputCelcius");
const inputFahrenheit = document.getElementById("inputFahrenheit");

const outputFahrenheit = document.getElementById("outputFahrenheit");
const inputCelcius = document.getElementById("inputCelcius");


document.getElementById("fahrenheitBtn").addEventListener('click', () => {
    let val = inputFahrenheit.value;
    let txt = "Please enter a number!";
    console.log(val);
    if (!isNaN(val) && val)
        txt = `<b>${val}°F</b> is <b>${((val - 32) * 5 / 9).toFixed(1)}°C</b>`;
    outputCelcius.innerHTML = txt;
});

document.getElementById("celciusBtn").addEventListener('click', () => {
    let val = inputCelcius.value;
    let txt = "Please enter a number!";
    console.log(val);
    if (!isNaN(val) && val)
        txt = `<b>${val}°C</b> is <b>${((val * 1.8) + 32).toFixed(1)}°F</b>`;
        outputFahrenheit.innerHTML = txt;
});

Array.from(document.querySelectorAll("i")).forEach(el => {
    el.addEventListener('click', () => {
        document.querySelector('body').classList.toggle("dark-body")
        Array.from(document.getElementsByClassName("heads")).forEach(el =>{
            el.classList.toggle("dark-mode-text");
        });
        Array.from(document.getElementsByClassName("output")).forEach(el =>{
            el.classList.toggle("dark-div");
        });
        Array.from(document.getElementsByClassName("converter-input")).forEach(el =>{
            el.classList.toggle("dark-input");
        });
        document.getElementById("dark").classList.toggle("fa-adjust");
        document.getElementById("dark").classList.toggle("fa-adjust");
    });
});