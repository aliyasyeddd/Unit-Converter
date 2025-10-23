/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.querySelector(".convert-btn")
let numberInput = document.getElementById("number-input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

let meterToFeet = 3.281
let literToGallon = 0.264
let kilogramToPound = 2.204

convertBtn.addEventListener("click", function() {
    let unitValue = numberInput.value
     // Length Conversion
     lengthEl.textContent = `${unitValue} meter = ${(unitValue * meterToFeet).toFixed(3)} feet | ${unitValue} feet = ${(unitValue / meterToFeet).toFixed(3)} meters`
     // Volume Conversion
     volumeEl.textContent = `${unitValue} liter = ${(unitValue * literToGallon).toFixed(3)} gallons | ${unitValue} gallons = ${(unitValue / literToGallon).toFixed(3)} liters`
     // Mass Conversion
     massEl.textContent = `${unitValue} kilogram = ${(unitValue * kilogramToPound).toFixed(3)} pounds | ${unitValue} pounds = ${(unitValue / kilogramToPound).toFixed(3)} kilograms`
})