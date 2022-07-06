const assert=require('chai').assert;

const main=require('../main');

//Results
const helloWorlText=main.helloWorld();
const substractionResult=main.substraction(4,2);
const arrayOfNumbers=main.arrayOfNumbers();

describe('Main Suite',function(){
    it('Hello World text is as expected',function(){
        assert.equal(helloWorlText,'hello wrld');
    })
})
