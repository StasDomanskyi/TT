let arr1 = ["test1", "test2", "Johny", "Cash", "test1", "test2"];
let names = ['Stephan', 'Joe', 'Michael','Joe', 'Michael', 'Rachel'];
let arr2 = [1, 2, 3, 4, 1, 1];

function getUnique(arr) {
  let initialArr = arr.slice();
  let result = [];
   
  while(initialArr.length) {
    let currentItemArr = initialArr.splice(0, 1);
    let matchingPosition = initialArr.indexOf(currentItemArr[0]);
    
    if(!~matchingPosition) {
      result.push(currentItemArr[0]);
      continue;
    }

    do {
      initialArr.splice(matchingPosition, 1);
      matchingPosition = initialArr.indexOf(currentItemArr[0]);
    } while (~matchingPosition);       
  }
  return result;
}

function getUnique(arr) {
  const result = [];

  for(let i = 0; i < arr.length; i++) {   
    const current = arr[i];
    const position = i !== arr.length - 1 ? arr.indexOf(current, i + 1) : -1;
    const previousPosition = i !== 0 ? arr.lastIndexOf(current, i - 1) : -1;
    
    if (!~position && !~previousPosition) result.push(current);        
  }
  return result;
}

getUnique(arr1);
