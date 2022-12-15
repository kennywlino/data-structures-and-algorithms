'use strict';

const validateBrackets = require('../validateBrackets');


describe('validateBrackets', () => {

  test('is true when all brackets are closed', () => {
    expect(validateBrackets('[()]')).toBeTruthy();
    expect(validateBrackets('{}(){}')).toBeTruthy();
  });

  test('is true when all brackets are closed even with extra char', () => {
    expect(validateBrackets('()[[Extra Characters]]')).toBeTruthy();
    expect(validateBrackets('{}{Code}[Fellows](())')).toBeTruthy();
  });

  test('is false when there are unmatched brackets', () => {
    expect(validateBrackets('[({}]')).toBeFalsy();
    expect(validateBrackets('{(})')).toBeFalsy();
  });

  test('is false with strings not containing brackets', () => {
    expect(validateBrackets('abc123')).toBeFalsy();
  });

  test('is false with empty strings', () => {
    expect(validateBrackets('')).toBeFalsy();
  });
});

