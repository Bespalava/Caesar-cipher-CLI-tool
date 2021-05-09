const {dataTransformation} = require('./transform.js');
const {getOutputFile, getInputFile, validateArgs} = require('./args.js');
validateArgs(); 
dataTransformation(getInputFile(), getOutputFile());
