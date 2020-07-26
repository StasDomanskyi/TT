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


/* Task 7 */

/* Task 8 */

/* Task 9 */