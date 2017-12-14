const _ = require('lodash');
const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./index');

const expect = testHelpers.expect;

describe("index", () => {
    let clone;

    before(() => {
        clone = _.clone(moduleToTest);
    });

    it("should expose an object", () => {
        expect(moduleToTest).to.be.an('object');
    });

    context(".init()", () => {
        it("should expose .init", () => {
            expect(moduleToTest).to.have.property('init');
        });

        it("should be a function with 3 param", () => {
            expect(moduleToTest.init).to.be.a('function').and.to.have.lengthOf(3);
        });

        after(() => {
            delete clone.init;
        });

    });

    context(".getPlugins()", () => {
        it("should expose .getPlugins", () => {
            expect(moduleToTest).to.have.property('getPlugins');
        });

        it("should be a function with 1 param", () => {
            expect(moduleToTest.getPlugins).to.be.a('function').and.to.have.lengthOf(1);
        });

        after(() => {
            delete clone.getPlugins;
        });
    });


    context(".getPlugin()", () => {
        it("should expose .getPlugin", () => {
            expect(moduleToTest).to.have.property('getPlugin');
        });

        it("should be a function with 1 param", () => {
            expect(moduleToTest.getPlugin).to.be.a('function').and.to.have.lengthOf(1);
        });

        after(() => {
            delete clone.getPlugin;
        });
    });

    context(".getPluginByName()", () => {
        it("should expose .getPluginByName", () => {
            expect(moduleToTest).to.have.property('getPluginByName');
        });

        it("should be a function with 1 param", () => {
            expect(moduleToTest.getPluginByName).to.be.a('function').and.to.have.lengthOf(1);
        });

        after(() => {
            delete clone.getPluginByName;
        });
    });

    context(".register()", () => {
        it("should expose .register", () => {
            expect(moduleToTest).to.have.property('register');
        });

        it("should be a function with 4 params", () => {
            expect(moduleToTest.register).to.be.a('function').and.to.have.lengthOf(4);
        });

        after(() => {
            delete clone.register;
        });
    });

    context(".info()", () => {
        it("should expose .info", () => {
            expect(moduleToTest).to.have.property('info');
        });

        it("should be a function with no params", () => {
            expect(moduleToTest.info).to.be.a('function').and.to.have.lengthOf(0);
        });

        after(() => {
            delete clone.info;
        });
    });

    context("After all properties tests", () => {
        it("should not expose any other properties", () => {
            expect(clone).to.be.empty();
        });
    });
});
