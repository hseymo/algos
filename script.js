console.log('linked')


// SORT STRING lower then upper then odd then een

function Sorting (string) {

    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    // lowercase = lowercase.split('');
    console.log(lowercase);
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // uppercase = uppercase.split('');
    console.log(uppercase);
    let odd = '13579';
    // odd = odd.split('');
    console.log(odd);
    let even = '02468';
    // even = even.split('');
    console.log(even)

    console.log(lowercase.includes('A'))

    let lowerArray = []
    let upperArray = []
    let oddArray = []
    let evenArray = []

    for (let i=0; i<string.length; i++) {
      var currChar = string[i]
      if (lowercase.includes(currChar)) {
        lowerArray.push(currChar)
      } else if (uppercase.includes(currChar)) {
        upperArray.push(currChar)
      } else if (odd.includes(currChar)) {
        oddArray.push(currChar)
      } else if (even.includes(currChar)) {
        evenArray.push(currChar)
      }      
    }

    let sortedString = lowerArray.join('').concat(upperArray.join(''), oddArray.join(''), evenArray.join(''))

    console.log(sortedString)

    return sortedString;
  }

  Sorting('heG4GNNLASDFGllo5895aaF')

//   fizz buzz

const fizzBuzz = (numArray) => {
    console.log(
    numArray.map((num) => {
        const divisibleByThree = num % 3 === 0;
        const divisibleByFive = num % 5 === 0;

        if (divisibleByThree && divisibleByFive) {
            return 'FizzBuzz';
        } else if (divisibleByThree) {
            return 'Fizz';
        } else if (divisibleByFive) {
            return 'Buzz';
        } else {
            return num;
        }
    })
    )
}

fizzBuzz([3, 7, 6, 19, 22, 13468, 100, 30])

// reverse string

function Reverse (string) {
    // VERSION 1
    // let reverseResult = [];
    // for (let i = string.length; i>= 0; i--) {
    //     reverseResult.push(string[i])
    // }
    // reverseResult = reverseResult.join('')
    
    // VERSION 2 
    let reverseResult = string.split('').reverse().join("");

    console.log(reverseResult)
    return reverseResult;
}

Reverse('hello tobias')

// Palindrome check

function isPalindrome (string) {
    let palindromeResult; 
    // VERSION 1
    // for (let i=0; i<string.length/2; i++) {
    //     if (string[i] !== string[string.length-1-i]) {
    //         palindromeResult = false;
    //         break
    //     } else {
    //         palindromeResult = true
    //     }
    // }


    // VERSION 2 - using reverse function above
    // palindromeResult = string == Reverse(string)
    // AKA
    // palindromeResult = string == string.split('').reverse().join("");

    // edge cases - removing spaces or commas, etc. and capitals
    // let plainString = string.replace(/\W/g, '');
    // plainString = plainString.toLowerCase();
    // return string == plainString.reverse()

    // VERSION 3 USING STACK
    let stack = [];
    let reverse = "";

    for (let i=0; i<string.length; i++) {
        stack.push(string[i])
    }
    console.log(stack)
    for (let i=0; i<string.length; i++) {
        reverse = reverse + stack.pop()
    }
    console.log(reverse)

    if (string === reverse) {
        palindromeResult = true
    } else {
        palindromeResult = false
    }

    console.log(palindromeResult)
    return palindromeResult;
}

isPalindrome('aeiou')
isPalindrome('racecar')

// TWO SUMS

var twoSum = function(nums, target) {
    var returnArray=[];
    for (i=0; i<nums.length; i++) {
        let desired = target - nums[i];
        // console.log(desired)
        let index = nums.findIndex(nums => nums === desired)
        // console.log(index)
        if (index != -1 && i != index) {
            returnArray.push(i);
            returnArray.push(index);
            return returnArray
        }
    }
};

// convert 12 hour clock to miliary time

function timeConversion(s) {
    let hour = Number(s.slice(0, 2));
    if (s[8] == 'P' && hour == 12) {
        hour = hour;
     } else if (s[8] == 'P' || s[8] == 'p') {
        hour = hour + 12;
    } else if (s[8] == 'A' && hour == 12) {
        hour = "00"
    } else if (hour < 10) {
        hour = "0" + hour
    }
    return hour + s.slice(2, 8)
}

// ratio of postive, negative and zero numbers in an array

function plusMinus(arr) {
    // Write your code here
    let negative = 0;
    let positive = 0;
    let zero = 0; 
    let outcome;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > 0) {
            positive = positive + 1;
        } else if (arr[i] < 0) {
            negative = negative + 1;
        } else {
            zero = zero + 1;
        }
    }
    
    console.log((positive/arr.length).toFixed(6))
    console.log((negative/arr.length).toFixed(6))
    console.log((zero/arr.length).toFixed(6))
}

// give array find max sum and min sum of 4 numbers (array length of 5)

function miniMaxSum(arr) {
    let min;
    let max;
    for (let i=0; i<arr.length; i++) {
        if (i == 0) {
            min = arr[i];
            max = arr[i]
        } else if (min > arr[i]) {
            min = arr[i]
        } else if (max < arr[i]) {
            max = arr[i]
        }
    }
    let total = arr.reduce((a,b) => a+b, 0)
    // console.log(total)
    // console.log(min)
    // console.log(max)
    console.log(`${(total-max)}`, `${(total-min)}`)
}

//  ++++++ Day 1 mock test +++++++

// in an array all elements are duplicated except 1

function lonelyinteger(a) {
    a.sort();
    for (let i=0; i<a.length; i++) {
        let desired = a[i];
        if (desired == a[i+1] || desired == a[i-1]) {
            continue
        } else {
            return desired
        }
    }
}

// with a square; calc sum of each diagonal and return absolute value of difference

function diagonalDifference(arr) {
    // left-to-right
    let lrSum = 0;
    for (let i=0; i<arr.length; i++) {
        lrSum = lrSum + arr[i][i]
    }
    // right-to-left
    let rlSum = 0; 
    let count= 0;
    for (let y = arr.length-1; y>=0; y--) {
        rlSum = rlSum + arr[y][count]
        count++
    }
    return Math.abs(lrSum - rlSum)
}

// frequency array

function countingSort(arr) {
    let emptyArray = []
    for (let i=0; i<100; i++) {
        emptyArray.push(0)
    }
    for (let y=0; y<arr.length; y++) {
        let target = arr[y]
        emptyArray[target] = emptyArray[target]+1
    }
    return emptyArray
}