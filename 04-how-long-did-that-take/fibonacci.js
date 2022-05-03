const { performance } = require('perf_hooks');

// recursive
function rFib( n ) {
  if ( n < 2 ) {
    return n;
  }
  return rFib( n-1 ) + rFib( n-2 );
}

let start = performance.now();
console.log(rFib(45))
console.log(`Recursive took ${performance.now() - start} milliseconds to run`);

// iterative
function iFib( n ) {
  const vals = [ 0, 1 ];
  while(vals.length-1 < n) {
    let len = vals.length;
    vals.push( vals[len-1] + vals[len-2] );
  }
  return vals[n];
}

start = performance.now();
console.log(iFib(45))
console.log(`Iterative took ${performance.now() - start} milliseconds to run`);

// in this case, recursive is far less efficient