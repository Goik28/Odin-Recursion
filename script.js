#!/usr/bin/env node

//exercise 1
function fibs(limit) {
  const fibArray = [0, 1];
  for (let index = 2; index < limit; index++) {
    fibArray.push(fibArray[index - 2] + fibArray[index - 1]);
  }
  return fibArray;
}
console.log("Fibonacci sequence using iteration: " + fibs(8));

//exercise 2
function fibsRec(limit) {
  if (limit === 0) {
    return [0];
  }
  if (limit === 1) {
    return [0, 1];
  }
  if (limit > 1) {
    const fibArrayRec = fibsRec(limit - 1);
    return [...fibArrayRec, fibArrayRec[limit - 2] + fibArrayRec[limit - 1]];
  }
}
//The nth number appears on the position n - 1 on the array.
console.log("Fibonacci sequence using recursion: " + fibsRec(8 - 1));

//exercise 3
function mergeSort(array) {
  const sortedArray = [];
  if (array.length < 2) {
    return sortedArray.concat(array);
  }
  let leftArray = array.slice(0, array.length / 2);
  let rightArray = array.slice(array.length / 2);
  if (leftArray.length > 1) {
    leftArray = mergeSort(leftArray);
  }
  if (rightArray.length > 1) {
    rightArray = mergeSort(rightArray);
  }
  while (true) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray[0]);
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[0]);
      rightArray.shift();
    }
    if (leftArray.length == 0) {
      sortedArray.push(...rightArray);
      break;
    }
    if (rightArray.length == 0) {
      sortedArray.push(...leftArray);
      break;
    }
  }
  return sortedArray;
}

console.log(
  "MergeSort algo: [6, 5, 1, 3, 7, 2, 8, 4] = " +
    mergeSort([6, 5, 1, 3, 7, 2, 8, 4])
);
