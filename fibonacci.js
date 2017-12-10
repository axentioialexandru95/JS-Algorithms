function fibonaccis(n){
  var fibo = [0, 1];

  if (n <= 2) return 1;

  for (var i = 2; i <=n; i++ ){
   fibo[i] = fibo[i-1]+fibo[i-2];
  }

 return fibo[n];
}

// test
function fibonacciss(n) {
  var fibo = [0,1];

  if (n <= 2 ) return 1;

  for (var i = 2; i <= n; i++) {
    fibo[i] = fibo[i-1]+fibo[i-2];
  }
  return fibo[n];
}


console.log(fibonaccis(6))

// Recursive function
function fibonacci(n){
  if(n<=1)
    return n;
  else
    return fibonacci(n-1) + fibonacci (n-2);
}

console.log(fibonacci(6));
