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

// another method
function reverseArray(a) {
    let i = a.length-1;
    let newArray = [];
    while (i>=0) {
        newArray.push(a.pop())
        i--
    }
    return newArray
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

function gradingStudents(grades) {
    // if ends in 3-4, round up to 5; 
    // if ends in 8-9, round up to 10;
    let roundedGrades = []
    grades.forEach(grade => {
        if (grade < 38) {
            roundedGrades.push(grade)
        } else {
            if (grade % 5 == 3) {
                roundedGrades.push(grade+2)
            } else if (grade % 5 == 4) {
                roundedGrades.push(grade+1)
            } else {
                roundedGrades.push(grade)
            }
        }
    })
    return roundedGrades
}
// +++++++++++++++++++++++
function breakingRecords(scores) {
    let minimum = scores[0]
    let maximum = scores[0]
    let minBreakCount = 0;
    let maxBreakCount = 0;
    scores.forEach(score => {
        if (score < minimum){
            minimum = score;
            minBreakCount++;
        } else if (score > maximum) {
            maximum = score;
            maxBreakCount++
        }
    })
    let outcomeArray = [maxBreakCount, minBreakCount]
    return outcomeArray
}
// +++++++++++++++++++++++

function birthday(s, d, m) {
    let options = 0;
    for (let i=0; i<=s.length-m; i++) {
        let subBar = s.slice(i, i+m)
        if (subBar.reduce((a,b) => a+b) == d) {
                options++
        }
    }
    return options;
}

// +++++++++++++++++++++++

// note - problem unclear; sounds like first number in pair must be less than second but the example contradicts this
function divisibleSumPairs(n, k, ar) {
    let count=0;
    for (let i=0; i<n-1; i++) {
        for (let y=i+1; y<n; y++) {
            let total = ar[i] + ar[y]
            if (total % k == 0) {
                count++;
            }
        }
    }
    return count
}
// +++++++++++++++++++++++

// version 1 - runtime error on one example
function migratoryBirds(arr) {
    arr.sort((a,b) => a-b)
    let emptyCounter = [];
    arr.forEach(element => emptyCounter.push(0))
    arr.forEach(element => {
        emptyCounter[element-1]++
    })
    let maximumCount = Math.max(...emptyCounter)
    return emptyCounter.indexOf(maximumCount)+1
}

// version 2 = using object to decrease time
function migratoryBirds(arr) {
    arr.sort((a,b) => a-b)
    let trackingObject = {};
    arr.forEach(element => {
        if (!trackingObject[element]) {
            trackingObject[element] = 1
        } else {
            trackingObject[element]++
        }
    })
    const values = Object.values(trackingObject)
    let maximum = Math.max(...values)    
    return Object.keys(trackingObject).find(key => trackingObject[key] === maximum);
}


// +++++++++++++++++++++++
function dayOfProgrammer(year) {
    let leap; 
    // let yearArray = [31];
    // let February;
    // let MarchAndOn = [31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    if (1700 <= year && year <= 1917) {
        if (year%4 == 0) {
            leap = true
        } else {
            leap = false
        }
    } else {
        if (year%400 == 0 || (year%4 == 0 && year%100 != 0)) {
            leap = true
        } else {
            leap = false
        }
    }
    
    let outcome; 
    if (leap == true) {
        February = 29
        // day 256 = September 12th
        outcome = '12.09.' + year
    } else if (year == 1918) {
        February = 15
        // day 256 = September 26th
        outcome = '26.09.' + year
    } else {
        February = 28
        // day 256 = September 13th 
        outcome = '13.09.' + year
    }
    
    // yearArray.push(February)
    // yearArray.push(...MarchAndOn)
    // console.log(yearArray)
    return outcome
}
// +++++++++++++++++++++++

function bonAppetit(bill, k, b) {
    let modifiedBill = (bill.slice(0, k)).concat(...bill.slice(k+1))
    let splitShare = (modifiedBill.reduce((a,b) => a+b))/2
    let diff = b - splitShare;
    diff == 0 ? console.log('Bon Appetit') : console.log(diff)
}

// +++++++++++++++++++++++
function sockMerchant(n, ar) {
    let trackingObject = {};
    for (let i=0; i<ar.length; i++) {
        let color = ar[i]
        if (!trackingObject[color]) {
            trackingObject[color] = 1
        } else {
            trackingObject[color]++;
        }
    }
    const values = Object.values(trackingObject)
    let pairs=0;
    for (let y=0; y<values.length; y++) {
        let completePairs = Math.floor(values[y]/2)
        pairs += completePairs
    }
    return pairs
}

