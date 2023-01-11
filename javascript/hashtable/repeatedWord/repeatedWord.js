'use strict';

const HashTable = require('../hashtable');

function repeatedWord(string){
  let table = new HashTable(1024);
  let splitString = string.split(' ');
  let repeatedWord;
  let currentIndex = 0;
  while(!repeatedWord && currentIndex < splitString.length) {
    let currentWord = splitString[currentIndex].toLowerCase();
    if(table.has(currentWord) &&
      table.keys().includes(currentWord)) {
      repeatedWord = currentWord;
      return repeatedWord;
    } else {
      // setting to empty value but can easily use count
      table.set(currentWord, '');
      currentIndex = currentIndex + 1;
    }
  }
  return repeatedWord;
}

module.exports = repeatedWord;
