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

    return {
      next() {
        return count <= to ? {
          done: false,
          value: count++,
        } : {
          done: true,
        };
      },
    };
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
  alert(a + b);
}

function spy(func) { 
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.call(this, ...args); // if to use apply() we can avoid spread ...
  }

  wrapper.calls = [];
  return wrapper;
}

work = spy(work);
work(1,2);
work(4,5);

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

/* Task 2 */
function f(x) {
  alert(x);
}

function delay(f, ms) {
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test");

/* Task 3 */
function debounce(f, ms) {
  let lastCallTime;
  let lastArgs;
  let timer;

  return function(...args) {
    lastArgs = args;
    clearTimeout(timer);
    timer = setTimeout(() => f.apply(this, args), ms);
    return f.apply(this, args);
  }
}

let f = debounce(alert, 1000);

f("a");
setTimeout( () => f("b"), 200);
setTimeout( () => f("c"), 500);

/* Task 4 */
function f(a) {
  console.log("Here is", a);
}

function throttle(f, ms) {
  let lastArgs = [];
  let lastEffectiveCallTime;
  let lastCall;
  let timer;
  let diff;

  return function(...args) {  
    if (!lastEffectiveCallTime) {
      diff = 0;
      console.log("first from here");
      lastCall = Date.now();
      lastEffectiveCallTime = Date.now();
      return f.apply(this, args);
    }
    
    if (diff <= ms) {
      clearTimeout(timer);
      lastArgs.length = 0;
      lastArgs.push(...args);
      console.log("Args", args);     
      diff = lastCall - lastEffectiveCallTime;
      timer = setTimeout(() => {
        console.log("hi from settimeout");
        console.log("ms - diff", ms - diff);
        diff = 0;
        f.apply(this, lastArgs);
        lastEffectiveCallTime = Date.now();
        lastCall = Date.now(); 
      }, ms - diff);
    }    
  }
}

let f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);