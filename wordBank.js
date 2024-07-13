const fs = require("fs");
const arrWordList = fs.readFileSync("./word-list.txt", "utf8").split("\n");

function seurch(arr, text) {
  let result = false;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] == text) {
        return true;
    }
  }
  return result;
}
// const text = 'abirritative'
// console.log(seurch(arrWordList, text));
