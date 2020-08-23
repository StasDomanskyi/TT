/* Task 1 */
/* function printNumbers(from, to) {
  let i = from;
  let timerId = setInterval(() => {
    if(i > to) {
      clearInterval(timerId);
      return;
    }

    alert(i++);
  }, 1000);
} */

function printNumbers(from, to) {
  let i = from;

  let timerId = setTimeout(function next() {
    if (i > to) {
      clearTimeout(timerId);
      return;
    }

    alert(i++);
    timerId = setTimeout(next, 1000);
  }, 1000);
}

printNumbers(3, 10);

/* Task 2 - no coding */
