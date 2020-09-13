let arr = ["Hello", "World", "in", "a", "frame"];

function logWords(arr) {
    let maxWordLength = 0;
    let final = [];
    
    arr.forEach((item) => {
        if (item.length > maxWordLength) {
            maxWordLength = item.length;
        }
    });

    let width = maxWordLength + 6;

    let edgeLine = new Array(width);
    edgeLine = edgeLine.join('*');
    

    final.push(edgeLine);
    
  for (let item of arr) {
    let word = [];
    let difference = width - item.length;
    let roundedEdge = Math.floor((difference - 2) / 2);
    let first = '*' + new Array(roundedEdge).join(" ");
    word.push(first);
    word.push(item);
    let last = new Array(roundedEdge).join(" ") + '*';
    word.push(last);

    let stringWord = word.join('');
    final.push(stringWord);
  }
    
  final.push(edgeLine);

  final.forEach((item) => {
    console.log(item);
  });
}

logWords(arr);