'use strict';

class RandomNumberGenerator {
    constructor() {
        this.randomNumber = 0;
        this.roundedRandomNumber = 0;
    };

    getCurrentRandomNumber() {
        return this.randomNumber;
    };

    selectRandomNumber() {
        this.randomNumber = Math.random() * 1000;
        return this.randomNumber;
    };

    roundToInteger() {
        this.roundedRandomNumber = Math.round(this.randomNumber);
        return this.roundedRandomNumber;
    };

    isAnInteger() {
        if (this.roundedRandomNumber % 1 === 0) {
            return true;
        }
        return false;
    };
};

