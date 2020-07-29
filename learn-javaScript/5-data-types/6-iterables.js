let obj = {
  from: "A",
  to: "Z",
};

obj[Symbol.iterator] = function() {
  return {
    currentCharCode: this.from.codePointAt(0),
    last: this.to.codePointAt(0),

    next() {
      return this.currentCharCode <= this.last ? {
        done: false, value: String.fromCodePoint(this.currentCharCode++),
      } : {
        done: true,
      };
    }
  }
}

for(let item of obj) {
  console.info(item);
}

let arr = Array.from(obj); 
/* ["A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z"] 
*/
