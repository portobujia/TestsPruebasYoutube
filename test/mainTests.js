const assert = require('chai').assert;

const main = require('../main');

//Results
const helloWorlText = main.helloWorld();
const substractionResult = main.substraction(4, 2);
const arrayOfNumbers = main.arrayOfNumbers();
const cups = 2;

describe('Main Suite', function () {
    describe("Hello World Method - Test Cases", function () {
        it('Hello World text is as expected', function () {
            assert.equal(helloWorlText, 'hello world');
        });
        it('Validate data type', function () {
            assert.typeOf(helloWorlText, 'string', 'The expected data type is an string')
        })
        it('Lenght of string', function () {
            assert.lengthOf(helloWorlText, 11, 'The lenght is expected to be 11')
        })
    });
    describe("Substraction method - Test Cases", function () {
        it('Less than 5', function () {
            assert.isBelow(substractionResult, 5);
        });
        it('Less than 5', function () {
            assert.isBelow(substractionResult, 5);
        });
        it('Validate data type', function () {
            assert.typeOf(substractionResult, 'number', 'The expected data type is an number')
        })
    })
    describe("Array method - Test Cases", function () {
        it('Array includes de number 5', function () {
            assert.include(arrayOfNumbers, 5);
        })
    })
    describe("Cups - Test Cases", function () {
        it('how many cups', function () {
            assert.isNumber(cups, 'how many cups');
        })
    })

})
