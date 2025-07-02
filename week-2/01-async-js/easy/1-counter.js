
let count = 0;

const fn = () => {
  count++;
  console.log(count);
}

const intervalId = setInterval(fn, 1000);