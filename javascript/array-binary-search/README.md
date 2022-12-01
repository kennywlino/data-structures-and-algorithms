# Array Binary Search

In this challenge, we must write a function `array-binary-search` that takes in a *sorted* array and a value and uses the binary search method to find the value within it and returns -1 if it doesn't exist.

## Whiteboard Process

![reverse array whiteboard](./array-binary-search.jpeg)

## Approach & Efficiency

For our solution, we used this image:
![binary search animation](./binary-and-linear-search-animations.gif)

as well as the [Wikipedia article](https://en.wikipedia.org/wiki/Binary_search_algorithm) on binary search as given in the code challenge description.

The approach is to use a pointer on the `front` and `end` of the array and while `front` is less than or equal to `end`, create a variable `mid` that is equal to the value at the middle of the array. Check whether our given `value` is greater or less than the `middle`, and if it's greater, move out `front` pointer to the `middle` index + 1 and update the `middle` value. If it's less than, move our `back` pointer to `middle` index - 1, and update the `middle` value. If the `middle` value is equal to the `value` we're looking for, return `middle`, and if it's not found, return -1.

Big O:
space: O(1)
time: O(log n)
