let user = {
  name: 'Ilya',
  hi() {
    (() => {
      console.info(this.name);
    })();
  }
};

user.hi();

/* Task 1 - no coding */

/* Task 2 - no coding */

/* Task 3 - no coding */

/* Task 4 */

let calculator = {
  read() {
    this.a = +prompt('a?', 5);
    this.b = +prompt('b?', 4);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
};

calculator.read();
calculator.sum();
calculator.mul();

/* Task 5 */

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};
