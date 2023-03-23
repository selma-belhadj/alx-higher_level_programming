#!/usr/bin/node

function add (a, b) {
  return a + b;
}
const argsCount = process.argv.length - 2;

if (argsCount < 2) {
  console.log('NaN');
} else {
  const a = parseInt(process.argv[2]);
  const b = parseInt(process.argv[3]);
  console.log(add(a, b));
}
