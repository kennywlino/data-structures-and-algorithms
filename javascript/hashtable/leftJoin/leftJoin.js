'use strict';

const HashTable = require('../hashtable');

// input: two hash tables {string, synonym} {string, antonym}
// output: an array containing the [string, synonym, antonym]
// NOTE: add 'null' if the value exists in one hash table but not the other

// do we need to check for casing?


function leftJoin(tableA, tableB) {
  let tableAKeys = tableA.keys();
  let tableBKeys = tableB.keys();
  let joinResults = [];
  tableAKeys.forEach(key => {
    let keyResults = [];
    keyResults.push(key, tableA.get(key));
    if (tableBKeys.includes(key)) {
      keyResults.push(tableB.get(key));
    } else {
      keyResults.push(null);
    }
    console.log('KEY RESULTS:', keyResults);
    joinResults.push(keyResults);
    console.log('JOIN RESULTS:', joinResults);
  });

  let filteredTableBKeys = tableB.keys().filter(key => !tableAKeys.includes(key));
  filteredTableBKeys.forEach(key => {
    let keyResults = [key, null, tableB.get(key)];
    joinResults.push(keyResults);
  });

  return joinResults;
}

module.exports = leftJoin;
