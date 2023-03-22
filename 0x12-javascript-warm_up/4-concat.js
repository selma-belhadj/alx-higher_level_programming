#!/usr/bin/node

const argsCount = process.argv.length - 2;

if (argsCount === 0) {
  console.log('undefined is undefined');
} else if (argsCount === 1) {
  console.log(process.argv[2] + ' is undefined');
} else {
  console.log(process.argv[2] + ' is ' + process.argv[3]);
}
