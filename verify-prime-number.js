function isPrime(n) {
  // Divisor
  var divisor = 2;

  // As long as the number is bigger than 2
  while(n > divisor){
    // And if the number divisible by 2 == 0
    if(n % divisor == 0){
      // Then return false
      return false;
    }
    // Else
    else {
      // Increments the divisor
      divisor++;
    }
    // Otherwise, return true
    return true;
  }
}

// This will give the answer of undefined
console.log(isPrime(2));

// False
console.log(isPrime(4));

// True
console.log(isPrime(5));

// False
console.log(isPrime(12));
console.log(isPrime(24));
