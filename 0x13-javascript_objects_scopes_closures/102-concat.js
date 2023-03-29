#!/usr/bin/node

const fs = require('fs');

const argsCount = process.argv.length - 2;

if (argsCount < 3) {
  console.log('Requirements 3 files please');
} else {
  const fileA = process.argv[2];
  const fileB = process.argv[3];
  const fileC = process.argv[4];

  ConcatTwoFiles(fileA, fileB, fileC);
}

function ConcatTwoFiles (fileOne, fileTwo, fileThree) {
  fs.readFile(fileOne, 'utf8', (err, data1) => {
    if (err) throw err;

    fs.readFile(fileTwo, 'utf8', (err, data2) => {
      if (err) throw err;

      const concatenated = data1 + '\n' + data2;
      fs.writeFile(fileThree, concatenated, 'utf8', (err) => {
        if (err) throw err;
      });
    });
  });
}
