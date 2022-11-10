'use strict';


describe('RandomNumberGenerator', () => {
    let randomNumberGenerator;

    beforeEach(() => {
        randomNumberGenerator = new RandomNumberGenerator();
    });

    it ('starts with zero', () => {
        expect(randomNumberGenerator.getCurrentRandomNumber()).toEqual(0);
    });

    it ('returns a number between 0 (inclusive) and 1000', () => {
        randomNumberGenerator.selectRandomNumber();
        expect(randomNumberGenerator.getCurrentRandomNumber()).toBeGreaterThanOrEqual(0)
        expect(randomNumberGenerator.getCurrentRandomNumber()).toBeLessThan(1000)
    });

    it ('DOES NOT returns an integer between 0 (inclusive) and 1000', () => {
        randomNumberGenerator.selectRandomNumber();
        expect(randomNumberGenerator.isAnInteger()).toBe(false);
    });

    it ('returns an integer between 0 (inclusive) and 1000', () => {
        randomNumberGenerator.selectRandomNumber();
        expect(randomNumberGenerator.isAnInteger()).toBe(false);
        randomNumberGenerator.roundToInteger();
        expect(randomNumberGenerator.isAnInteger()).toBe(true);
    });
});