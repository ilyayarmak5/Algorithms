// BS function that returns index of an item
const binarySearch = function (list, item) {
  let lowest = 0;
  let highest = list.length - 1;
  while (lowest <= highest) {
    let mid = Math.round((lowest + highest) / 2);
    let guess = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      highest = mid - 1;
    } else {
      lowest = mid + 1;
    }
  }
  return false;
};

let list = [1, 2, 5, 8, 10, 11, 12, 13, 14, 15];
console.log(binarySearch(list, 15));
