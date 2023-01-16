'use strict';

const repeatedWord = require('./repeatedWord');

describe('repeated words', () => {
  it('works with matching words with the same casing', () => {
    expect(repeatedWord('hello world hello')).toEqual('hello');
  });

  it('works with matching words regardless of case', () => {
    expect(repeatedWord('HELLO world hello')).toEqual('hello');
  });

  it('returns null if there is no matching words', () => {
    expect(repeatedWord('hello world')).toBeFalsy();
  });
});
