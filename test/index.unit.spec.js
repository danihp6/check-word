const Checker = require('../index');

const { expect } = require("chai").use(require("chai-uuid"));

describe("Unit test for index", function () {
  describe("#Receive an error when not exists language - ", () => {
    const notSuportedLanguage = 'aa';
    const errorExpectedMesssage = `${notSuportedLanguage} is not supported`;
    const createInvalidChecker = () => {new Checker(notSuportedLanguage)};
    it("Receive true - ", () => {
      expect(createInvalidChecker).to.throw(errorExpectedMesssage);
    });
  });

  describe("#Receive false when not exists word - ", () => {
    let supportedLanguage = 'es';
    let notExistentWord = 'alsdg';
    let exists = false;
    before(async () => {
      const checker = new Checker(supportedLanguage);
      exists = checker.check(notExistentWord);
    });

    it("Receive false - ", () => {
      expect(exists).to.be.false;
    });
  });

  describe("#Receive true when exists word - ", () => {
    let supportedLanguage = 'es';
    let existentWord = 'gato';
    let exists = false;
    before(async () => {
      const checker = new Checker(supportedLanguage);
      exists = checker.check(existentWord);
    });

    it("Receive true - ", () => {
      expect(exists).to.be.true;
    });
  });
});
