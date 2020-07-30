/* Task 1 */

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

sumSalaries(salaries);

function sumSalaries(salaries) {
  let result = 0;

  for (let value of Object.values(salaries)) {
    result += value;
  }

  return result;
}

/* Task 2 */

let user = {
  name: 'John',
  age: 30
};

count(user);

function count(obj) {
  return Object.keys(obj).length;
}