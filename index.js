// obj 1--------------------
// const me = {
//   firstName: "Sultonqul",
//   lastName: "Nortoyloqov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };
// for (let i in me) {
//   console.log(i + ": " + me[i]);
// }

// obj 2--------------------

// let n = 5;
// let obj = {};
// for (let i = 1; i <= n; i++) {
//   obj[i] = i * i;
// }
// console.log(obj);

// obj 3--------------------

// let obj = { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 };
// let value = Object.keys(obj);
// let keys = Object.values(obj);
// console.log(keys);
// console.log(value);

// obj 4--------------------

// let ary = ["Sultonqul", "Safarmurod", "O’rol", "Jahongir"];
// let obj = {};
// for (let i of ary) {
//   obj[i] = i.toString().length;
// }
// console.log(obj);

// obj 5--------------------

// let obj = { Apelsin: 10000, Olma: 12000, Mandarin: 8000, Banan: 20000 };
// let value = Object.values(obj);
// let res = 0;
// for (let i of value) {
//   res += i;
// }
// console.log(res);

// obj 6--------------------

// let person = {
//   firstName: "Sultonqul",
//   lastName: "Nortoyloqov",
//   516: "Enter to the university",
//   156: "Olympiads first position",
// };
// let res;
// let obj = Object.keys(person);
// for (let i of obj) {
//   let number = Number(i);
//   if (!isNaN(number)) {
//     res = false;
//     break;
//   } else {
//     res = true;
//   }
// }
// console.log(res);

// obj 7--------------------
// let str = "Men Sultonqul Programmerning guruhlarida o’qiyman.";
// let obj = {};
// let ar = [];

// let arr = str.split(" ");
// for (let i of arr) {
//   let wordLength = i.length;
//   ar.push({ word: i, length: wordLength });
// }
// let maxValue = ar[0];
// let minValue = ar[0];

// for (let i = 1; i < ar.length; i++) {
//   if (ar[i].length > maxValue.length) {
//     maxValue = ar[i];
//   }
//   if (ar[i].length < minValue.length) {
//     minValue = ar[i];
//   }
// }
// let output = {
//   minWord: minValue.word,
//   maxWord: maxValue.word,
// };

// console.log(output);

// obj 8--------------------

// let obj = { a: false, b: 12, c: true, d: 0 };
// let ob = {};

// for (let key in obj) {
//   let value = obj[key];
//   if (value) {
//     ob[key] = value;
//   }
// }
// console.log(ob);
