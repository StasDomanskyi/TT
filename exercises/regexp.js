let reg = new RegExp(`ja`, `g`);
let str = "Jack loves java";

let result = str.match(reg);
result; // ["Ja", "ja"]

// str.replace(reg, "la"); // "lack loves lava"
str.replace(reg, "$& cackes"); // /ja/g = "Jack loves ja cackesva"
str.replace(reg, "$` cackes"); // /ja/g = "Jack loves Jack loves  cackesva"
str.replace(reg, "$` cackes"); // /ja/g = "Jack loves va cackesva"
reg.test(str); // true