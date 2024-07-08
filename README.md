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

We want to end up with a string with no duplicates. Our objective is to count the cost of deletion.

You'll be inputing a string and an array. The string is a series of letters, and the array represents the cost of deleting that letter from the array.

Example usage of the provided solution:

```sh
node cheap-letter-deletion.js "aabbcc" "1, 2, 1, 2, 1, 2"
```
Output:

```sh

```