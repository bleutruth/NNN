'use strict';

const fs = require('fs');
const readline = require('readline');
const rs = fs.ReadStream('./popu-pref.csv');
const rl = readline.createInterface({ 'input': rs, 'output': {} });
rl.on('line', (lineString) => {
	const columns = lineString.split(',');
	const year = parseInt(columns[0]);
	const prefecture = columns[2];
	const popu = parseInt(columns[7]);
	if((year === 2010) || (year === 2015)){
		console.log(year);
		console.log(prefecture);
		console.log(popu);
	}
});
rl.resume();
