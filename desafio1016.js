var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let totalTempo = input * 2;

console.log(totalTempo + " minutos");