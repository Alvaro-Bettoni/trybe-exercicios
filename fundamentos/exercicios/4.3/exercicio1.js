let num = 10;
let result = num;
let result2 = num;

while (num > 1) {
  num--;
  result *= num;
}
console.log(result);

for (var i = result2 - 1; i >= 1; i -= 1) {
  result2 *= i;
}

console.log(result2);