// +++++++++++++++++++++++
function pageCount(n, p) {
    let flipsFromFront;
    let flipsFromBack;
    if (p == 1) {
        return 0; 
    } else if (n == p) {
        return 0;
    } else {
        flipsFromFront = Math.floor(p/2)
        
        // if there is an even number of pages, there is a lonely back page and remainder is true
        let remainder = (n % 2 == 0)
        
        let temp = Math.floor((n-p)/2)
        if (remainder) {
            flipsFromBack = Math.ceil((n-p)/2)
        } else {
            flipsFromBack = Math.floor((n-p)/2)
        }
        
    }
    let outcome;
    (flipsFromBack > flipsFromFront) ? outcome = flipsFromFront : outcome = flipsFromBack
    return outcome
}

function pageCount(n, p) {
    const frontTurns = Math.floor(p / 2);
    const totalTurns = Math.floor(n / 2)
    return Math.min(frontTurns, totalTurns - frontTurns);
}
// +++++++++++++++++++++++
function countingValleys(steps, path) {
    let altitude=0;
    let valleyCount=0; 
    for (let i=0; i<path.length; i++) {
        if (path[i] == 'D') {
            altitude--;
        }
        if (path[i] == 'U') {
            altitude++;
        }
        if (altitude == 0 && path[i] == 'U') {
            console.log(path[i])
            valleyCount++;
        }
    }
    return valleyCount
}
// +++++++++++++++++++++++
// draft one
function getMoneySpent(keyboards, drives, b) {    
    let moneyLeft = [];
    keyboards.forEach(keyboard => {
        if (keyboard > b) {
            moneyLeft.push(0)
        } else {
            moneyLeft.push(b-keyboard)
        }
    })
    
    let leftOverMoney=[];
    moneyLeft.forEach(sum => {
        console.log(sum)
        drives.forEach(drive => {
            if (sum > drive) {
                leftOverMoney.push(sum-drive)
            }
        })
    })
    console.log(leftOverMoney)
    let outcome;
    
    (leftOverMoney.length == 0) ? outcome = -1 : outcome = b - Math.min(...leftOverMoney)
    
    return outcome
}

// version 2 runtime error
function getMoneySpent(keyboards, drives, b) { 
    let possibleSums = [];   
    keyboards.forEach(keyboard => {
        drives.forEach(drive => {
            possibleSums.push(keyboard+drive)
        })
    })
    console.log(possibleSums)
    if (Math.min(...possibleSums) > b) {
        return -1
    } else {
        possibleSums = possibleSums.filter(item => item < b)
        return Math.max(...possibleSums)
    }
    console.log(possibleSums)
}
// version 3 CORRECT
function getMoneySpent(keyboards, drives, b) { 
    let possibleSums = [];   
    keyboards.forEach(keyboard => {
        drives.forEach(drive => {
            let total = keyboard + drive
            if (total <= b) {
                possibleSums.push(total)
            }
        })
    })
    console.log(possibleSums)
    if (possibleSums.length == 0) {
        return -1
    } else {
        return Math.max(...possibleSums)
    }
}

// +++++++++++++++++++++++
function catAndMouse(x, y, z) {
    let catA = Math.abs(z-x);
    let catB = Math.abs(z-y);

    if (catA > catB) {
        return 'Cat B'
    } else if (catB > catA) {
        return 'Cat A'
    } else {
        return 'Mouse C'
    }
}
// +++++++++++++++++++++++
function pickingNumbers(a) {
    let collectorArray = []
    for (let i=0; i<a.length-1; i++) { 
        let thisNumberTotal = a.filter(int => (int == a[i])).length
        let plusOneTotal = a.filter(int => (int == (a[i]+1))).length
        let minusOneTotal = a.filter(int => (int == (a[i]-1))).length
        collectorArray.push(thisNumberTotal + plusOneTotal)
        collectorArray.push(thisNumberTotal + minusOneTotal)
    }
    return Math.max(...collectorArray)
}
// +++++++++++++++++++++++
function hurdleRace(k, height) {
    let max = Math.max(...height)
    let difference = max - k
    if (difference <= 0) {
        return 0
    } else {
        return difference
    }
    
    
    // first solution - if problem were to take one dose per every extra 1 needed
    // let alteredArray = height.map(int => int - k)
    // alteredArray = alteredArray.filter(num => num > 0)
    // if (alteredArray.length == 0) {
    //     return 0
    // } else {
    // return alteredArray.reduce((a,b) => a+b)
    // }
}
// +++++++++++++++++++++++
function designerPdfViewer(h, word) {
    let conversionArray = []; 
    for (let i=0; i<word.length; i++) {
        let charCode = word.charCodeAt(i)-97
        conversionArray.push(charCode)
    }
    let heightArray = conversionArray.map(num => h[num])
    let maxHeight = Math.max(...heightArray);
    let outcome = maxHeight * word.length;
    return outcome
}
// +++++++++++++++++++++++

