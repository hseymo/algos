//function that performs same task as .split();

const string = "I love tobias so very much he is the cutest cat"

function stringToArray(s){
    let myArray = [];
    let currentword = '';
    for (let i=0; i<s.length; i++){
        if (s[i] != ' '){
            currentword += s[i]
        } else {
            myArray.push(currentword);
            currentword = '';
        }
    }
    console.log(myArray)
}

stringToArray(string)