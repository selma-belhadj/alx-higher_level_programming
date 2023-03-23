#!/usr/bin/node

const argsCount = process.argv.length - 2;

if (argsCount === 0 || isNaN(process.argv[2])) {
  console.log('Missing size');
} else {
  let output = '';
  for (let i = 0; i < parseInt(process.argv[2], 10); i++) {
    output += 'X';
  }
  for (let i = 0; i < parseInt(process.argv[2], 10); i++) {
    console.log(output);
  }
}