// draft 1 - takes too long on several test cases
function climbingLeaderboard(ranked, player) {
    let rankings = [];
    for (let i=0; i<player.length; i++) {
        let tieCount = 0;
        let thisRanking; 
        for (let y=0; y<ranked.length; y++) {
            if (y != 0 && ranked[y] == ranked[y-1]) {
                tieCount++;
            }
            if (y== 0 && player[i] == ranked[y]) {
                thisRanking = y+1
                rankings.push(thisRanking)
                break;
            } else if (player[i] == ranked[y]) {
                thisRanking = y+1 - tieCount;
                rankings.push(thisRanking)
                break;
            } else if (player[i] > ranked[y]) {
                thisRanking = y+1 - tieCount;
                rankings.push(thisRanking)
                break;
            } else if (y == ranked.length-1) {
                thisRanking = y+2 - tieCount;
                rankings.push(thisRanking)
                break;
            } else {
                continue
            } 
        }
    }
    return rankings
}


// +++++++++++++++++++++++
// utopian tree
function utopianTree(n) {
    let height = 1;
    for (let i=1; i<n+1; i++){
        if (i%2 == 0){
            height=height+1
        }else {
            height=height*2
        }
    }
    return height
}
// +++++++++++++++++++++++
// viral advertising
function viralAdvertising(n) {
    let initialAdd=5;
    let shared=0;
    let totalDayShares=0;
    for (let i=1; i<=n; i++){
        if (i==1){
            let addLikes = Math.floor(initialAdd/2);
            totalDayShares = addLikes*3;
            shared += addLikes;
        } else {
            let addLikes = Math.floor(totalDayShares/2);
            totalDayShares = addLikes*3;
            shared += addLikes;
            
        }
    }
    return shared;
}
// +++++++++++++++++++++++
// +++++++++++++++++++++++
// +++++++++++++++++++++++
// +++++++++++++++++++++++


// SQL PROBLEMS

// Query all columns for all American cities in the CITY table with populations larger than 100000. The CountryCode for America is USA.
// SELECT * FROM CITY WHERE POPULATION > 100000 AND COUNTRYCODE = 'USA'

// Query the NAME field for all American cities in the CITY table with populations larger than 120000. The CountryCode for America is USA.
// SELECT NAME FROM CITY WHERE COUNTRYCODE = 'USA' AND POPULATION > 120000

// Query all columns (attributes) for every row in the CITY table.
// SELECT * FROM CITY

// Query all columns for a city in CITY with the ID 1661.
// SELECT * FROM CITY WHERE ID = 1661

// Query all attributes of every Japanese city in the CITY table. The COUNTRYCODE for Japan is JPN.
// SELECT * FROM CITY WHERE COUNTRYCODE = 'JPN';

// Query the names of all the Japanese cities in the CITY table. The COUNTRYCODE for Japan is JPN.
// SELECT NAME FROM CITY WHERE COUNTRYCODE = 'JPN';

// Query a list of CITY and STATE from the STATION table.
// SELECT CITY, STATE FROM STATION;

// Query a list of CITY names from STATION for cities that have an even ID number. Print the results in any order, but exclude duplicates from the answer.
// SELECT DISTINCT(CITY) FROM STATION WHERE MOD(ID,2)=0

// Find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.
// SELECT COUNT(CITY) - COUNT(DISTINCT(CITY)) FROM STATION 

// Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.
// SELECT CITY, length(CITY) FROM STATION ORDER BY length(CITY)ASC, CITY ASC LIMIT 1;
// SELECT CITY, length(CITY) FROM STATION ORDER BY length(CITY)DESC, CITY ASC LIMIT 1

// Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.
// SELECT DISTINCT(CITY) FROM STATION WHERE CITY LIKE 'A%' OR CITY LIKE 'E%' OR CITY LIKE 'I%' OR CITY LIKE 'O%' OR CITY LIKE 'U%'

// Query the list of CITY names ending with vowels (a, e, i, o, u) from STATION. Your result cannot contain duplicates.
// SELECT DISTINCT(CITY) FROM STATION WHERE CITY LIKE '%A' OR CITY LIKE '%E' OR CITY LIKE '%I' OR CITY LIKE '%O' OR CITY LIKE '%U'

// Query the list of CITY names from STATION which have vowels (i.e., a, e, i, o, and u) as both their first and last characters. Your result cannot contain duplicates.
// SELECT city
// FROM station
// WHERE (
//    LOWER(city) LIKE 'a%' 
//    OR LOWER(city) LIKE 'e%' 
//    OR LOWER(city) LIKE 'i%' 
//    OR LOWER(city) LIKE 'o%' 
//    OR LOWER(city) LIKE 'u%'
// )
// AND (
//    LOWER(city) LIKE '%a' 
//    OR LOWER(city) like '%e' 
//    OR LOWER(city) LIKE '%i' 
//    OR LOWER(city) LIKE '%o' 
//    OR LOWER(city) LIKE '%u'
// );