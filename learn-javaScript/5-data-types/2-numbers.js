/* Task 1 */
let a = +prompt('Enter a:', 3);
let b = +prompt('Enter b:', 4);

alert(a + b);

/* Task 2 */
6.35.toFixed(20) // "6.34999999999999964473"

/* Task 3 */
function readNumber() {
  let userInput;
  do {
    userInput = prompt('Enter a number:', '');
    if (userInput === "" || userInput === null) return null; // better to move out of loop
  } while (isNaN(userInput));
  
  return +userInput;
}

readNumber();

/* Task 4 - no coding*/

/* Task 5 */
function random(min, max) {
  let range = max - min;
  return min + Math.random() * range;
}

random(1, 5);

/* Task 6 */
function random(min, max) {
  let range = max - min + 1;
  return Math.floor(min + Math.random() * range);
}

random(1, 5);