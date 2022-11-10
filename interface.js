'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const updateRandomNumber = () => {
        document.querySelector('#random-number').innerText = randomNumberGenerator.roundedRandomNumber;
        
    }
  
    const randomNumberGenerator = new RandomNumberGenerator();
    updateRandomNumber();

    document.querySelector('#new-random-number').addEventListener('click', () => {
        randomNumberGenerator.selectRandomNumber();
        randomNumberGenerator.roundToInteger();
        updateRandomNumber();
    });

});