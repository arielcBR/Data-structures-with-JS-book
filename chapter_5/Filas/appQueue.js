const Queue = require('./Queue');

const fila = new Queue();

console.log(fila.isEmpty());

fila.enqueue('Ariel');
fila.enqueue('Aldana');
fila.enqueue('Pietra');
fila.enqueue('Viviane');
fila.enqueue('Celino');

console.log(fila.size());
console.log(fila.toString());

fila.dequeue();
console.log(fila.toString());

fila.dequeue();
console.log(fila.toString());

console.log(fila.size());