const { performance } = require('perf_hooks');

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

start = performance.now();
const reversed1 = story.split("").reverse().join("");
console.log(reversed1+'\n')
console.log(`.reverse() took ${performance.now() - start} milliseconds to run` + '\n');

start = performance.now();
const reversed2 = () => {
  let output = ''
  for (ch of story) output = ch + output
  return output
}
console.log(reversed2()+ '\n')
console.log(`Loop took ${performance.now() - start} milliseconds to run`);