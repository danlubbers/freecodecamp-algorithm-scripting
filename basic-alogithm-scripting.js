//  1. Convert Celsius to Fahrenheit

function convertToF(celsius) {
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
  }
  
  console.log(convertToF(30));

// 2. Reverse a String

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello"));

// 3. Factorialize a Number

function factorialize(num) {
    if ( num === 0 || num === 1) 
        return 1;
    for ( var i = num - 1; i >= 1; i--) {
        num *= i;
        }
    return num;
}
  
  console.log(factorialize(5));

// 4. Find the Longest Word in a String

function findLongestWordLength(str) {
    let strSplit = str.split(' ')
    // console.log(strSplit);
    let longestWord = 0;
    for (let i = 0; i < strSplit.length; i++) {
        if(strSplit[i].length > longestWord) {
            // console.log(strSplit[i].length)
            longestWord = strSplit[i].length;
        }
    }
    return longestWord;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// 5. Return Largest Numbers in Arrays

// THIS WAY DOES NOT TAKE INTO ACCOUNT FOR NEGATIVE NUMBERS
// function largestOfFour(arr) {
//     let largestNumber = [0, 0, 0, 0];

//     for (let i = 0; i < arr.length; i++) { 
//         for (let j = 0; j < arr[i].length; j++){
//             if(arr[i][j] > largestNumber[i]) {
//                 largestNumber[i] = arr[i][j];
//             }
//         }
//     }   
//     return largestNumber;
// }

// THIS WAY ACHIEVES THE INTENDED RESULT FOR NEGATIVE NUMBERS
function largestOfFour(arr) {
    // sort array from largest to smallest
    for ( let i = 0; i  < arr.length; i++ ) {
        arr[i] = arr[i].sort(function(small, large) {
            return large - small;
        })
    }
    // declare array to carry the result
    let tempArr = [];
    for (let j = 0; j < arr.length; j++) {
        tempArr.push(arr[j][0])
    } 
    return tempArr;
}

  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

// 6. Confirm the Ending

// First attempt - does not work with more than one letter
// function confirmEnding(str, target) {
//     let arrStr = str.split('');
//     let lastNum = arrStr.length - 1;
//     let lastLetter = arrStr[lastNum];
//     if (target === lastLetter) {
//         return true
//     } else {
//         return false
//     }
//   }
  
  console.log(confirmEnding("Bastian", "n"));

  function confirmEnding(str, target) {
      if (str.substr(-target.length) === target) {
          return true;
      } else {
          return false;
      }
  };

// 7. Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
    let repeatedStr = '';
    while (num > 0) {
        repeatedStr += str;
        num--;
    }
    return repeatedStr;
  }
  
  console.log(repeatStringNumTimes("abc", 3));
