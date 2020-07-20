let first = Symbol("first symbol");
first.toString();

let second = Symbol("first symbol");
second.toString();
second.description;

second == first // false

let user = {
  name: 'Jack',
  [first]: 'value for symbol',
};

user[second] = 'value for another symbol';

user[Symbol('first symbol')]; // undefined
user[second]; // 'value for another symbol'

for (let key in user) console.info(key); // name
Object.keys(user); // ["name"]

let foreignUser = Object.assign({}, user); 
foreignUser; // {name: "Jack", Symbol(first symbol): "value for symbol", Symbol(first symbol): "value for another symbol"}


/* Global Symbols */

let glOne = Symbol.for('The global symbol');
let glTwo = Symbol.for('The global symbol');
let glThree = Symbol.for('Absolutely different');

let local = Symbol('The global symbol'); // local indeed

glOne === glTwo; // true

local === glOne; // false

Symbol.keyFor(glTwo) // "The global symbol"

/*********************************************************/

function Constructor(name, age) {
  this.name = name;
  this.age = age;
  this[Symbol.toPrimitive] = function(hint) {
    return hint === "number" ? this.age : this.name;
  };
}

let instance = new Constructor("John", 30);
alert(instance);