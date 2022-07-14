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

    console.log(palindromeResult)
    return palindromeResult;
}

isPalindrome('aeiou')
isPalindrome('racecar')