/*URI Online Judge | 1014
Consumo
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).

Entrada
O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total percorrida (em Km), e um valor real Y representando o total de combustível gasto, com um dígito após o ponto decimal.

Saída
Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula, seguido da mensagem "km/l".

Exemplo de Entrada	Exemplo de Saída
500
35.0

14.286 km/l

2254
124.4

18.119 km/l

4554
464.6

9.802 km/l*/

let x = parseInt(lines[0]);
let y = parseFloat(lines[1]);
let consumo = (x/y).toFixed(3);

console.log(`${consumo} km/l`)

