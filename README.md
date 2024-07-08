# Nocoderebels Frontend Test

Instructions are per test. Except for #2, these are require node.js to run in a command-line.

Clone the repo, and run with the commands provided.

## Fizzbuzz

Any number which is a power of two should be replaced with the string "POWER".

This takes an argument as the input, which defines how many numbers to print. In the example below, 10 is the input.

```sh
node fizzbuzz.js 16
```

The output of this is expected to be:

```sh
POWER
POWER
3
POWER
5
6
7
POWER
9
10
11
12
13
14
15
POWER
```

## CSS Textbox Positioning

Open the css-content-position.html in a browser to view the completed solution. I relied on flex-box display for easy content positioning.

## Cheap Letter Deletion

On the first two or three readings of the requirements, I didn't understand exactly what was being asked of me for this test.

From my understanding:

- We want to end up with a string with no duplicates.
- Our objective is to count the cost of deletion.
- You'll be inputing a string and an array. 
- The string is a series of letters, and the array represents the cost of deleting the letter at that position from the array.
- You must choose the lowest cost letter.

Example usage of the implemented solution:

```sh
node cheap-letter-deletion.js "aabbcc" "1, 2, 1, 2, 1, 2"
```
Output:

```sh
Total Cost: 3
```

## Fibonnaci

I've never had a need to actually implement a Fibonnaci sequence, so I didn't really understand why this was tagged as hard. I get it now.

It isn't about how to get it done, it is about how to get it done efficiently. A naive implementation is very compute intensive, and for digits that are far down the number line it can be a very long wait.

I did some research and came to understand that it is common to use these methods to solve this:

- recursion
- memoization
- matrix multiplication

I leaned on [this article by devlucky](https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e) for the solution. I absolutely never would have gotten there on my own.

To run the solution:

```sh
node fib-digits.js 13
```
Output:

```sh
377
```
My forté is not in computation or algorithms. It's in front-end development. In the real world I would have simply [used this NPM package](https://github.com/CraigH2013/fibonacci-fast).