const assert = require('assert');

const Math = require ('../Funçoes Avançadas/math')

describe('Math class', function(){
    it ('Sum two numbers', function(){
        const math = new Math();

        assert.equal(math.sum(5,5),10);
    })
})