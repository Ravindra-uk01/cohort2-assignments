const fs = require("fs");
const path = require("path");

function readFile() {
  for(let i=0; i<100000000; i++){};
  fs.readFile(path.join(__dirname, "1-counter.md"), "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log(data);
  });
}

readFile();
