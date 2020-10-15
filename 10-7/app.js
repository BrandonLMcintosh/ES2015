//Maps and Sets exercise
//Quick question 1: 
//What does the following code return?
new Set([1,1,2,2,3,4])
//Answer: {1,2,3,4}

//Quick question 2: 
//What does the following code return?
const word = new Set('referee')
const combined = [...word].join('');
//Answer: 'ref'

//Quick question 3: 
//What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//Answer: 
/*
0: {Array(3) => true}
1: {Array(3) => false}
*/

//hasDuplicate
//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length;

//vowelCount
//Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string
const vowelCount = str => {
    const strMap = new Map();
    for(let char of str){
        char = char.toLowerCase();
        if ('aeiou'.includes(char)){
            strMap.has(char) ? strMap.set(char, strMap.get(char) + 1) : strMap.set(char, 1);
        }
    }
    return strMap;
}