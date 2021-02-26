
  //Não passou no teste do URI, porém funciona no console.log


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
 
 let num = lines.reduce((acc, item)=>{
    if(acc>item) {acc;}
    else {acc = item;}
    return acc 
 },0)

console.log(`${num} eh o maior`);
