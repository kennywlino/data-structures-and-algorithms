'use strict';

const HashTable = require('./hashtable');

describe('Hash Table', () => {
  let hashTable = new HashTable(1024);

  it('successfully hashes a key to an in-range value', () => {
    const hash = hashTable.hash('banana');
    expect(hash).toEqual(247);
  });

  it('can set a key/value inside and get a value based on key', () => {
    hashTable.set('banana', 'yellow');
    expect(hashTable.get('banana')).toEqual('yellow');
  });

  it('returns null for a non-existing key', () => {
    expect(hashTable.get('apple')).toBeFalsy();
  });

  it('handles collisions and can retrieve a value after', () => {
    // "fired" and "fried" hash to the same place as anagrams
    hashTable.set('fired', 'sun');
    expect(hashTable.get('banana')).toEqual('yellow');
    hashTable.set('fried', 'rice');
    expect(hashTable.get('fried')).toEqual('rice');
  });

  it('returns a list of all unique keys', () => {
    expect(hashTable.keys()).toContain('banana');
    expect(hashTable.keys()).toContain('fried');
    expect(hashTable.keys()).not.toContain('apple');
  });
});
