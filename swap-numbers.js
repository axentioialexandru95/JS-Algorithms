function swapNumb(a, b){
  console.log('before swap: ','a: ', a, 'b: ', b);
  b = b - a;
  a = a + b;
  b = a - b;
  console.log('after swap: ','a: ', a, 'b: ', b);
}

swapNumb(6, 4)

function swapNumb(a, b){
  console.log('before swap: ','a: ', a, 'b: ', b);
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log('after swap: ','a: ', a, 'b: ', b);
}

swapNumb(6, 4)
