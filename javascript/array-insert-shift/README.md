# Insert element in the middle of an array

In this challenge, we must write a function `insertShiftArray` that takes in an array and an element and adds the element to the middle of the array.

## Whiteboard Process

![insertShiftArray whiteboard](./reverse-array.jpeg)

## Approach & Efficiency

For this solution, we chose to define a new array and variable `middleIndex`. We also defined a for loop to iterate over the given array and add these elements to the new array until we reached the `middleIndex`. Once we reach the `middleIndex`, we add the given element to the new array at that point, and iterate over the rest of the given array, adding those elements one index over in the new array.

Big O:
space: O(n)
time: O(n)

## My solution

```javascript
function insertShiftArray(arr, val) {
  let newArr = [];
  let middleIndex = Math.ceil(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    if (i < middleIndex) {
      newArr[i] = arr[i];
    } else if (i === middleIndex) {
      newArr[i] = val;
      newArr[i + 1] = arr[i];
    } else {
      newArr[i + 1] = arr[i];
    }
  }
  return(newArr);
}
```
