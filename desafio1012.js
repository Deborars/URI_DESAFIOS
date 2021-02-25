
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  

<script>
  let a = 12.7;
  let b = 10.4;
  let c = 15.2;
  let pi = 3.14159;

const formas ={
   triangulo: a*c/2,
   circulo: pi*(c*c),
   trapezio: (a+b)*c/2,
   quadrado: b*b,
   retangulo: a*b
};

console.log(`TRIANGULO: ${(formas.triangulo).toFixed(3)}`);
console.log(`CIRCULO: ${(formas.circulo).toFixed(3)}`);
console.log(`TRAPEZIO: ${(formas.trapezio).toFixed(3)}`);
console.log(`QUADRADO: ${(formas.quadrado).toFixed(3)}`);
console.log(`RETANGULO: ${(formas.retangulo).toFixed(3)}`);

</script>
</body>
</html>