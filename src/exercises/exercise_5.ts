// Returns the minimum number of moves needed with given eggs and floors
const eggDropProblem = (eggs: number, floors: number) => {
  const dp = Array.from({ length: eggs + 1 }, () => Array(floors + 1).fill(0));
  let minimum = 0;
  while (dp[eggs][minimum] < floors) {
    minimum++;
    for (let k = 1; k <= eggs; k++) {
      dp[k][minimum] = dp[k][minimum - 1] + dp[k - 1][minimum - 1] + 1;
    }
  }
  return minimum;
};

// Example usage:
console.log(eggDropProblem(2, 100)); // expected Output: 14
