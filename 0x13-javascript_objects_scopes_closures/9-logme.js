#!/usr/bin/env node

let cpt = -1;
exports.logMe = function (item) {
  cpt++;
  console.log(cpt + ': ' + item);
};
