function* gen() {
  let x = yield 2;
  console.log(x);
}

let generator = gen();
console.log(generator.next().value);
generator.next(5);

let obj = {
  from: 0,
  to: 5,
  *[Symbol.iterator]() {
    for (let i = this.from; i < this.to; i++) {
      yield i;
    }
  }
};

[...obj]; // [0, 1, 2, 3, 4]

