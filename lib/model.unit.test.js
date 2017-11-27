const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./model');

const expect = testHelpers.expect;

describe("lib/model", () => {
    it("should expose a class named WarpjsPlugin", () => {
        expect(moduleToTest).to.be.a('function').and.to.have.property('name');
        expect(moduleToTest.name).to.equal('WarpjsPlugin');
    });

    it("should accept 3 params", () => {
        expect(moduleToTest).to.have.lengthOf(3);
    });
});
