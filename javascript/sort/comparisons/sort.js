'use strict';

// const { mainModule } = require('process');


function sortYear(arr, callback) {
  arr.sort(callback);
  return(arr);
}

function compareYear(a, b) {
  //do the thing
  return b.year - a.year;
}

function sortTitle(arr, callback) {
  arr.sort(callback);
  return arr;
}

function compareTitle(a, b) {
  a = a.title;
  b = b.title;

  let regex = /^(the|an|a)\s/i;

  a = a.replace(regex, '');
  b = b.replace(regex, '');

  if(a < b) return -1;
  if(a > b) return 1;

}


module.exports = { sortYear, compareYear, sortTitle, compareTitle };
