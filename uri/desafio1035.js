var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let C = parseInt(lines[2]);
let D = parseInt(lines[3]);

let X = C + D;
let Y = A + B;

if(B>C && D>A && X>Y && C>0 && D>0 && A%2===0 ){
  console.log("Valores aceitos");
}
else{
  console.log("Valores nao aceitos");
}

