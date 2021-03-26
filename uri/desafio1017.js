var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let tempoGasto = 12/lines[0];
let velMedia = lines[1];

let qtdeCombustivel = (velMedia/tempoGasto).toFixed(3);

console.log(qtdeCombustivel);
