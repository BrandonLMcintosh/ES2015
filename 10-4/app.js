//given this function
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  //refactor it to use the rest operator & an arrow function: 

const filterOutOddsNew = (...nums) => nums.filter(num => num % 2 === 0);

//write a function called findMin that accepts a variable number of arguments and returns the smallest argument. Make sure you do this using the rest and spread operator. 
const findMin = (...args) => Math.max(...args);

//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({...obj1,...obj2});

console.log(mergeObjects({a:1,b:2},{c:3,d:4})); //{a: 1, b: 2, c: 3, d: 4}

//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
//The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => [...arr,...args.map(num => num * 2)];

console.log(doubleAndReturnArgs([1,2,3],4,4));

//Slice and Dice

//For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

//Make sure that you are always returning a new array or object and not modifying the existing inputs.

const removeRandom = items => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
}

/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

/** Return a new object with a key removed. */
const removeKey = (obj,key) => {
    delete obj[key];
    return obj
}


/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => ({...obj1, ...obj2});

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => ({...obj, [key]: value});



