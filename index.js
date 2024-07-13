//timer function
const fs = require("fs");

const arrWordList = fs.readFileSync("./word-list.txt", "utf8").split("\n");
console.log(arrWordList);

const text = "abattis";


// function search(num) {
//   if (!string) {
//     console.log("Не строка");
//   } else {
//     arrWordList.indexOf(text);
//   }
// }
// const wordSearch = arrWordList.map(word , index => {
//     return word.index == num
// })
// console.log(wordSearch(num))

// function wordSearch(text) {
//   for (let i = 0; i < arrWordList.length; i = +1) {
//     if(arrWordList[i]==text){
//         return console.log('Слово присутствует')
//     }
//   }
// }
