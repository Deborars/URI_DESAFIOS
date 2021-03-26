let lines = [];

lines[0] = [1.0, 7.0]
lines[1] = [5.0, 9.0]

let [x1, y1] = lines[0];
let [x2, y2] = lines[1];

let distancia = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));

console.log(`${distancia.toFixed(4)}`);