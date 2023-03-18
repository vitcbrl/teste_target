'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('dados.json');
let dados = JSON.parse(rawdata);

let min,
  max = dados
    .map(function (elt) {
      return elt.valor;
    })
    .reduce(
      function (result, elt) {
        if (elt > result.max) result.max = elt;
        if (elt < result.min) result.min = elt;
        return result;
      },
      { max: -Infinity, min: +Infinity },
    );
console.log(min);
console.log(max);
