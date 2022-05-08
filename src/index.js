'use strict';
const path = require('path');
const fs = require('fs');
const dictionaryPath = path.join(__dirname, 'dictionaries');

class Checker {
  dictionary = {};
  constructor(language) {
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