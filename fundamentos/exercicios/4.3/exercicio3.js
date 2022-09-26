let array = ["java", "javascript", "python", "html", "css"];
let menorPalavra = array[0];
let maiorPalavra = array[0];
for (i = array.length - 1; i >= 0; i -= 1) {
  if (array[i].length < menorPalavra.length) {
    menorPalavra = array[i];
  }
}

console.log(menorPalavra);

for (i = array.length - 1; i >= 0; i -= 1) {
  if (array[i].length > maiorPalavra.length) {
    maiorPalavra = array[i];
  }
}
console.log(maiorPalavra);
