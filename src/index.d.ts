declare module 'word-checker' {
  class Checker {
    constructor(language: string);
    check(word: string): boolean;
  }
}