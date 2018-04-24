//HOF practice

//intro to HOFs
//rewrite functions
//iterating over arrays
var square = x => x * x;
var square = x => x * x;
var cube = x => x * x * x;
var fullname = (first, last) => `${first} ${last}`;
var power = (base, exp) => exp === 0 ? 1 : base * power(base, exp -1);
var sumCubes = numbers => numbers.reduce((total, num) => total += cube(num));
//var each = (array, func) => array.forEach(elem => func(elem));
var sumSquares = numbers => numbers.reduce((total, num) => total += square(num));
var sumCubes = numbers => numbers.reduce((tot, num) => tot += cube(num));
var product = numbers => numbers.reduce((tot, num) => tot *= num);
var cubeAll = numbers => numbers.map(num => cube(num));
var odds = numbers => numbers.filter(num => num%2 === 1);

//more practice
//summations
var sumByAllElementsMultipliedByFour = numbers => numbers.reduce((tot, num) => tot += num) * 4;
var sumBy = (numbers, func) => numbers.reduce((tot, num) => tot += func(num));
var productBy = (numbers, func) => numbers.reduce((tot, num) => tot *= func(num));

//advanced
var doubleAll = numbers => numbers.map(num => num *2);
var halveAll = numbers => numbers.map(num => num/2);
var uppercaseAll = strings => strings.split().map(char => char.toUpperCase());
var map = (array, func) => array.map(x => func(x));
var lowercaseAll = strings => strings.split().map(char => char.toLowerCase());

//advanced #6
map(["hello", "world"], uppercaseAll);
map(['HelLo', 'WorLD'], lowercaseAll);
var people = [
  {name: "Alyssa P. Hacker", age: 26},
  {name: "Ben Bitdiddle", age: 34},
  {name: "Eva Lu Ator", age: 19},
  {name: "Lem E. Tweakit", age: 40}
];
map(people, person => `${person.name}`);
map(people, person => `${person.name} is ${person.age}`);

//finding patters: filtering
var evens = numbers => numbers.filter(num => num%2 === 0);
var multiplesOfThree = numbers => numbers.filter(num => num%3 === 0);
var positives = numbers => numbers.filter(num => num > 0);
var evenLength = strings => strings.filter(string => string.length%2 === 0);
// var filter = (array, f) => {
//   var passed = [];
//   each(array, elem => {
//     if(f(elem) === true){
//       passed.push(elem);
//     }
//   });
//   return passed;
// }
var largerThanSix = numbers => filter(numbers, num => num > 6);
var startsWithChar = (array, char) => filter(array, word => word[0] === char);
var words = "the quick brown fox jumps over the lazy dog".split(" ");
startsWithChar(words, "q");
startsWithChar(words, "t");

//HOFs 2
//basic requirements
var indexedExponentials = numbers => numbers.map((num, i) => num ** i);
indexedExponentials([2, 5, 7, 4]);

var evenIndexedOddNumbers = numbers => numbers.filter((num, i) => num%2 === 1 && i%2 === 0);
evenIndexedOddNumbers([1, 3, 3, 4, 7, 10]);

var evenIndexedEvenLengths = strings => strings.filter((string, i) => string.length%2 === 0 && i%2 ===0);
evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"]);
evenIndexedEvenLengths(["red", "green", "purple", "blue", "yellow"]);

//exercises -each objects
function each(coll, func){
  if(Array.isArray(coll)){
    for(var i = 0 ; i < coll.length; i++){
      func(coll[i], i);
    }
  } else {
    for(var key in coll){
      func(coll[key], key);
    }
  }
}

//basic requirements
var values = obj => obj.values();
var keys = obj => obj.keys();

var keysLongerThan = (obj, num) => {
  var result = {};
  each(obj, function(key, value){
    if(key.length > num && value.length > num)
    result[key] = value;
  });
  return result;
}

keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 3);
keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 4);

var incrementValues = (obj) =>{
  var result = {};
  each(obj, (value, key)=>{
    if(typeof value === 'number'){
      result[key] = ++value;
    } else{
      result[key] = value; 
    }
  })
  return result;
}

//exercises-filter
//basic requirements
//rewrite filter to work with objects
function filter(obj, predicate) {
  if(Array.isArray(obj)){
    var acc = [];
    each(obj, function(element) {
      if (predicate(element)) {
        acc.push(element);
      }
    });
  return acc;
  } else {
    var result = {};
    each(obj, function(value, key){
      if(predicate(value)){
        result[key] = value;
      }
    });
    return result;
  }
}

