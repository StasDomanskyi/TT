let promise1 = new Promise((resolve,reject) => {
	setTimeout(() => resolve(1), 200);
}); 
let promise2 = new Promise((resolve,reject) => {
	setTimeout(() => resolve(2),600);
});
let promise3 = new Promise((resolve,reject) => {
	setTimeout(() => resolve(3), 400);
}); 

let promises = [promise1, promise2, promise3];

let final = promises.reduce((acc, val, i) => {
  return acc.then((data) => {
    return val.then((valueData) => {
    	console.log(`Promise no ${i} fullfilled`);
      data[i] = valueData;
      return data;
    });
  });
}, Promise.resolve({}));