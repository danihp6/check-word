declare module 'check-word' {
  class Checker {
    constructor(language: string);
    check(word: string): boolean;
  }
}