const fs = require("fs");
const path = require("path");

function writeFile() {
  fs.writeFile(path.join(__dirname, "1-counter.md"), "Your content here ","utf-8", (err, data) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log(data);
  });
}

writeFile();
