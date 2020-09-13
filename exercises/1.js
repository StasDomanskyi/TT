const obj = {
  a: {
    b: {
      c: {
        d: 5
      }
    }
  }
};

get(obj, 'a.b.c.d'); // 5
get(obj, 'a'); // {}

function get(obj, path) {
  let rest = obj;
  let objKeys = path.split('.');
  objKeys.reverse();
    
  do {
    let x = objKeys.pop();
    
    if (x in rest) {
      rest = rest[x];
    } else {
      return null;
    }
  } while(objKeys.length)
    
  return rest; 
}