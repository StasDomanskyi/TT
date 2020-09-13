getValue([1, 2, 4 , 8], [3, 6, 4, 4]) // [[1,6, 4, 4], [3, 2, 4, 8]] 

function getEven(arr) {
  const evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if ( i % 2 !== 0) {
      evenArr.push(arr[i]);
    }
  }
  
  return evenArr;
}

function mixValues(initial, evens) {
  const newArray = [];
  for (let i = 0; i < initial.length; i++) {
    if (i % 2 !== 0) {
      newArray.push(evens.shift());
    } else {
      newArray.push(initial[i]);
    }
  }
  return newArray;
}

function getValue(...args) {
  if(typeof args[0] === 'number' && typeof args[1] === 'number' ) {
    return args[0] * args[1];
  } else if(typeof args[0] === 'string' && typeof args[1] === 'string' ) {
    return args[0] + args[1];
  } else if (Array.isArray(args[0]) && Array.isArray(args[1])) { 
    const evenFirst = getEven(args[0]);
    const evenSecond = getEven(args[1]);
    
    const mixedFirst = mixValues(args[0], evenSecond);
    const mixedSecond = mixValues(args[1], evenFirst);
    
    return [mixedFirst, mixedSecond];
  } else {
    let sortedArr = [args[0].s,  args[1].s];
    
    return sortedArr.sort((a, b) => {
      return a - b;
    });
  }
}