let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 200);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 600);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 400);
});

let promises = [promise1, promise2, promise3];
let final;

let getFinalPromise = () => {
  promises.reduce((acc, current, i) => {
    return acc.then((accData) => {
      return current.then((currentData) => {
        console.log(currentData);
        accData[`promise${i}`] = currentData;
        return accData;
      });
    });
  }, Promise.resolve({}))
  .then((res) => {
    final = res;
  });
};

getFinalPromise();

console.log('hi');