// Recursive sum of all elements in array

const sum = function (arr) {
  let i = 0;
  let splicedArr = [...arr];
  if (arr.length === 0) {
    return 0;
  } else {
    return splicedArr.splice(i, 1)[0] + sum(splicedArr);
  }
};

// Recursive counter of the amount of elements in array

const count = function (arr) {
  let splicedArr = [...arr];
  if (arr.length === 0) {
    return 0;
  } else {
    splicedArr.splice(0, 1);
    return 1 + count(splicedArr);
  }
};

// Find the largest number in array with recursion

const max = function (arr) {
  let splicedArr = [...arr];
  if (splicedArr.length === 1) {
    return arr[0];
  }
  if (splicedArr[0] > splicedArr[1]) {
    splicedArr.splice(1, 1);
  } else {
    splicedArr.splice(0, 1);
  }
  return max(splicedArr);
};

arr = [11, 1, 2, 3, 5, 25];

console.log("Number of elements: " + count(arr));
console.log("Sum of all elements: " + sum(arr));
console.log("Max number: " + max(arr));
