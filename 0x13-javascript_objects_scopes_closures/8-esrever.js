#!/usr/bin/node

exports.esrever = function (list) {
  const arr = [];
  for (let i = list.length - 1; i >= 0; i--) {
    arr[list.length - 1 - i] = list[i];
  }
  return arr;
};
