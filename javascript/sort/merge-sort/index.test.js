'use strict';

const mergeSort = require('./index');

describe('Merge Sort', () => {
  test('sorts a regular unsorted list', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    mergeSort(arr);
    expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
  });

  test('sorts a reversed list', () => {
    let arr = [20, 18, 12, 8, 5, -2];
    mergeSort(arr);
    expect(arr).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  test('sorts a list with few uniques', () => {
    let arr = [5, 12, 7, 5, 5, 7];
    mergeSort(arr);
    expect(arr).toEqual([5, 5, 5, 7, 7, 12]);
  });

  test('sorts a nearly sorted list', () => {
    let arr = [2, 3, 5, 7, 13, 11];
    mergeSort(arr);
    expect(arr).toEqual([2, 3, 5, 7, 11, 13]);
  });
});

