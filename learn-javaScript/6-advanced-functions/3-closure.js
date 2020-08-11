/* Task 1 - no coding */

/* Task 2 - no coding */

/* Task 3 - no coding */

/* Task 4 - no coding */

/* Task 5 - no coding */

/* Task 6 */
function sum(a) {
  return function(b) {
    return a + b;
  }
}

sum(4)(5);

/* Task 7 - no coding */
let x = 1;

function func() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 2;
}

func();

/* Task 8 */
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return function(element) {
    return a <= element && element <= b;
  }
}

function inArray(arr) {
  return function(element) {
    return arr.includes(element);
  }
}

arr.filter(inBetween(3, 6));

/* Task 9 */
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName) {
  return function(a, b) {
    return a[fieldName] > b[fieldName] ? 1 : -1;
  }
}

users.sort(byField('name'));
users.sort(byField('age'));


/* Task 10 */
function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function() { // shooter function
      alert( i ); // should show its number
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // the shooter number 0
army[5](); // and number 5