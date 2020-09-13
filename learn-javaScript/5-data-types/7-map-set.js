/* Task 1 */
function unique(arr) {
  let set = new Set();

  for(let value of arr) {
    set.add(value);
  }
  return Array.from(set.values());
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

unique(values);

/* function unique(arr) { //solution from site
  return Array.from(new Set(arr));
} */

/* Task 2 */
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

aclean(arr);

function aclean(arr) {
  let set = new Set();
  let result = [];

  for (let item of arr) {
    let word = item.toLowerCase().split("").sort().join("");

    if (set.has(word)) continue;
    set.add(word);
    result.push(item);
  }
  
  return result;
} // better to solve through the map

/* Task 3 - no coding */
