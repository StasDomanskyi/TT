let array = [1, 2, 3, 4, 10, 11];

function simpleArraySum(arr) {
  return arr.reduce((sum, current) => sum + current);
}

simpleArraySum(array);