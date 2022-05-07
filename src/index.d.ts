declare module 'check-word' {
  class Checker {
    constructor(language: string, dictionaryPath: string);
    check(word: string): boolean;
  }
}