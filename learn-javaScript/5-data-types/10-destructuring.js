/* Task 1 */
let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user;

/* Task 2 */
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

topSalary(salaries);

function topSalary(salaries) {
  let topName, max;

  for (let [key, value] of Object.entries(salaries)) {
    if ( !max || max < value) {
      max = value;
      topName = key;
    }
  }

  return max ? topName : null;
}