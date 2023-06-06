// Example 1
// Write factorial function
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

console.log(factorial(5));
//

// Example 2
// Write Fibonacci Sequence
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7));
//

// Example 3
// Object deep copy
function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const copiedObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copiedObj[key] = deepCopy(obj[key]);
    }
  }

  return copiedObj;
}

const sourceObj = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "painting", { someVal: 1 }],
};

const copiedObj = deepCopy(sourceObj);
copiedObj.hobbies[2] = { someVal: 2 };

console.log(copiedObj, sourceObj);

//

// Example 4 (Advanced)
// Write Binary Search function
const sortedArrayForBinarySearch = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetElement = 23;

const binarySearch = (arr, target, left = 0, right = arr.length) => {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right);
  }

  return binarySearch(arr, target, left, mid - 1);
};

const resultIndex = binarySearch(sortedArrayForBinarySearch, targetElement);

//

// Example 4 (task for students)
// Array Summation
function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5]));

//
