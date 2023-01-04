'use strict';

function mergeSort(arr) {

  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    mergeSort(left);
    mergeSort(right);

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i = i + 1;
      } else {
        arr[k] = right[j];
        j = j + 1;
      }
      k = k + 1;
    }

    while (i < left.length) {
      arr[k] = left[i];
      i = i + 1;
      k = k + 1;
    }

    while (j < right.length) {
      arr[k] = right[j];
      j = j + 1;
      k = k + 1;
    }
  }

  return arr;
}

module.exports = mergeSort;
