const { program } = require('commander');

program

  .option('-s, --shift-type <type>', 'a shift')
  .option('-i, --input-type <type>', 'an input file')
  .option('-o, --output-type <type>', 'an output file')
  .option('-a, --action-type <type>', 'encode/decode');
 
program.parse(process.argv);
 
if (program.shiftType) { var shift = program.shiftType; }
if (program.inputType) { var inputFile = program.inputType; }
if (program.outputType) { var outputFile = program.outputFileType; }
if (program.actionType == 'decode') { shift = - shift; }

module.exports.shift = shift;
module.exports.inputFile = inputFile;
module.exports.outputFile = outputFile;

