function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  if(str1.length !== str2.length){
    console.log('1st false');
    return false
  }
  
  const lookup = {}
  
  for(i in str1){
    let key = str1[i]
    lookup[key] ? lookup[key] += 1: lookup[key] = 1;
  }
  console.log(lookup);
  
  for(i in str2){
    let key = str2[i]
     if(!lookup[key]){
       console.log('2nd false');
       return false
     } else {
       lookup[key] -= 1
     }
  }
  console.log(true);
  return true
  
}

// validAnagram(['f','i','n','d','e','r'], ['f','r','i','e','n','d'])


// longest uniform substring


// palindrome

function palindrome(str){
  const validStr = str.toLowerCase()
  
  return validStr === validStr.split('').reverse().join('')
}

// palindrome('annab')

// MY MADE UP AVERGES PROBLEM 

const obj = [
  {
    name: 'bobby',
    score: 85
  },
  {
    name: 'jenny',
    score: 99,
  },
  {
    name: 'suzy',
    score: 65
  },
  {
    name: 'tommy',
    score: 35
  },
  {
    name: 'billy',
    score: 75
  },
  {
    name: 'betty',
    score: 95
  },
];

function avgScores(obj){
  let avgscore = []
  
  for(i in obj){
    avgscore.push(obj[i].score);
  }
  
  const result = avgscore.reduce((a, b) => (a + b)) / avgscore.length
  console.log(result);
}

// avgScores(obj)


// LONGEST UNIFORM SUBSTRING

// *  2) Your task is to implement the following function ('longestUniformSubstring')
// *   
// *  This function should return an array with exactly two elements that describe the location of the longest
// *  uniform substring of a string input. The first element of the array should be the start index and the second 
// *  element is the length
// *  
// *  e.g.
// *      
// *      for the input: "abbbccda" the longest uniform substring is "bbb" 
// *      (which starts at index 1 and is 3 characters long).
// *      
// *      Therefore the return value would be the array: [1, 3]
// *  
// *  3) If time permits, consider adding additional test cases.

// function longestUniformSubstring(input){
//   const inputLen = input.length
//   let startIndex = 0;
//   let maxCount = 0;
//   let currentStart, currentCount, prevChar;
// 
//   for(let i = 0; i < inputLen; i++){
//     if(input.charAt(i) !== prevChar){
//       prevChar = input.charAt(i);
//       currentStart = i;
//       currentCount = 1;
//     } else {
//       currentCount++
//     }
//     if(currentCount > maxCount){
//       startIndex = currentStart;
//       maxCount = currentCount;
//     }
//   }
//   return [ startIndex, maxCount ];
// }
// 
// longestUniformSubstring('abbbccda')


const cities = ['NYC', 'Paris', 'London', 'Berlin']
const newObj = {}

function test(x){
  for(let i = 0; i < x.length; i++){
    newObj[i] ? null : newObj[i] = x[i];
  }
  console.log(newObj);
}

test(cities)











