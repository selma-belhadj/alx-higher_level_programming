#!/usr/bin/node

function factorial (a) {
  if (a === 0) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
}
const argsCount = process.argv.length - 2;

if (argsCount === 0) {
  console.log('1');
} else {
  const a = parseInt(process.argv[2]);
  console.log(factorial(a));
}
