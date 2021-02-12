// Quick Sort Algorithm

const quickSort = function (arr) {
  if (arr.length < 2) {
    return arr;
  }
  const less = [];
  const greater = [];
  const pivot = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return quickSort(less).concat(pivot, quickSort(greater));
};

const arr = [2, 1, 42, 123, 12];

console.log(quickSort(arr));
