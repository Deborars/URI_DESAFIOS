
  //Não passou no teste do URI, porém funciona no console.log


  let a = 12.7;
  let b = 10.4;
  let c = 15.2;
  let pi = 3.14159;

const formas ={
   triangulo: a*c/2,
   circulo: pi*Math.pow(c,2),
   trapezio: (a+b)*c/2,
   quadrado: b*b,
   retangulo: a*b
};

console.log(`TRIANGULO: ${(formas.triangulo).toFixed(3)}`);
console.log(`CIRCULO: ${(formas.circulo).toFixed(3)}`);
console.log(`TRAPEZIO: ${(formas.trapezio).toFixed(3)}`);
console.log(`QUADRADO: ${(formas.quadrado).toFixed(3)}`);
console.log(`RETANGULO: ${(formas.retangulo).toFixed(3)}`);

