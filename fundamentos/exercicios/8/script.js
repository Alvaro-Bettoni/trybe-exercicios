const sayHello = () => {
  return 'hello trybers';
};

const printGreeting = (callback) => {
  console.log(callback());
};

printGreeting(sayHello);

const sumFixAmount = (amount) => {
  return (number) => amount + number;
};

const initialSum = sumFixAmount(15);
console.log(initialSum(5));

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if (number % 2 > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

const numberGenerator = () => {
  return Math.random() * 100;
};

console.log(numberGenerator());

// Ao chamar a função doingThings:

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const wakeUp = () => {
  return 'Acordando!!';
};
const coffeTime = () => {
  return 'Bora tomar café!!';
};
const sleepTime = () => {
  return 'Partiu dormir!!';
};

const doingThings = (parametro) => {
  console.log(parametro);
};

doingThings(wakeUp());

doingThings(coffeTime());
doingThings(sleepTime());
