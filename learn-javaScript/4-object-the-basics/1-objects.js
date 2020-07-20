/* Task 1 */
let user  = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

/* Task 2 */
let schedule = {};

function isEmpty(obj) {
  for (let key in obj) {
    if (key) return false;
  }
  
  return true;
}

  // Site solution
  /* function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  } */

isEmpty(schedule);

/* Task 3 */
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

sum;

/* Task 4 */
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
menu;
