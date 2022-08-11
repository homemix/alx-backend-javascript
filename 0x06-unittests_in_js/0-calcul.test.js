const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber", function () {
    it("should return 3 when the value is 1 and 2", function () {
        assert.equal(calculateNumber(1, 2), 3);
    })
    it("should return -1 when the value is 1 and -2", function () {
        assert.equal(calculateNumber(1, -2), -1);
    })
    it("should return 0 when the value is 0 and 0", function () {
        assert.equal(calculateNumber(0, 0), 0);
    })
    it("should return NaN when the value is NaN and 0", function () {
        assert.equal(calculateNumber(NaN, 0), NaN);
    })
    it("should return NaN when the value is 0 and NaN", function () {
        assert.equal(calculateNumber(0, NaN), NaN);
    })
    it("should return 5 when value is 2.2 and 3.7", function () {
        assert.equal(calculateNumber(2.2, 3.7), 6);
    })
    it("should return -5 when value is -2.2 and -3.7", function () {
        assert.equal(calculateNumber(-2.2, -3.7), -6);
    })
})
