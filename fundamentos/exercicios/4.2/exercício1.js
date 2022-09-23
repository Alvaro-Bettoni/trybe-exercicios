let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
let impares = 0;
let maior = 0;
let soma = 0;
let menor = numbers[0];
let arrayCriado = [];
let arrayDividido = [];

console.log(numbers);
for (i = 0; i < 25; i += 1) {
  arrayCriado[i] = arrayCriado.push(i);
}
for (i = 0; i < 25; i += 1) {
  arrayDividido[i] = arrayCriado[i] / 2;
}
for (i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}
console.log(soma);
media = soma / numbers.length;
console.log(media);
if (media > 20) {
  console.log("Valor maior que 20.");
} else {
  console.log("Valor menor ou igual a 20.");
}

for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maior) {
    maior = numbers[i];
  }
  if (numbers[i] < menor) {
    menor = numbers[i];
  }
  if (numbers[i] % 2 === 1) {
    impares += 1;
  }
}

console.log(impares);
console.log(maior);
console.log(menor);
console.log(arrayCriado);
console.log(arrayDividido);
