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

// obj 9--------------------

// function getNameMaxAge(age) {
//   let maxAgePerson = people[0];
//   for (let i = 1; i < age.length; i++) {
//     if (people[i].age > maxAgePerson.age) {
//       maxAgePerson = people[i];
//     }
//   }
//   console.log(maxAgePerson.name);
// }
// const people = [
//   { name: "Sultonqul", age: 23 },
//   { name: "Erkin", age: 20 },
//   { name: "Temur", age: 21 },
// ];
// getNameMaxAge(people);

// obj 10--------------------
// let arr = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
// let countObj = {};

// for (let i of arr) {
//   if (countObj[i]) {
//     countObj[i]++;
//   } else {
//     countObj[i] = 1;
//   }
// }

// console.log(countObj);

// obj 11--------------------

// let number = 8945472985629;
// let str = number.toString();
// let a = "";
// let obj = {};
// for (let i of str) {
//   a += i;
// }
// obj["birlar"] = a.slice(-3);
// obj["minglar"] = a.slice(-6, -3);
// obj["millionlar"] = a.slice(-9, -6);
// obj["milliardlar"] = a.slice(-12, -9);
// obj["trilionlar"] = a.slice(-15, -12);

// console.log(obj);

// obj 12--------------------

// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];

// for (let i of books) {
//   if (i.alreadyRead === true) {
//     console.log(
//       i.author + "ning " + '"' + i.title + '"' + " kitobi " + " o'qilgan"
//     );
//   } else {
//     console.log(
//       i.author + "ning " + '"' + i.title + '"' + " kitobi " + " o'qilmagan"
//     );
//   }
// }
