const maxCarrotValue = (carrotTypes: any, capacity: number) => {
  const dp = Array(capacity + 1).fill(0);

  for (let w = 1; w <= capacity; w++) {
    for (const { weight, price } of carrotTypes) {
      if (weight <= w) {
        dp[w] = Math.max(dp[w], dp[w - weight] + price);
      }
    }
  }

  return dp[capacity];
};

// Example usage:
// const carrotTypes = [{ weight: 2, price: 3 }, { weight: 3, price: 4 }, { weight: 4, price: 5 }];
// const capacity = 7;
// console.log(maxCarrotValue(carrotTypes, capacity)); // Output: 10
