function fibonaccidigits(n) {

  /*
    The fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1.
    For this function, we are going to calculate the number of digits in the nth fibonacci number.
    The function should return the value of the nth fibonacci number.
    
    The function should be able to handle large numbers, so we'll be using BigInt.
    
    This relies on a fast-doubling algorithm to calculate the nth fibonacci number.

    The time complexity of this function is O(log n).
  */

  function fibInternal(n) {
    if (n === 0) return [BigInt(0), BigInt(1)];
    let [a, b] = fibInternal(Math.floor(n / 2));
    let c = a * ((b << 1n) - a);
    let d = a * a + b * b;
    if (n % 2 === 0) {
      return [c, d];
    } else {
      return [d, c + d];
    }
  }
  return fibInternal(n)[0];
}

if (process.argv.length > 2) {
  const n = parseInt(process.argv[2], 10);
  if (!isNaN(n)) {
    console.log(fibonaccidigits(n));
  } else {
    console.error('Please provide a valid number as an argument.');
  }
} else {
  console.error('Please provide a number as an argument.');
}