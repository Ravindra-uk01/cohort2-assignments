
let count = 0;

const fn = () => {
  count++;
  console.log(count);
}

// this is interval Id 
const intervalId = setInterval(fn, 1000);