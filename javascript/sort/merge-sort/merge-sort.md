# Merge Sort

Merge sort is a sorting algorithm that takes a list and divides the list into two smaller lists recursively until we are down to the pairs of arrays containing individual elements. At that point, the pairs are compared and are *merged* back together to form a sorted list, recursively popping off the stack until we're back to our final sorted array.

## Psuedocode

```
ALGORITHM Mergesort(arr)
   if arr.length > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## Trace

### Plain array

Array: `[8, 4, 23, 42, 16, 15]`

#### Pass 1

Variables:
arr = `[8, 4, 23, 42, 16, 15]`
mid = (6 / 2) = 3
left = `[8, 4, 23]`
right = `[42, 16, 15]`

At this step, is split into 2 sub-arrays and the merge sort algorithm is called on both sub-arrays.

#### Pass 2

Variables:
arr = `[8, 4, 23]`
mid = (3 / 2) = 1
left = `[8]`
right = `[4, 23]`

At this step, left will be returned as its length is 1. Right will be split once more.

#### Pass 3

Variables:
arr = `[4, 23]`
mid = (2 / 2) = 1
left = `[4]`
right = `[23]`

At this point, the merging function will be called to iterate over `left` and `right` to check which value is smaller. This will give us the same array since `[4, 23]` is sorted. After this, we return to the previous call.

#### Pass 4

Variables:
arr = `[8, 4, 23]`
mid = (3 / 2) = 1
left = `[8]`
right = `[4, 23]`

At this point, the merging function will be called to iterate over `left` and `right` to check which values are smaller. We first check `left[0]` and `right[0]`
and we see that `right[0]` is smaller with a value of 4, so the arr will now look like: `[4, 4, 23]`.

After that we compare `left[0]` and `right[1]`, where we see that 8 < 23. Therefore, the array will look: `[4, 8, 23]`.

Since we've hit the end of the `left` array, we put the remaining items in the `right` array into `arr`.

Incidentally, the array will not change since 23 was already in the correct spot leaving us with `[4, 8, 23]`.

#### Pass 5

Variables:
arr = `[8, 4, 23, 42, 16, 15]`
mid = (6 / 2) = 3
left = `[4, 8, 23]`
right = `[42, 16, 15]`

From this point, we need to traverse `right` array of the original array since we've completed the left side.

#### Pass 6

Variables:
arr = `[42, 16, 15]`
mid = (3 / 2) = 1
left = `[42]`
right = `[16, 15]`

At this step, left will be returned as its length is 1. Right will be split once more.

#### Pass 7

Variables:
arr = `[16, 15]`
mid = (2 / 2) = 1
left = `[16]`
right = `[15]`

At this point, the merging function will be called to iterate over `left` and `right`. Since 16 < 15, the `arr` should now look like `[15, 16]`.

#### Pass 8

Variables:
arr = `[42, 16, 15]`
mid = (3 / 2) = 1
left = `[42]`
right = `[15, 16]`

At this step, the merging function will be called to iterate over `left` and `right` again. First we ask if `left[0]` is less than `right[0]`: 42 < 15? Since 15 is smaller, 15 is put into the array and the array now looks like: `[15, 16, 15]`.

Then we ask: `left[0]` < `right[1]`: 42 < 16? Since 16 is smaller, 16 is put into the array and gives us the same: `[15, 16, 15]`.

Finally, 42 remains so it is placed in the remaining spot giving us: `[15, 16, 42]`.

#### Pass 9

Variables:
arr = `[8, 4, 23, 42, 16, 15]`
mid = (6 / 2) = 3
left = `[4, 8, 23]`
right = `[15, 16, 42]`

At this step, we use the merging function again to make comparisons between the `left` and `right` arrays.

First we ask: left[0] < right[0]: 4 < 15?
The arr is now: `[4, 4, 23, 42, 16, 15]`

Next we ask: left[1] < right[0]: 8 < 15?
The arr is now: `[4, 8, 23, 42, 16, 15]`

Next we ask: left[2] < right[0]: 23 < 15?
The arr is now: `[4, 8, 15, 42, 16, 15]`

Next we ask: left[2] < right[1]: 23 < 16?
The arr is now: `[4, 8, 15, 16, 16, 15]`

Next we ask: left[2] < right[2]: 23 < 42?
The arr is now: `[4, 8, 15, 16, 23, 15]`

After this, the `left` array is empty, so the remaining values of the `right` array (i.e. [42]) will be put into the array giving us: `[4, 8, 15, 16, 23, 42]`.

## Efficiency

- Time: O(n log n)
  The log n comes from the array being divided into half multiple times until they reach size 1 arrays. The number of times we can divide is equal to the log of the size of the array.

  The additional n comes from the time it takes to compare each element in the left and right arrays.

- Space: O(1)
  We are not creating a new array.
