const stream = require('stream');
const fs = require('fs');
const path = require('path');
const cli = require('./cli');
var should = require('should').noConflict();
var chai = require('chai');
const Caesar = require('caesar-salad').Caesar;

if (cli.inputFile) {
	const pathToRead = path.join(__dirname, cli.inputFile);
	var input = fs.createReadStream(pathToRead);
}
else {
	var input = process.stdin;
}

if (cli.outputFile) {
	const pathToWrite = path.join(__dirname, cli.outputFile);
	var output = fs.createWriteStream(pathToWrite);
}
else {
	 output = process.stdout;
}
 
// Caesar.Cipher(cli.shift).crypt(input) - need to use !!!

class Transformer extends stream.Transform {
    _transform(data, encoding, callback) {
        this.push(data.toString())
        callback();
    }
}

const transform = new Transformer();

input.pipe(transform).pipe(output);