filter({a: 1, b: "dog", c: true}, function(value) {
  return typeof value === "number";
});




//HOF3
//exercises-map
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function ages(people) {
  return map(people, function(person) {
    return person.age;
  });
}

var firstNames = people => people.map(person => person.name.first);
var lastNames = people => people.map(person => person.name.last);
var fullNames = people => people.map(person => `${person.name.first} ${person.name.middle} ${person.name.last}`);

var abs = x => x >= 0 ? x : -x;
map([1,-2,37,-100,-8,5], abs);

// var maximums = arrayMatrix => {
//   var maxArr = [];
//   arrayMatrix.forEach(array => {
//     var max = 0;
//     array.forEach(elem => {
//       if(elem > max){
//         max = elem;
//       }
//     });
//     maxArr.push(max);
//   })
//   return maxArr;
// }

var sampleInput = [ // it's an array
  [1, 3, 2], // of arrays of numbers
  [4, 23, 100],
  [7, 6, 3, -2]
];


var max = numbers => {
  return numbers.reduce((max, num)=> num > max ? num : max)
}
max([1, 3, 2]);
max([4, 23, 100]);

var maximums = array => array.map(num => max(num));
maximums(sampleInput);

//more practice
var exponentials = numbers => numbers.map((num) => num**num);
exponentials([1,2,3,4]);
exponentials([3, 2, 5]);

var reverse = string => string.split('').reverse().join('');;

var pluck = (array, keyString) => array.map(person => person[keyString])
pluck(people, "age");

var peopleCSV = "Alyssa,P.,Hacker,26\nBen,,Bitdiddle,34\nEva,Lu,Ator,40\nLem,E.,Tweakit,45\nLouis,,Reasoner,21";
var parseCSV = people => {
  var namesplit = people.split('\n')
  return namesplit.map(person => {
    var properties = person.split(',');
    if(properties[1] === ''){
      return {name:{first: properties[0], last: properties[2]}, age: properties[3]}
    } else {
      return {name:{first: properties[0], middle: properties[1], last: properties[2]}, age: properties[3]}
    }
  });
}


1.Disclaimer: This problem is very difficult! Write a function called map2 that accepts two
 arrays and a function as arguments, and constructs a new array by invoking its function 
 argument on the elements of both arrays, e.g.:


function each(coll1, coll2, f) {
  if (Array.isArray(coll1) && Array.isArray(coll2) ) {
    for (var i = 0; i < coll1.length; i++) {
      f(coll1[i], coll2[i], i);
    }
  } else {
    for (var key in coll1) {
      f(coll1[key], coll2[key], key);
    }
  }
}

function map2(arr1, arr2, f) {
  if(Array.isArray(arr1) && Array.isArray(arr2)) {
    var acc = [];
  } else {
    acc = {};
  }
  
  each(arr1, arr2, function(element1, element2, i) {
    acc[i] = (f(element1, element2));
  });
  return acc;
}

map2([1, 2, 3], [4, 5, 6], function(a, b) {return a * b;});
// => [4, 10, 18]

//{a:2, b:3, c:4}, {a:2, b:3, c:4},


//2.Now, write a function called mapN that accepts an arbitrary number of arrays and a n-ary function as arguments, and constructs a new array by combining the elements of all the arrays, e.g.:

function each(coll1, coll2, coll3, f) {
  if (Array.isArray(coll1) && Array.isArray(coll2) && Array.isArray(coll3) ) {
    for (var i = 0; i < coll1.length; i++) {
      f(coll1[i], coll2[i], coll3[i]);
    }
  //} else {
  //  for (var key in coll) {
  //    f(coll[key], key);
  //  }
  }
}



function mapN(arr1, arr2, arr3, f) {
var acc = [];
  each(arr1, arr2, arr3, function(element1, element2, element3) {
    acc.push(f(element1, element2, element3));
  });
  return acc; 
}

mapN([1, 2, 3], [4, 5, 6], [2, 2, 2], function(a, b, c) {
  return (a * b) + c;
});
// => [6, 12, 20]

//mapN([1, 2, 3], function(x) { return x * x; }) // => [1, 4, 9]