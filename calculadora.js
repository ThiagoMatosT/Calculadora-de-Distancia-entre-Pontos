var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Lê os valores dos pontos P1 e P2
var p1 = lines[0].split(" ").map(Number);
var p2 = lines[1].split(" ").map(Number);

// Calcula a distância usando a fórmula
var distancia = Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));

// Imprime a distância com 4 casas decimais após a vírgula
console.log(distancia.toFixed(4));