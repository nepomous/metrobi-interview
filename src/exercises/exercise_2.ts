// Writes each item in the array with exponentially increasing delays: 1, 2, 4, 8, ... seconds
const writeWithExponentialDelay = async (arr: any[]) => {
  let delay = 1000; // Start with 1 second
  for (const item of arr) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    console.log(item);
    delay *= 2; // Double the delay for the next item
  }
};

// Example usage:
// console.log(
//   writeWithExponentialDelay(["a", "b", "c", "d"]).then(() => {
//     console.log("All items written with exponential delay");
//   })
// );
