// function validAnagram(str1, str2) {
//   // add whatever parameters you deem necessary - good luck!
//   if (str1.length !== str2.length) {
//     console.log("1st false");
//     return false;
//   }
// 
//   const lookup = {};
// 
//   for (i in str1) {
//     let key = str1[i];
//     lookup[key] ? (lookup[key] += 1) : (lookup[key] = 1);
//   }
//   console.log(lookup);
// 
//   for (i in str2) {
//     let key = str2[i];
//     if (!lookup[key]) {
//       console.log("2nd false");
//       return false;
//     } else {
//       lookup[key] -= 1;
//     }
//   }
//   console.log(true);
//   return true;
// }
// 
// // validAnagram(['f','i','n','d','e','r'], ['f','r','i','e','n','d'])
// 
// // longest uniform substring
// 
// // palindrome
// 
// function palindrome(str) {
//   const validStr = str.toLowerCase();
// 
//   return (
//     validStr ===
//     validStr
//       .split("")
//       .reverse()
//       .join("")
//   );
// }
// 
// // palindrome('annab')
// 
// // MY MADE UP AVERGES PROBLEM
// 
// const obj = [
//   {
//     name: "bobby",
//     score: 85
//   },
//   {
//     name: "jenny",
//     score: 99
//   },
//   {
//     name: "suzy",
//     score: 65
//   },
//   {
//     name: "tommy",
//     score: 35
//   },
//   {
//     name: "billy",
//     score: 75
//   },
//   {
//     name: "betty",
//     score: 95
//   }
// ];
// 
// function avgScores(obj) {
//   let avgscore = [];
// 
//   for (i in obj) {
//     avgscore.push(obj[i].score);
//   }
// 
//   const result = avgscore.reduce((a, b) => a + b) / avgscore.length;
//   console.log(result);
// }
// 
// // avgScores(obj)
// 
// // LONGEST UNIFORM SUBSTRING
// 
// // *  2) Your task is to implement the following function ('longestUniformSubstring')
// // *
// // *  This function should return an array with exactly two elements that describe the location of the longest
// // *  uniform substring of a string input. The first element of the array should be the start index and the second
// // *  element is the length
// // *
// // *  e.g.
// // *
// // *      for the input: "abbbccda" the longest uniform substring is "bbb"
// // *      (which starts at index 1 and is 3 characters long).
// // *
// // *      Therefore the return value would be the array: [1, 3]
// // *
// // *  3) If time permits, consider adding additional test cases.
// 
// // function longestUniformSubstring(input){
// //   const inputLen = input.length
// //   let startIndex = 0;
// //   let maxCount = 0;
// //   let currentStart, currentCount, prevChar;
// //
// //   for(let i = 0; i < inputLen; i++){
// //     if(input.charAt(i) !== prevChar){
// //       prevChar = input.charAt(i);
// //       currentStart = i;
// //       currentCount = 1;
// //     } else {
// //       currentCount++
// //     }
// //     if(currentCount > maxCount){
// //       startIndex = currentStart;
// //       maxCount = currentCount;
// //     }
// //   }
// //   return [ startIndex, maxCount ];
// // }
// //
// // longestUniformSubstring('abbbccda')
// 
// // const cities = ['NYC', 'Paris', 'London', 'Berlin']
// // const newObj = {}
// //
// // function test(x){
// //   for(let i = 0; i < x.length; i++){
// //     newObj[i] ? null : newObj[i] = x[i];
// //   }
// //   console.log(newObj);
// // }
// //
// // test(cities)
// //
// 
// // function luckyNumbers(num1, num2){
// //     for(let i = num1; i <= num2; i++){
// //       let thing = i.toString().split('')
// //       // const test = thing.reduce((a,b) => parseInt(a) + parseInt(b), 0)
// //       // if(test === 7){
// //       //   console.log(i);
// //       // }
// //       // } else if(thing.includes('7')){
// //       //   console.log(i);
// //       // }
// //       // let prevChar = 0
// //       let sum = 0
// //       for(var j = 0; j < thing.length; j++) {
// //         //if(sum !== 7){
// //           sum += thing[j];
// //           //console.log(sum);
// //           console.log(thing[j]);
// //         // } else {
// //         //   console.log(i);
// //         // }
// //       }
// //     }
// // }
// //
// // luckyNumbers(100, 200)
// 
// // class Vehicle {
// //   getPropulsion() {
// //     return "Gas Powered";
// //   }
// // }
// //
// // class Tesla extends Vehicle {
// //   constructor() {
// //     super();
// //     this.getPropulsion();
// //   }
// //   getPropulsion() {
// //     console.log("Electric Powered");
// //   }
// // }
// //
// // let model3 = new Tesla();
// 
// // class VehicleTwo {
// //   static getDefaultEngine() {
// //     return "Gas";
// //   }
// // }
// // let engine = VehicleTwo.getDefaultEngine();
// // console.log(engine);



// function addLetters(...letters) {
//   const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//   if(!letters.length){
//     return 'z'
//   }
//   const count = letters.reduce((currentCount, currentLetter) => {
//       let count = alphabet.indexOf(currentLetter) + 1
//       return currentCount + count;
//   }, 0)
//   const finalResult = (count - 1) % alphabet.length
//   return alphabet[finalResult]
// }
// 
// console.log(addLetters('a', 'b', 'c'))

const input = `SH348503,O567843,2018-12-10 15:08:58 -0000,Jane,Smith,
SH465980,O936726,2018-12-11 06:08:14 -0000,John,Reynolds,
SH465994,O936726,2018-12-11 06:12:37 -0000,John,Reynolds,
SH867263,O234934,2018-12-11 18:28:51 -0000,Rebecca,Jones,
SH907346,,2018-12-12 21:12:28 -0000,Rebecca,Jones,SH867263
SH927813,,2018-12-15 09:49:35 -0000,Rebecca,Jones,SH907346`;

function learnReduce(input){
  const test = input
  .split('\n')
  .map(line => line.split(','))
  .reduce((customers, line) => {
      customers[line[3]] = customers[line[3]] || []
      customers[line[3]].push({
        shipNum: line[0],
        orderNum: line[1] != '' ? line[1] : 'N/A',
        time: line[2],
      })
      return customers
  }, {})
  console.log(JSON.stringify(test, null, 2));
}

learnReduce(input)








