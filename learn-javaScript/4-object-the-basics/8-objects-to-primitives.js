let obj1 = {
  n: '1',
};

let obj2 = {
  n: '2',
};

obj1 - obj2; // NaN
obj1 + obj2; // "[object Object][object Object]"

/*************************************************************************/

let hintObj = {
  name: 'Hint object',
  count: 1400,

  [Symbol.toPrimitive](hint) {
    if(hint === 'string') return 'Resulting: ' + this.name;
    if (hint === 'number') return this.count / 2;
    if(hint === 'default') return this.count * 2;
  }
};

hintObj - 100; // 600 // "number" hint
'Hello World!' + hintObj; // "Hello World!Here is default: 2800" // "default" hint
alert(hintObj); // 'Resulting: Hint object'; // "string" hint

/*************************************************************************/

let user = {
  name: 'Harry',
  age: 30,

  toString() {
    return this.name + ' Potter';
  },

  valueOf() {
    return this.age + 0.5;
  },
};

user + 15; // 45.5
user - 15; // 15.5
String(user) // "Harry Potter"