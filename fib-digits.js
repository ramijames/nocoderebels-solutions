
function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

if (process.argv.length > 2) {
  const n = parseInt(process.argv[2], 10);
  if (!isNaN(n)) {
    console.log(fibonacci(n));
  } else {
    console.error('Please provide a valid number as an argument.');
  }
} else {
  console.error('Please provide a number as an argument.');
}