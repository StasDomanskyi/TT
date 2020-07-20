/* Task 1 - no coding */

/* Task 2*/

function Calculator() {
  this.read = function() {
    this.a = +prompt('a?', 3);
    this.b = +prompt('b?', 4);
  }

  this.sum = function() {
    return this.a + this.b;
  }
  
  this.mul = function() {
    return this.a * this.b;
  }
};

let calculator = new Calculator();
calculator.read();
calculator.sum();
calculator.mul();

/* Task 3 */

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt('value?', 3);
  };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

accumulator.value;