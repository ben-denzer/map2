const mocha = require('mocha');
const expect = require('chai').expect;
import makeSet from "./makeSet";

describe("MakeSet Util", () => {
    it("should return an array, even if you give it an empty param", () => {
        expect(Array.isArray(makeSet([1, 3, 5]))).to.be.true;
        expect(Array.isArray(makeSet([]))).to.be.true;
        expect(Array.isArray(makeSet())).to.be.true;
    });

    it("should remove the duplicate elements", () => {
        expect(makeSet([1, 2, 3, 1, 2])).to.deep.equal([1, 2, 3]);
    });
});
