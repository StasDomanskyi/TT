/* Task 1 - no coding */

/* Task 2 - no coding */

/* Task 3 - no coding */

/* Task 4 */

for (let i = 2; i <= 10; i++) {
  if(i % 2 === 0) {
    alert(i);
  }
}

/* Task 5 */

let i = 0;

while (i < 3) {
  alert ( `number ${i}`);
  i++;
}

/* Task 6 */

while ( i <= 100 ) {
  let i = prompt('Enter the number', '50');

  if (i === null || i === '' || i > 100) break;
}

// Site solution 

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

/* Task 7 */

let n = prompt('What\'s n?', 13);

outer:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue outer;
  }

  console.log(i);
}
