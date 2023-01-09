'use strict';

const LinkedList = require('../linked-list');

class HashTable {
  constructor(size){
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key){
    let characters = key.split('');
    // using reducer pattern
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value){
    let position = this.hash(key);
    let data = {[key]: value};

    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      bucket.insert(data);
    } else {
      let bucket = new LinkedList();
      bucket.insert(data);
      this.buckets[position] = bucket;
    }
  }

  get(key) {
    let position = this.hash(key);

    if(this.buckets[position]) {
      let bucket = this.buckets[position];
      let value = bucket.head.value[key];
      return value;
    }
  }

  has(key){
    let position = this.hash(key);
    return this.buckets[position];
  }

  // [{key, value}-{key, value}, ]
  keys(){
    return this.buckets.filter(element => Object.keys(element));
  }
}

module.exports = HashTable;
