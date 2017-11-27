const testHelpers = require('@quoin/node-test-helpers');

const cache = require('./cache');
const init = require('./init');
const moduleToTest = require('./get-plugin');

const expect = testHelpers.expect;

const DOMAIN_NAME = 'foo-domain';
const PERSISTENCE_CONFIG = {
    module: './dummy-persistence.test',
    host: 'foo',
    name: 'bar'
};

describe("lib/get-plugin", () => {
    beforeEach(() => {
        cache.initialized = false;
        cache.plugins = [];
    });

    it("should expose a function with 1 param", () => {
        expect(moduleToTest).to.be.a('function').and.to.have.lengthOf(1);
    });

    it("should not find anything if nothing is set", () => {
        const value = moduleToTest('foo');
        expect(value).to.be.undefined();
    });

    it("should not find anything if not set", () => {
        init(DOMAIN_NAME, PERSISTENCE_CONFIG, [{
            type: 'aType'
        }]);
        const value = moduleToTest('anotherType');
        expect(value).to.be.undefined();
    });

    it("should find if set", () => {
        init(DOMAIN_NAME, PERSISTENCE_CONFIG, [{
            type: 'aType'
        }]);
        const value = moduleToTest('aType');
        expect(value).not.to.be.undefined();
    });

    it("should find the last one set", () => {
        init(DOMAIN_NAME, PERSISTENCE_CONFIG, [{
            name: 'first',
            type: 'someType'
        }, {
            name: 'second',
            type: 'someType'
        }]);
        const value = moduleToTest('someType');
        expect(value).not.to.be.undefined();
        expect(value.name).to.equal('second');
    });

});
