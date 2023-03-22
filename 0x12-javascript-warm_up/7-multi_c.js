#!/usr/bin/node

const argsCount = process.argv.length - 2;

if (argsCount === 0) {
  console.log('Missing number of occurrences');
} else if (isNaN(process.argv[2])|| process.argv[2] <= 0 ) {
  return;
} else {
    for (let i = 0; i < parseInt(process.argv[2], 10); i++) {
        console.log('C is fun');
      }
}
