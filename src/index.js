'use strict';
const fs = require('fs');

class Checker {
  dictionary = {};
  dictionaryPath = '';
  constructor(language, dictionaryPath) {
    this.language = language;
    try {
      const file = fs.readFileSync(`${dictionaryPath}/${this.language}.json`).toString();
      this.dictionary = JSON.parse(file);
    } catch (error) {
      throw Error(`${language} is not supported`)
    }
  }
  check(word) {
    return this.dictionary[word.toUpperCase()] !== undefined;
  }
}

module.exports = Checker;
