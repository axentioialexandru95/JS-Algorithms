function reverse(str){
  if(!str || str.length <2) return str;

  return str.split('').reverse().join('');
}

console.log(reverse('Hello motto'))

function reverse(str) {
  var rtnStr = [];

  if(!str || typeof str != 'string' || str.length < 2) return str;

  for(var i = str.length-1; i>=0; i--){
    rtnStr.push(str[i]);
  }
  return rtnStr.join('');
}

console.log(reverse('Hello Alex'))
