/* Task 1 - no coding */

/* Task 2 - no coding */

/* Task 3 - no coding */

/* Task 4 - no coding */

/* Task 5 - no coding */

/* Task 6 */

let age = Number(prompt('What is the age?', '13'));

if ( age >= 14 && age <= 90) {
  alert('Accepted');
} else {
  alert('Failed');
}

/* Task 7 */

let age = Number(prompt('What is the age?', '13'));

if (age < 14 && age > 90) {
  alert('Accepted');
} else {
  alert('Failed');
}

// Other variant

let age = Number(prompt('What is the age?', '13'));

if (!(age >= 14 && age <= 90)) {
  alert('Accepted');
} else {
  alert('Failed');
}

/* Task 8 - no coding */

/* Task 9 */

let login = prompt('Who\'s there?', 'Admin');

if (!login) {
  alert('Canceled');
} else if (login == 'Admin') {
  let password = prompt('Password?', 'TheMaster');

  if (!password) {
    alert('Canceled');
  } else if (password == 'TheMaster') {
    alert('Welcome!');
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don\'t know you');
}
