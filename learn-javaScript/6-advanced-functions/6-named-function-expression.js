/* Task 1 */
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = function(val) {
    count = val;
  }

  counter.decrease = function() {
    count--;
  }

  return counter;
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

counter.set(10); // set the new count

alert( counter() ); // 10

counter.decrease(); // decrease the count by 1

alert( counter() ); // 10 (instead of 11)

/* Task 2 */
let sum = function func(num) {     
  func.result = 0;

  function next(i) {
    func.result += i;
    return next;
  }

  next[Symbol.toPrimitive] = (hint) => {
    return func.result;
  };
  
  return next(num);
}; // removed a lot of abundant code blocks that doubles logic but were dead indead

+sum(1)(2)(5)(7);
