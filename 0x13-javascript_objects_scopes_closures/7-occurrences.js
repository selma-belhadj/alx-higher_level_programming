#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  let cpt = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === searchElement) {
      cpt++;
    }
  }
  return cpt;
};
