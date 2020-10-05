const fs = require('fs');
const path = require('path');

export function rFile(fileName) {
	fs.readFile(__filename, 'utf-8', (err, file) => {
		if (err) {
			console.log('error: ', err);
			return
		}
	});
}

export function wFile(fileName) {
	fs.writeFile(path.join(__dirname, './output.txt'), 'Hello\nWorld\n!', (err) => {
		if (err) {
			console.log('error: ', err);
			return
		}
		console.log ('done!');
	});
}