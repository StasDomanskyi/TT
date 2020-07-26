/* Task 1 - no coding */

/* Task 2 */
let styles = ["Jazz","Blues"];
styles.push("Rock-n-Roll");

let styles1 = ["Jazz","Blues", "hiphop", "chill", "house"];

let middle = Math.floor(styles.length / 2);
console.log('middle', middle);
styles.splice(middle, 1, "Classics");
styles.shift();
styles.unshift("Rap","Reggae");

/* Task 3 - no coding */

/* Task 4 */
function sumInput() {
  let numbers = [];
  let sum = 0;
  let current;

  do {
    current = prompt('Enter the number:', 1);
    if (current != "" && current != null && !isNaN(current)) {
      numbers.push(+current);
    }
  } while (current != "" && current != null && !isNaN(current));

  for (let numb of numbers) {
    sum += numb;
  }

  return sum;
}

sumInput();

/* function sumInput() { // solution from site
  let numbers = [];

  while (true) {
    let value = prompt("A number please?", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
} */

/* Task 5 */
/* 
let arr = [1, -2, 3, 4, -9, 6]; // 7
let arr = [-1, 2, 3, -9];
let arr = [2, -1, 2, 3, -9];
let arr = [-1, 2, 3, -9, 11];
let arr = [-2, -1, 1, 2];
let arr = [100, -9, 2, -3, 5];
let arr = [1, 2, 3];
let arr = [-1, -2, -3]; 
*/
let arr = [-1, -2, -3]; 

function getMaxSubSum(arr) {
  let maxSum = 0;
  let currentSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    currentSum = 0;
    let basicArr = arr.slice(i);
    for (let j = 0; j < basicArr.length; j++) {
      currentSum += basicArr[j];

      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }

  return maxSum;
}

getMaxSubSum(arr);