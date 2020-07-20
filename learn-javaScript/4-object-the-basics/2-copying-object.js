let user = {
  name: "john",
  age: 30,
  bro: {
    name: "Bill",   //  if copy with Object.assign it copies a link to the same object
  },
};

let auto = {
  mark: "Audi",
  year: 2007,
  age: 34,
};

let newObj = Object.assign({}, user, auto);
newObj;

// NO ready solution for deep cloning