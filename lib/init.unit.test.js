const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./init');

const expect = testHelpers.expect;

describe("lib/init", () => {
    it("should expose a function with 3 param", () => {
        expect(moduleToTest).to.be.a('function').and.to.have.lengthOf(3);
    });
});
