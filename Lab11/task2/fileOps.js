const fs = require('fs');
const fileName = 'example.txt';

console.log("Starting file operations...");

fs.writeFile(fileName, 'Hello, this is the initial content.\n', (err) => {
    if (err) return console.error('Error writing file:', err);
    console.log('File created successfully.');

    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) return console.error('Error reading file:', err);
        console.log(`Read content: ${data}`);

        fs.appendFile(fileName, 'Adding a new line of text.\n', (err) => {
            if (err) return console.error('Error appending file:', err);
            console.log('Data appended successfully.');

            fs.readFile(fileName, 'utf8', (err, updatedData) => {
                if (err) return console.error('Error reading file:', err);
                console.log(`Updated content:\n${updatedData}`);

                fs.unlink(fileName, (err) => {
                    if (err) return console.error('Error deleting file:', err);
                    console.log('File deleted successfully. Cleanup complete.');
                });
            });
        });
    });
});