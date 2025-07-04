let count = 0;

const counter = () => {
  console.log(count++);
  setTimeout(counter, 1000);
}

// this is the counter function 
counter();