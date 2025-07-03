const fs = require("fs");
const path = require("path");

function writeFile() {

  // writeFile is an asynchronous function that writes data to a file.
  // It takes a callback function that handles the result of the write operation.
  fs.writeFile(path.join(__dirname, "1-counter.md"), "Your content here ","utf-8", (err, data) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log(data);
  });
}

writeFile();
