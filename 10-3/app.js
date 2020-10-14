//refactor ES5 into ES2015 Code
//ES5 Map Callback
function double(arr){
    return arr.map(function(val){
        return val * 2;
    });
}

//es2015 Arrow Functions Shorthand
const double = arr => arr.map(val => val * 2);

//refactor following function to use arrow functions: 
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
}

//refactored version: 
const squareAndFindEvensRefactor = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);

