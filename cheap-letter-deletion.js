function solution(S, C) {
  let totalCost = 0;

  // Iterate through the string one letter at a time
  for (let i = 0; i < S.length - 1; i++) {
    if (S[i] === S[i + 1]) {
      // If two consecutive characters are the same, delete the one with the lesser cost
      totalCost += Math.min(C[i], C[i + 1]);
      // console.log("Step: " + totalCost);
    }
  }

  return totalCost;
}

// Check if an argument is provided
if (process.argv.length > 2) {
  const input = process.argv[2];
  
  if (typeof input === 'string') {
    // Assuming the second argument is a comma-separated list of costs
    const costs = process.argv[3] ? process.argv[3].split(',').map(Number) : [];
    // Call solution with the string and costs array
    console.log("Total Cost: " + solution(input, costs));
  } else {
    console.error('Please provide a valid string as the first argument.');
  }
} else {
  console.error('Please provide a string and a list of costs as arguments Ex: node cheap-letter-deletion.js "abccbd" "1,2,3"');
}