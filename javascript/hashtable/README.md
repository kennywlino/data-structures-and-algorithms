# Hashtables

A hashtable is a data structure that takes key value pairs. The way that they work is by using a hashing algorithm on the key to decide where to store the {key, value} pair. After the data is stored, it is easily retrievable since we know where the location is.

## Challenge

In CLASS-30, we are tasked with creating our own HashTable class and implementing some basic functionalities, including hash(), set(), and get().

In CLASS-31, we are tasked with using our HashTable implementation to take in a string and find the first repeated word.

## Approach & Efficiency

### Implementation

- `set()`
  The time complexity is O(1) as we simply look up the key and add to the bucket.

- `get()`
  Same as `set()`.

### Repeated Word

  - Time: O(n) since we have to iterate over all of the words. However, at a more granular level it may be possible to say O(n^2) since for each word we need to hash it, which iterates over each character.

  - Space: O(n) since the buckets of our HashTable stores a bucket of 'size'.

## Implementation API

- `set()`

Arguments: key, value
Returns: nothing
This method hashes the key and set the key and value pair in the table, handling collisions as needed.
If a given key already exists, its value is replaced with the value argument given to this method.

- `get()`

Arguments: key
Returns: Value associated with that key in the table

- `has()`

Arguments: key
Returns: Boolean, indicating if the key exists in the table already.

- `keys()`
Returns: Collection of keys

- `hash()`
Arguments: key
Returns: Index in the collection for that key

## Whiteboard

![CLASS-31: Repeated Word UML](./assets/CLASS-31_%20Whiteboard%20Challenge.jpeg)
