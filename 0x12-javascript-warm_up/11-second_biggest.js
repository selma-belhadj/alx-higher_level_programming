#!/usr/bin/node

function convertArrayInteger (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i], 10);
  }
  return arr;
}

function getSecondBiggest (array) {
  return array.sort(function (a, b) { return a - b; })[array.length - 2];
}

const argsCount = process.argv.length - 2;

if (argsCount === 0 || argsCount === 1) {
  console.log('0');
} else {
  const big = getSecondBiggest(convertArrayInteger(process.argv.slice(2)));
  console.log(big);
}
