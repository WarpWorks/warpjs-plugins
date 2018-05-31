const _ = require('lodash');
const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./index');

const expect = testHelpers.expect;

describe("index", () => {
    let clone;

    before(() => {
        clone = _.clone(moduleToTest);
    });

    it("should export an object", () => {
        expect(moduleToTest).to.be.an('object');
    });

    it("should expose RESERVED_PLUGIN_TYPES as an object", () => {
        expect(moduleToTest).to.have.property('RESERVED_PLUGIN_TYPES');
        expect(moduleToTest.RESERVED_PLUGIN_TYPES).to.be.an('object');
        delete clone.RESERVED_PLUGIN_TYPES;
    });

    it("should expose .init() with 3 params", () => {
        expect(moduleToTest).to.have.property('init');
        expect(moduleToTest.init).to.be.a('function').and.to.have.lengthOf(3);
        delete clone.init;
    });

    it("should expose .getPlugins() with 1 param", () => {
        expect(moduleToTest).to.have.property('getPlugins');
        expect(moduleToTest.getPlugins).to.be.a('function').and.to.have.lengthOf(1);
        delete clone.getPlugins;
    });

    it("should expose .getPlugin() with 1 param", () => {
        expect(moduleToTest).to.have.property('getPlugin');
        expect(moduleToTest.getPlugin).to.be.a('function').and.to.have.lengthOf(1);
        delete clone.getPlugin;
    });

    it("should expose .getPluginByName() with 1 param", () => {
        expect(moduleToTest).to.have.property('getPluginByName');
        expect(moduleToTest.getPluginByName).to.be.a('function').and.to.have.lengthOf(1);
        delete clone.getPluginByName;
    });

    it("should expose .register", () => {
        expect(moduleToTest).to.have.property('register');
        expect(moduleToTest.register).to.be.a('function').and.to.have.lengthOf(4);
        delete clone.register;
    });

    it("should expose .info() with no params", () => {
        expect(moduleToTest).to.have.property('info');
        expect(moduleToTest.info).to.be.a('function').and.to.have.lengthOf(0);
        delete clone.info;
    });

    context("After all properties tests", () => {
        it("should not expose any other properties", () => {
            expect(clone).to.be.empty();
        });
    });
});
