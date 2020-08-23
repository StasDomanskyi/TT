let arr = [1,2,3];
let str = "Daft Punk";
let set = new Set(['Hello', 'World']);
let map = new Map([
  ["first", "I"],
  ["second", "am"],
  ["third", "Groot"],
]);

let iterable = {
  from: 1,
  to: 10,

  [Symbol.iterator]() {
    let count = this.from;
    let to = this.to;

    return ({
      next() {
        return count <= to ? {
          done: false,
          value: count++,
        } : {
          done: true,
        };
      },
    });
  },
};

/* for (let i of iterable) {
  console.log(i);
} */

function a() {
  console.log(arguments);
}

// a.call(null, ...arr);
// a.call(null, ...str);
// a.call(null, ...set);
// a.call(null, ...map);
// a.call(null, ...iterable);

let arr = [1,2,3];
let arrLike = {
  0: "Hello",
  1: "dear",
  2: "World",
  sayHi() {
    return this[0] + " " + this[2];
  },
  length: 3,
}
// a.apply(null, arr);
a.apply(null, arrLike);

/* Task 1 */
function work(a, b) {
  alert(a, b);
}

function spy(func) {
  
}

work(4,5);

/* Task 2 */

/* Task 3 */

/* Task 4 */
