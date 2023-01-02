# Insertion Sort

Insertion sort is a sorting algorithm that can sort a sequence of elements by iterating over the list and *inserting* each element in its correct location.

## Pseudocode

```
  InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp
```

## Trace

### Plain array

Sample array: `[8, 4, 23, 42, 16, 15]`

#### Pass 1

Variables:
i = 1
j = 0
temp = arr[1] = 4
arr[j] = arr[0] = 8

At this step, since `j >= 0` and our temp value `4` is less than the value of arr[j] `8`, we set `arr[1]` to equal the value of `arr[0]` which is 8.

At this point the array would look like:

`[8, 8, 23, 42, 16, 15]`

After this, we decrement j, which will be `-1` at this point, and assign `arr[0]` (`arr[-1 + 1]`) the value of temp, which is 4, bringing our array to:

`[4, 8, 23, 42, 16, 15]`

j will no longer be >= 0, so the while loop ends and we continue with our for loop.

#### Pass 2

Variables:
i = 2
j = 1
temp = arr[2] = 23
arr[j] = arr[1] = 8

At this step, we see that temp is not less than arr[j], so we continue and our array still looks like:

`[4, 8, 23, 42, 16, 15]`

#### Pass 3

Variables:
i = 3
j = 2
temp = arr[3] = 42
arr[j] = arr[2] = 23

At this step, we see that temp is not less than arr[j], so we continue and our array still looks like:

`[4, 8, 23, 42, 16, 15]`

#### Pass 4

Variables:
i = 4
j = 3
temp = arr[4] = 16
arr[j] = arr[3] = 42

At this step, our temp value `16` is less than the value at `arr[j]` `42`, so we enter the while loop again.

We can assign `arr[4]` (`arr[j + 1]`) the value of `arr[j]`, which is `42`, and decrement j so `j = 2`.

At this point, the array would look like:

`[4, 8, 23, 42, 42, 15]`

At this point, we need to update our variables again before going through the while loop again since the condition still holds true that j >= 0.

Variables:
i = 4
j = 2
temp = 16
arr[j] = arr[2] = 23

Here, we see that `temp` is less than `arr[j]` again (16 < 23), so we must assign `arr[3]` (`arr[j + 1]`) the value of `arr[2]`, giving us the following array:

`[4, 8, 23, 23, 42, 15]`

Afterwards, we decrement j again giving us the following variable state:

Variables:
i = 4
j = 1
temp = 16
arr[j] = arr[1] = 8

At this point, the while loop would not be run because temp is not less than arr[j] (16 !< 8), so we would just assign `arr[2]` (`arr[j + 1]`) our temp value.

Afterwards, the array should look like:

`[4, 8, 16, 23, 42, 15]`

### Pass 5

Variables:
i = 5
j = 4
temp = arr[5] = 15
arr[j] = arr[4] = 42

In this case, 15 is less than 42. Following the previous logic, the array would then look like:

`[4, 8, 16, 23, 42, 42]`

Then after we decrement j:

`[4, 8, 16, 23, 23, 42]`

Again:

`[4, 8, 16, 16, 23, 42]`

To finally get to:

`[4, 8, 15, 16, 23, 42]`

## Efficiency

- Time: O(n^2)
  This is because we have a nested loop and because we would have to shift as many as all of the elements to the front of the list.

- Space: O(1)
  We are not creating anything new since the array is being sorted in place.
