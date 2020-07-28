let arr = [1, 2, 3, 4, 5];

arr.some(item => item  == 3); // true
arr.every(item => item > 0); // true
arr.reduce((acc, item) => acc + item, 4); // 19
arr.reduceRight((acc, item) => acc + item, 4); // 19

arr.fill('la', 1, 3); // [1, "la", "la", 4, 5] - modifies current array, end is not inclusive
arr.splice(1, 2, 2, 3); // [1, 2, 3, 4, 5]; - modifies array
let slicedArr = arr.slice(1, 3); // [2, 3]
let newArr = slicedArr.concat(51, 52, 99, 53, [97, 98, 99]); // [2, 3, 51, 52, 99, 53, 97, 98, 99]
arr.reverse(); // [5, 4, 3, 2, 1]

// sort example
arr.push(6, 7, 8, 9, 10);
arr.sort(); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
arr.sort((a,b) => a - b); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.splice(5, 5);

// sort, splice, reverse, fill modify array

let foo = (a,b) => a + b;
Array.isArray(foo); // false

// indexOf, lastIndexOf
newArr.indexOf(99); // 4
newArr.lastIndexOf(99); // 8
newArr.includes(53); // true

newArr.find(item => !(item % 33)); // 99 returns item
newArr.findIndex(item => !(item % 33)); // 4
newArr.filter(item => !(item % 2)); // [2, 52, 98] returns filtered array 

arr.forEach(item => console.info('Show tab ' + item));

let mappedArr = arr.map(item => item * 2); // [2, 4, 6, 8, 10]

let stringList = "Jerry, Johny, Max, Wilson, Richard, Carl, Benjamin";
let arrFromString = stringList.split(", "); 
// ["Jerry", "Johny", "Max", "Wilson", "Richard", "Carl", "Benjamin"]

let newStringList = arrFromString.join(" | "); 
// "Jerry | Johny | Max | Wilson | Richard | Carl | Benjamin"

arrFromString.copyWithin(1, 4, 6); // replaced all from pos 1 with copies of 4 an 5 pos (6 not included)
// ["Jerry", "Richard", "Carl", "Wilson", "Richard", "Carl", "Benjamin"]

let complexArr = [1, 2, [3, 4, [5, 6]]];
let flatArr = complexArr.flat(2); // [1, 2, 3, 4, 5, 6] - arg 2 is depth of flattening

let arr1 = ["it's Sunny in", "", "California"];
arr1.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]
arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "California"]


/* Task 1 */
function camelize(str) {
  let wordsArr = str.split("-");
  let uppercasedWords = wordsArr.slice(1).map(item => item[0].toUpperCase() + item.slice(1));
  return wordsArr[0] + uppercasedWords.join("");
}

camelize("background-color");
// solution from site
/* function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
} */

/* Task 2 */
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b); // (a <= item && item <= b) - looks better
}

filterRange(arr, 1, 4);

/* Task 3 */
let arr2 = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i <arr.length; i++) {
    if (arr[i] >= a && arr[i] <=b) continue;

    arr.splice(i, 1);
    i--; // need not to jump over shifted item
  }
}

filerRangeInPlace(arr2, 1, 4);

/* Task 4 */
let arr = [5, 2, 1, -10, 8];

arr.sort((a,b) => b - a);

/* Task 5 */
let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort();
}

copySorted(arr);

/* Task 6 */
function Calculator() {
  this.operators = ["+", "-"]; // can be key names for storing methods in objects
  
  this.handlers = [
    function(a, b) {
      return a + b;
    },
    function(a, b) {
      return a - b;
    },
  ];

  this.calculate = function(str) {
    let expression = str.split(" ");
    let a = +expression[0];
    let b = +expression[2];
    let operationIndex = this.operators.findIndex(item => item === expression[1]);
    let result = this.handlers[operationIndex](a, b);

    return result;
  };

  this.addMethod = function(mark, func) {
    this.operators.push(mark);
    this.handlers.push(func);
  };
}

let calc = new Calculator();

alert( calc.calculate("3 + 7") );

/* Task 7 */
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

/* Task 8 */
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(item => {
  return ({
    fullName: item.name + " " + item.surname,
    id: item.id,
  });
});

usersMapped;

/* Task 9 */
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

function sortByAge(arr) {
  arr.sort((a,b) => a.age - b.age);
}

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

/* Task 10 */
let arr = [1, 2, 3, 4, 5];

function shuffle(arr) {
  let multiplier = arr.length;
  let orders = [];
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let val = Math.floor(Math.random() * multiplier);
    if (orders.includes(val)){
      i--;
      continue;
    }
    orders.push(val);
  }

  for(let j = 0; j < orders.length; j++) {
    newArr.push(arr[orders[j]]);
  }

  arr.length = 0;
  arr = arr.push(...newArr);
}

shuffle(arr);

/* Task 11 */
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let users = [ john, pete, mary ];

function getAvarageAge(users) {
  let summaryAge = users.reduce((acc, current) => acc + current.age, 0);
  return +(summaryAge / users.length).toFixed(2);
}

getAvarageAge(users);

/* Task 12 */
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
  let result = [];

  for(let item of arr) {
    if (result.includes(item)) continue;
    result.push(item);
  }

  return result;
}

unique(strings);

/* Task 13 */
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

function groupById(arr) {
  let container = {};

  for (let item of arr) {
    container[item.id] = item;
  }

  return container;
}

/* function groupById(arr) {  // solutiomn from site
  return arr.reduce((obj, item) => {
    return obj[item.id] = item;
  });
} */