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

// method 2 - refactor

function timeConversion(s) {
    let ampm = s.slice(-2)
    let hour = s.slice(0,2)
    let output;
    if (ampm == 'AM' || ampm == 'am') {
       if (hour == 12) {
           output = '00' + s.slice(2,8)
       } else {
           output = s.slice(0,8)
       }
    } else {
        if (hour == 12) {
            output = s.slice(0,8)
        } else {
            let newHour = parseInt(hour) + 12 
            output = newHour + s.slice(2,8)
        }
    }
    return output
}

// ratio of postive, negative and zero numbers in an array

function plusMinus(arr) {
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

// version 2

function plusMinus(arr) {
    let total = arr.length
    let positives=0;
    let negatives=0;
    let zeros=0;
    for (let i=0; i<total; i++) {
        let current = arr[i]
        if (current > 0) {
            positives++;
        } else if (current < 0) {
            negatives++;
        } else {
            zeros++;
        }
    }
    let outputArray = [positives, negatives, zeros]
    outputArray.forEach(num => console.log((num/total).toFixed(6)))
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

// version 2

function miniMaxSum(arr) {
    arr = arr.sort((a,b) => a-b)
    let minSum = arr.slice(0,4).reduce((a,b) => a+b)
    let maxSum = arr.slice(1,5).reduce((a,b) => a+b)
    console.log(minSum + ' ' + maxSum)
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

// version 2
function diagonalDifference(arr) {
    let LtR = 0;
    let RtL = 0;
    let length = arr.length
    for (let i=0; i<length; i++) {
        LtR = LtR + arr[i][i]
        RtL = RtL + arr[i][length-1-i]
    }
    return Math.abs(RtL - LtR)
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

// tower breakers - n towers of m height. each player acts optimally. return 1 if player 1 wins or 2 for player 2. 

function towerBreakers(n, m) {
    // Write your code here
if (m==1){
    return 2;
}
if (n%2==0){
    return 2;
}else{
    return 1;
}
}

// cipher alphabet = string s, shift k characters

function caesarCipher(s, k) {
    let outcome = []
    let shift = k % 26
    for (let i=0; i<s.length; i++) {
        let currentCharCode= s.charCodeAt(i)
        if (currentCharCode < 65) {
            outcome.push(s[i])
        } else if (65 <= currentCharCode && currentCharCode <= 90) {
            let newCapCharCode = currentCharCode+shift;
            if (newCapCharCode > 90) {
                newCapCharCode = newCapCharCode - 26
            } 
            let addLetter = String.fromCharCode(newCapCharCode)
            outcome.push(addLetter)
        } else if (90 < currentCharCode && currentCharCode < 97) {
            outcome.push(s[i])
        } else if (97 <= currentCharCode && currentCharCode <= 122) {
            let newCharCode = currentCharCode+shift;
            if (newCharCode > 122) {
                newCharCode = newCharCode - 26
            }
            let newLetter = String.fromCharCode(newCharCode)
            outcome.push(newLetter)
        } else {
            outcome.push(s[i])
        }
    }
    return outcome.join('')
}

// mock test 3: remove character and check for palindrome

function palindromeIndex(s) {
    // Write your code here
    if (checkPalindrome(s)) {
        return -1
    } else {
        for (let i=0; i<s.length; i++) {
            let newString = s.replace(s[i], '')
            if (checkPalindrome(newString)) {
                return i
            } 
        } 
        return -1
    }
    
    function checkPalindrome(string) {
    let stack = [];
    for (let i=string.length-1; i>=0; i--) {
        stack.push(string[i])
    }
    let backwards = stack.join('');
    if (string == backwards) {
        return true
    } else {
        return false
    }
    }

}

// square grid -> sort rows by alpha ascend. if columns are alpha ascend return 'YES'

function gridChallenge(grid) {
    let sorted = []
    for (let i=0; i<grid.length; i++) {
        sorted.push(bubblesort(grid[i]))
    }
    
    let columnsToCheck=[];
    for (let j=0; j<sorted.length; j++) {
        let column = []  
        for (let y=0; y<sorted.length; y++) {
            column.push(sorted[y][j])
        }
        columnsToCheck.push(column.join(''))
    }
    
    for (let i=0; i<columnsToCheck.length; i++) {
        if (!truthy(columnsToCheck[i])) {
            return 'NO'
        }
    }
    return 'YES'
    
    function bubblesort(element) {
    let elementArray = element.split('')
    for (let i =0; i<elementArray.length; i++) {
        for (let j=0; j<elementArray.length-1-i; j++) {
            if (elementArray[j] > elementArray[j+1]) {
                var temp = elementArray[j];
                elementArray[j] = elementArray[j+1];
                elementArray[j+1] = temp;
            }
        }
    }
    let outcome = elementArray.join('') 
    return outcome
    }
    
    function truthy(arr) {
        if (bubblesort(arr) == arr) {
            return true
        } else {
            return false
        }
    }
}

// super integer - add sum of digits in number until only one. provided with string of numbers and a variable p for the number of times its repeated

function superDigit(n, k) {
    let full = []
    for (let i=0; i<k; i++) {
        full.push(n)
    }
    full = full.join('')
    let numberArray = full.split('');
    
    let outcome;
    recursiveSummation(numberArray)
    
    function recursiveSummation(array) {
        let count=0;
        for (let i=0; i<array.length; i++) {
            let number = Number(array[i])
            count = count + number
        }
        let countArray = count.toString().split('')
        if (countArray.length >1) {
            recursiveSummation(countArray)
        } else {
            outcome = count
        }
    }
    
    return outcome
}
// above method timed out on long numbers. thus, perform summation function once and then multiply by k to save time. below function passed all tests

function superDigit(n, k) {
    let numberArray = n.split('');
    let initialoutcome;
    summation(numberArray)
    let initialoutcomeK = (initialoutcome * k).toString().split('')
    let outcome;
    recursion(initialoutcomeK)
    
    function summation(array){
        let count=0;
        for (let i=0; i<array.length; i++) {
            let number = Number(array[i])
            count = count + number
        }
        initialoutcome=count 
    }
    
    function recursion(array) {
        let count=0;
        for (let i=0; i<array.length; i++) {
            let number = Number(array[i])
            count = count + number
        }
        let countArray = count.toString().split('');
        if (countArray.length >1) {
            recursion(countArray)
        } else {
            outcome = count
        }
    }
    return outcome
}

// people in line; bribing person in front of them to switch. following code is inefficient and takes too long but works.

function minimumBribes(array) {
    let isSwapped = false
    let bribeCount = 0;
    let isChaos = false;
    for (let i=0; i<array.length; i++) {
        // console.log('array position: ' + i  + ' has value ' + array[i] )
        if ((array[i] - i) > 3) {
            isChaos = true;
        }
    }
    for (let i=0; i<array.length; i++) {
        isSwapped = false
        for (let y=0; y<(array.length-1-i); y++) {
            if (array[y] > array [y+1]) {
                var temp = array[y]
                array[y] = array[y+1]
                array[y+1] = temp
                bribeCount= bribeCount + 1;
                isSwapped = true
            } else {
                continue
            }
            // console.log('round' + y)
            if (!isSwapped) {
                break
            }
        }
    }
    if (isChaos) {
        console.log('Too chaotic')
    } else {
    console.log(bribeCount)
    } 
}

// idea 2; misses bribes if both out of OG position

function minimumBribes(array) {
    let bribeCount = 0;
    let isChaos = false;
    
    for (let i=0; i<array.length; i++) {
        // console.log('array position: ' + i  + ' has value ' + array[i] )
        let difference = (array[i] - (i+1)); 
        if (difference>2) {
            isChaos = true;
        } else if (difference > 0) {
        bribeCount = bribeCount + difference;
        }
    }
    
    isChaos ? console.log('Too chaotic') : console.log(bribeCount)
}

// idea 3; times out again

function minimumBribes(array) {
    let bribeCount = 0;
    let isChaos = false;
    
    for (let i=0; i<array.length-1; i++) {
        // console.log('array position: ' + i  + ' has value ' + array[i] )
        let difference = (array[i] - (i+1)); 
        if (difference>2) {
            isChaos = true;
            // break helps with time if we won't need bribe count anyway
            break;
        } 
        for (let y=i+1; y<array.length; y++) {
            if (array[i] > array[y]) {
                bribeCount += 1;
            }
        }
    }
    
    isChaos ? console.log('Too chaotic') : console.log(bribeCount)
}

// linkedList - sort 2 lists
function mergeLists(head1, head2) {
    // if one list does not exist, return the other list
    if (!head1) return head2
    if (!head2) return head1
    
    // compare the data at each head
    if(head1.data < head2.data){
        // if the data in head1 is less, return it. recursively call mergeList function with the next of head1 with the same head2
        return {"data": head1.data, "next": mergeLists(head1.next, head2)}
    }else{
        // else return data from head2; recursively call mergeList function with the same head1 and next head2
        return {"data": head2.data, "next": mergeLists(head1, head2.next)} 
    }
}

// version 2

function mergeLists(head1, head2) {
    // if one list does not exist, return the other list
    if (!head1) return head2
    if (!head2) return head1
    let data, A, B;
    // compare the data at each head
    if(head1.data < head2.data){
        A = head1.next;
        B = head2;
        data = head1.data
    } else {
        A = head1;
        B = head2.next;
        data = head2.data
    }
    return {"data": data, "next": mergeLists(A, B)}
}

// queue: add element to end, remove start element, print start element

function processData(input) {
    // identify number of queries - not actually using this because will just use length of query array below
    // let numQueries = input.split('\n')[0]
 
    // create array of queries   
    let queries = input.split('\n').slice(1)
    // console.log(queries)
    
    let queue = []; 
    
    for (let i=0; i<queries.length; i++) {
        let current = queries[i]
        let curArray = current.split(' ')
        if (curArray[0] == 1) {
            // console.log('enqueue ' + curArray[1])
            queue.push(curArray[1])
            // console.log('queue is ' + queue)
        } else if (curArray[0] == 2) {
            // console.log('dequeing ' + queue[0])
            queue.shift()
            // console.log('queue is ' + queue)
        } else {
            console.log(queue[0])
            // console.log('queue is ' + queue)
        } 
    }
} 

// ++++++++++++++++++++++++++++++++++++++++
// matching parenthesis

// version 1
function isBalanced(s) {
    while (s.includes('()')|| s.includes('{}') || s.includes('[]')) {
        s = s.replace('{}', '' )
        s = s.replace('[]', '')
        s = s.replace('()', '')
    }
    if (s.length == 0) {
        return 'YES'
    } else {
        return 'NO'
    }
}

// version 2 stack approach
function isBalanced(s) {
    let array = s.split('')
    let brackMatches = {
        '}' : '{',
        ']' : '[',
        ')' : '('
    }
    let closingBrack = ['}', ']', ')']
    let stack = [];
    for (let i=0; i<array.length; i++) {
        let current = array[i]
        if (closingBrack.includes(current)) {
            // return current
            let match = brackMatches[current]
            // return match
            if (stack.length == 0) {
                return 'NO'
            } else if (stack[stack.length -1] != match) {
                return 'NO'
            } else {
                stack.pop()
            }
        } else {
            stack.push(current)
        }
    }
    if (stack.length == 0) { 
        return 'YES'
    } else {
        return 'NO'
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// simple text editor draft 1 (doesnt pass all tests)

function processData(input) {
    var operations = input.split("\n")
    var numOps = parseInt(operations.splice(0, 1))
    // console.log(operations)
    // console.log(numOps)
    let S = ''
    let priorArray = []
    let opsPerformed =0; 
    let undosPerformed =0;
    let skipCount =0;
    for (let i=0; i<numOps; i++) {
        let currentString = operations[i]
        let OpNumber = currentString[0]
        let OpContent = currentString.slice(2)
        // console.log('Op Number is ' + OpNumber + ' and content is ' + OpContent)
        if (OpNumber == 1) {
            S = S.concat(OpContent);
            opsPerformed += 1;
            // console.log('operation type 1')
            // console.log('S now is ' + S)
        } else if (OpNumber == 2) {
            // console.log('operation type 2')
            let numConversion = parseInt(OpContent);
            opsPerformed += 1;
            priorArray.push(S);
            S = S.slice(0, (S.length - numConversion))
            // console.log('S now is ' + S)
        } else if (OpNumber == 3) {
            // console.log('operation type 3 - print only operation')
            let numberConversion = parseInt(OpContent)
            skipCount += 1;
            console.log(S[numberConversion - 1])
            // console.log('S now is ' + S)
        } else if (OpNumber == 4) {
            // console.log('operation type 4');
            let desiredOpNum = i - skipCount - (undosPerformed *2)
            let desiredOp = operations[desiredOpNum]
            // console.log('operation to undo ' + desiredOp)
            undosPerformed += 1; 
            if (desiredOp[0] == 1 ){ 
                let appended = desiredOp.slice(2)
                // console.log(appended.length + " characters to delete")
                S = S.slice(0, (S.length-appended.length))
                // console.log('S is now ' + S)
            } else if (desiredOp[0] == 2) {
                S = priorArray[priorArray.length-1];
                priorArray.pop();
                // console.log('S is now ' + S)
            }
            
        } 
    }
} 

// version 2 

function processData(input) {
    var operations = input.split("\n")
    operations.shift()
    let S = ''
    let priorStack = []
    for (let i=0; i<operations.length; i++) {
        let OpNumber = operations[i][0]
        let OpContent = operations[i].slice(2)
        switch (OpNumber){ 
            case '1':
                priorStack.push(S)
                S = S.concat(OpContent)
                break;
            case '2':
                priorStack.push(S)
                let numConversion = parseInt(OpContent);
                S = S.slice(0, (S.length - numConversion))
                break;
            case '3':
                let numberConversion = parseInt(OpContent)
                console.log(S[numberConversion - 1])
                break;
            case '4':
                S = priorStack.pop();
                break;
        }
    }
} 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// cookie sweetness - draft  = wrong answers
function cookies (k, A) {
    A = A.filter(value => value < k)
    A = A.sort(function(a,b){return b-a})
    if (A.length == 0) {
        return 0
    } else if ((A[0]*2 + A[1]) < k) {
        return -1
    } else {
        let operationsCount = 0;
        function recursive (A) {
            let numOne = A.pop()
            let numTwo = A.pop()
            A.push(numOne + numTwo*2)
            A = A.sort(function(a,b){return b-a})
            operationsCount += 1;
            while (A[A.length-1] < k) {
                if (A.length == 1) {
                    operationsCount = -1;
                } else {
                    recursive(A)
                }
            }
            return operationsCount
        }
        recursive(A)
        return operationsCount
    }
}

// runtime error = 55% correct

function cookies (k, A) {
    A = A.filter(value => value < k)
    if (A.length == 0) {
        return 0
    } else {
        A = A.sort(function(a,b){return b-a})
        let operationsCount = 0;
        function recursive (A) {
            let numOne = A.pop()
            let numTwo = A.pop()
            A.push(numOne + numTwo*2)
            A = A.sort(function(a,b){return b-a})
            operationsCount += 1;
            while (A[A.length-1] < k) {
                if (A.length == 1) {
                    operationsCount = -1;
                } else {
                    recursive(A)
                }
            return operationsCount
            }
        }
        recursive(A)
        return operationsCount
    }
}

// +++++++++++++=

// prefix check draft 1 fails 33

function noPrefix(words) {
    let badset = false;
    let foundWord;
    for (let i=0; i<words.length-1; i++) {
        // console.log('i = ' + words[i])
        for (let j=i+1; j<words.length; j++) {
            // console.log('j = ' + words[j])
            if (words[j].startsWith(words[i])) {
                foundWord = words[j];
                badset=true;
                break;
            }
        }
    }
    if (badset == false) {
        console.log('GOOD SET')
    } else {
        console.log('BAD SET')
        console.log(foundWord)
    }
}

// draft 2 fails 31

function noPrefix(words) {
    let badset = false;
    for (let i=0; i<words.length-1; i++) {
        // console.log('i = ' + words[i])
        for (let j=i+1; j<words.length; j++) {
            // console.log('j = ' + words[j])
            if (words[j].startsWith(words[i])) {
                badset=true;
                console.log('BAD SET')
                console.log(words[j])
                return;
            }
        }
    }
    if (badset == false) {
        console.log('GOOD SET')
    } 
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// mock test 2: flipping the matrix


function flippingMatrix(matrix) {
    let matLength = matrix.length
    let halfLength = matLength/2
    // reverse row
    let firstSum = 0;
    let secondSum = 0;
    for (let i=0; i<matrix.length; i++) {
        for (let y=0; y<halfLength; y++) {
            firstSum = firstSum + matrix[i][y]
        }
        for (let z=halfLength; z<matLength; z++) {
            secondSum = secondSum + matrix[i][z]
        }
    if (firstSum < secondSum) {
        matrix[i].reverse()
    }
        
    // reverse column
    let thirdSum = 0;
    let fourthSum = 0;
            for (let a=0; a<halfLength; a++) {
            firstSum = firstSum + matrix[a][0]
        }
        for (let b=halfLength; b<matLength; b++) {
            secondSum = secondSum + matrix[b][0]
        }
    if (thirdSum < fourthSum) {
// how to reverse a column????
    }
    }
    return matrix
}

// 1
// 2
// 107 54 128 15
// 12 75 110 138
// 100 96 34 85
// 75 15 28 112
// expected = 488

// 1
// 2
// 112 42 83 119
// 56 125 56 49
// 15 78 101 43
// 62 98 114 108
// expected = 414

// ________________________________________________________________________________________________
// ________________________________________________________________________________________________
// Algorithm section

function simpleArraySum(ar) {
    return ar.reduce((a,b)=> a+b)
}

// +++++++++++++++++++++++

function compareTriplets(a, b) {
    let alicePoints = 0;
    let bobPoints = 0;
    for (let i=0; i<a.length; i++) {
        if (a[i] > b[i]) {
            alicePoints++;
        } else if (a[i] < b[i]) {
            bobPoints++;
        }
    }
    let returnArray = [];
    returnArray.push(alicePoints)
    returnArray.push(bobPoints)
    return returnArray
}

// +++++++++++++++++++++++

function staircase(n) {
    for (let i=1; i<n+1; i++) {
        let outputString = ''
        let difference = n-i;
        let x=0;
        while (x < difference) {
            outputString = outputString + ' '
            x++
        }
        let y=0;
        while (y < i) {
            outputString = outputString + '#'
            y++
        }
        console.log(outputString)
    }
}

// simplified

function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(i).padStart(n));
    }
}

// +++++++++++++++++++++++

function birthdayCakeCandles(candles) {
    let max=0;
    for (let i=0; i<candles.length; i++) {
        if (candles[i]>max) {
            max = candles[i]
        }
    }
    let count = 0;
    for (let y=0; y<candles.length; y++) {
        if (candles[y] == max) {
            count++;
        }
    }
    return count
}

// with modern javascript

function birthdayCakeCandles(candles) {
    var max = Math.max(...candles);    
    var result = candles.filter(candle => candle === max);    
    return result.length;
}

// +++++++++++++++++++++++

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    countFruit(a, apples)
    countFruit(b, oranges)
    
    function countFruit (start, array) {
        let fruitCount = 0;
        for (let i=0; i<array.length; i++) {
            let landing = start + array[i]
            if (landing >= s && landing <= t) {
                fruitCount++
            }
        }
        console.log(fruitCount)
    }
}

// +++++++++++++++++++++++

function kangaroo(x1, v1, x2, v2) {
    // kangaroo one always starts behind
    // x1 rooOne start; v1 rooOne speed
    // x2 rooTwo start; v2 rooTwo speed
    let i=1; 
    let match=false;
    while (i<10001) {
        let rooOnePosition, rooTwoPosition;
        rooOnePosition = x1 + i*v1;
        rooTwoPosition = x2 + i*v2;
        if (rooTwoPosition == rooOnePosition) {
            match=true
            return 'YES'
        } else {
        i++
        }
    }
    if (match == false) {
        return 'NO'
    }
}

// +++++++++++++++++++++++

function getTotalX(a, b) {
    let aMax= a[a.length-1]
    let bMin = b[0]
    let count=0;
    for (let j=aMax; j<=bMin; j++) {
        if (a.every(int => ( j % int == 0 ))) {
            if (b.every(int => (int % j == 0 ))) {
                count++;
            }
        }
    }
    return count;
}
// +++++++++++++++++++++++
// +++++++++++++++++++++++
// +++++++++++++++++++++++
// +++++++++++++++++++++++
// +++++++++++++++++++++++
// +++++++++++++++++++++++
// +++++++++++++++++++++++