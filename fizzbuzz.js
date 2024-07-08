function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let output = '';
    // Check if i is a power of 2
    if (Math.log2(i) % 1 === 0) output = 'POWER';
    console.log(output || i);
  }
}

// Check if an argument is provided
if (process.argv.length > 2) {
  const n = parseInt(process.argv[2], 10);
  if (!isNaN(n)) {
    fizzBuzz(n);
  } else {
    console.error('Please provide a valid number as an argument.');
  }
} else {
  console.error('Please provide a number as an argument.');
}