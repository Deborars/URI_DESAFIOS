var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
  let a = parseFloat(lines[0]);
  let b = parseFloat(lines[1]);
  let c = parseFloat(lines[2]);
  let pi = 3.14159;

const formas ={
   triangulo: a*c/2,
   circulo: pi*Math.pow(c,2),
   trapezio: ((a+b)/2)*c,
   quadrado: b*b,
   retangulo: a*b
};

console.log(`TRIANGULO: ${(formas.triangulo).toFixed(3)}`);
console.log(`CIRCULO: ${(formas.circulo).toFixed(3)}`);
console.log(`TRAPEZIO: ${(formas.trapezio).toFixed(3)}`);
console.log(`QUADRADO: ${(formas.quadrado).toFixed(3)}`);
console.log(`RETANGULO: ${(formas.retangulo).toFixed(3)}`);

