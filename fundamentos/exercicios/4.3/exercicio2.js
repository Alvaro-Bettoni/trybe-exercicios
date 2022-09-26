let word = "tryber";
let newWord = "";

for (let i = 0; i < word.length; i += 1) {
  newWord += word[word.length - 1 - i];
}

console.log(newWord);
