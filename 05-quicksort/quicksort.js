// this method cannot handle duplicate values

arr = [4,8,5,7,1,6,10,2,3,9]

const sleep = milliseconds => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds)

function quicksort(arr) {
  let i = 0
  let j = arr.length-1
  partition(arr, i, j)
}

function partition(arr, i, j) {
  const iStart = i
  const jStart = j
  const p_idx = Math.floor(Math.random() * (j-i+1)) + i
  // console.log(`p_idx: ${p_idx}`)
  p = arr[p_idx]
  // console.log(`NEW PARTITION p: ${p}, [i,j]: [${i},${j}], [${arr}]`)
  while (i != j) {
    while (arr[i] < p) {
      i++
    }
    while (arr[j] > p) {
      j--
    }
    // // console.log(`p: ${p}, [i,j]: [${i},${j}], [${arr}]`)
    let old_i_value = arr[i]
    arr[i] = arr[j]
    arr[j] = old_i_value
    // sleep(100)
  }
  if (jStart-iStart <=  1) return

  if (i > iStart + 1) partition(arr, iStart, i - 1)
  if (i < jStart - 1) partition(arr, i + 1, jStart)
}
quicksort(arr)
console.log(arr)
console.log(performance.now())