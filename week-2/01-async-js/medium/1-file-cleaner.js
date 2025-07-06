

const fs = require('fs');
const path = require('path');


function cleanFiles(){
     const dir = __dirname;
    const filePath = path.join(dir, 'text.md');
     const data = fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
        console.error("Error reading file:", err);
        return;
        }

        console.log("File content before cleaning: ", data);
        const refineData =  data.replace(/ +/g, " ");
        // const refineData = data.split(' ').filter((word) => word !== '').join(' ');
        console.log(refineData);

        fs.writeFile(filePath, refineData, 'utf-8', (err) => {
            if (err) {
                console.error("Error writing file:", err);
                return;
            }
            console.log("File cleaned successfully!");
        });

     })
}

cleanFiles();