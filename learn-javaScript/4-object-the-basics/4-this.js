let user = {
  name: 'John',
  showUser() {
    this.name = this.name.toUpperCase();

    (() => {
      this.surname = 'Conor';
    })();   
    
    return this;
  },
};

user.showUser();

/* Task 2 */

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

/* Task 3 */

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
