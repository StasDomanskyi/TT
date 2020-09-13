let obj = {
  a: 95,
  b: 120,

  [Symbol.iterator]() {
    let start = this.a + 2;
    let end = this.b + 2;

    return {
      next() {
        return start <= end ? {value: String.fromCharCode(start++), done: false} : {done: true};
      }
    };
  }
};

[...obj];