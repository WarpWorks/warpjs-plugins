const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./cache');

const expect = testHelpers.expect;

describe("lib/cache", () => {
    it("should expose an object", () => {
        expect(moduleToTest).to.be.an('object');
    });

    it("should expose .initialized", () => {
        expect(moduleToTest).to.have.property('initialized');
    });

    it("should expose .plugins", () => {
        expect(moduleToTest).to.have.property('plugins');
    });
});
