var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');


let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let c = parseInt(lines[2]);

let maiorAB = (a + b + Math.abs(a-b))/2;  


let num = Math.max(maiorAB, c);

console.log(`${num} eh o maior`);