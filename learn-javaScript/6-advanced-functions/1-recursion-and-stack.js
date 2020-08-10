/* Task 1 */
function sumTo(n) {
  let sum = (1 + n) * n / 2;
  return sum;
}

/* function sumTo(n) {
  return n == 1 ? n : n + sumTo(n-1);
} */

/* function sumTo(n) {
  let sum = 0;

  for(let i = 0; i <= n; i++) { // better to start from 1 avoid excesive iteration
    sum += i;
  }

  return sum;
} */

sumTo(9);

/* Task 2 */
function factorial(n) {
  return n == 1 ? 1 : n * factorial(n - 1);
}

factorial(5);

/* Task 3 */
function fib(n) { 
  let current = 0;
  let previous = 0;

  function recursiveFib(n) {
    if (n == 1) {
      current = 1;
      return current;
    }
    
    recursiveFib(n - 1);
    [previous, current] = [current, current + previous];
    return current;
  }

  return recursiveFib(n);
}

fib(77);

/* Task 4 */
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

/* function printList(list) {
  let current = list;
  do {
    alert(current.value);
    current = current.next;
  } while(current);
} */

function printList(list) {
  alert(list.value);
  if (list.next instanceof Object) { // the object itself is truthy
    printList(list.next);
  }
}

printList(list);

/* Task 5 */
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  let current = list;
  let values = [];
  do {
    values.push(current.value);
    current = current.next;
  } while(current);

  
  for (let i = values.length - 1; i >= 0; i--) {
    alert(values[i]);
  }
}

/* function printList(list) {
  if (list.next) {
    printList(list.next);
  }

  alert(list.value);
} */

printList(list);