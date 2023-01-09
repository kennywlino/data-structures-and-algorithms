'use strict';

const HashTable = require('./hashtable');

describe('Hash Table', () => {
  let hashTable = new HashTable(1024);
  it('can set a key/value inside', () => {
    hashTable.set('banana', 'yellow');
    expect(hashTable.get('banana')).toEqual('yellow');
  });

  it('can get a value based on key', () => {
    expect(hashTable.get('banana')).toEqual('yellow');
  });

  it('returns null for a non-existing key', () => {
    expect(hashTable.get('apple')).toBeFalsy();
  });

  it('returns a list of all unique keys', () => {
    expect(hashTable.keys()).toContain('banana');
  });

  it('handles collisions', () => {

  });

  it('can retrieve a value after a collision', () => {

  });


  it('successfully hashes a key to an in-range value', () => {
    const hash = hashTable.hash('banana');
    expect(hash).toEqual(247);
  });
});
