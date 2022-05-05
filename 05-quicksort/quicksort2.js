// this method is not an in-place sort

arr = [4,8,5,7,1,6,10,2,3,9]


const sleep = milliseconds => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds)

function quicksort(arr) {
  p = arr[Math.floor(Math.random() * arr.length)]
  let less = []
  const equals = []
  let greater = []
  arr.forEach(e => {
    if (e < p) less.push(e)
    if (e === p) equals.push(e)
    if (e > p) greater.push(e)
  });
  if (less.length > 1) less = quicksort(less)
  if (greater.length > 1) greater = quicksort(greater)
  return less.concat(equals, greater)
}
const sorted = quicksort(arr)
console.log(sorted)
console.log(performance.now())