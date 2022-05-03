Number.prototype.isPrime = function() {
  squareRoot = Math.sqrt(this)
  for( let i=2; i<=squareRoot; i++ ) {
    if( this % i === 0 ) {
      return false;
    }
  }
  return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e5 ) {
  if( num.isPrime() ) {
    primeCount++;
  }
  num++;
}
// console.log(`The 10,000th prime number is ${num-1}`); // 104,729
console.log(`The 100,000th prime number is ${num-1}`); //1,299,709
// console.log(`The 1,000,000th prime number is ${num-1}`); // 15,485,863
console.log(`This took ${performance.now() - start} milliseconds to run`);