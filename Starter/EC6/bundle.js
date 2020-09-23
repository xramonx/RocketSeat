"use strict";

var _require = require("commander"),
    requiredOption = _require.requiredOption; //import soma from './rest.js'


function test() {
  //try play around changing var/let/
  var x = 4,
      y = 3;
  console.log(x, y);
  {
    //new scope => it could be a for, a function a if or just a new scope { }
    //try play around changing var/let/
    var _y = 6;
    console.log(x, _y);
  }
  console.log(x, y);
}

test(); //soma (a ,b){

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total * 5 + next;
  });
}

console.log(soma(2, 3));
