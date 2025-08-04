const getDuplicates = (arr: any[]) => {
  const seen = new Set();
  const duplicates = new Set();
  for (const item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }
  return Array.from(duplicates);
};

// Examples
console.log(getDuplicates([1, 2, 3, 2, 4, 5, 1])); // Output: [2, 1]

console.log(getDuplicates([1, 2, 3, 1, 1, 1, 1])); // Output: [1]

console.log(
  getDuplicates(["apple", "banana", "orange", "apple", "kiwi", "banana"])
); // Output: ['apple', 'banana']
