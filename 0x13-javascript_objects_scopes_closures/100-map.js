#!/usr/bin/node

const list = require('./100-data').list;

function factorIndex (arr) {
  const newArray = arr.map((x, index) => x * index);
  console.log(arr);
  console.log(newArray);
}

factorIndex(list);
