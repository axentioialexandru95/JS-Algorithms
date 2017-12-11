function removeDuplicate(arr) {
  var exists = {},
      outArr = [],
      elm;

  for (var i = 0; i < arr.length; i++) {
    elm = arr[i];
    if(!exists[elm]){
      outArr.push(elm);
      exists[elm] = true;
    }
  }
  return outArr;
}


console.log(removeDuplicate([2,2,2,4,5,7,8,8,8]));
