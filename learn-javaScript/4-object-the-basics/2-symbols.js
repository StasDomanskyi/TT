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
