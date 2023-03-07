const lista = [2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(`Lista: ${lista2}`);

// Adicionando e removendo elementos de uma posição específica

// Eliminará 3 elementos a partir da posição 5
lista2.splice(5, 3);
console.log(`Nova lista: ${lista2}`);


// Inserirá os números 2 e 3 a partir da posição 2 do array
console.log(`Lista: ${lista2}`);
lista2.splice(2, 0, 2, 3);             // Ex: array.splice(index, qnt p/ eliminar, valores a adc...)
console.log(`Nova lista: ${lista2}`);


