// Selection Sort Algorithm

const findSmallest = function (arr) {
  let smallestIndex = 0;
  let lowestNum = arr[smallestIndex];
  for (let i = 1; i < arr.length; i++) {
    let highestNum = arr[i];
    if (lowestNum > highestNum) {
      lowestNum = highestNum;
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = function (arr) {
  let arrLength = arr.length;
  let newArr = [];
  for (let i = 0; i < arrLength; i++) {
    let item = arr.splice(findSmallest(arr), 1)[0];
    newArr.push(item);
  }
  return newArr;
};

arr = [3, 5, 524, 2, 34, 2, 123];
console.log(selectionSort(arr));
