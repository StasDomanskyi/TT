let arr1 = ["test1", "test2", "Johny", "Cash", "test1", "test2"];
let arr2 = [1, 2, 3, 4, 1, 1];

function getUnique(arr) {
  let initialArr = arr.slice();
  let result = [];
  
  
    while(initialArr.length) {
      let currentItemArr = initialArr.splice(0, 1);
      console.log('currentItem', currentItemArr[0]);
      let matchingPosition = initialArr.indexOf(currentItemArr[0]);
      
      if(!~matchingPosition) {
        result.push(currentItemArr[0]);
        console.log('initialArr w/o', initialArr);
        continue;
      }

      do {
        initialArr.splice(matchingPosition, 1);
        console.log('initialArr', initialArr);
        matchingPosition = initialArr.indexOf(currentItemArr[0]);
      } while(matchingPosition !== -1);       
  }

  return result;
}

getUnique(arr1);