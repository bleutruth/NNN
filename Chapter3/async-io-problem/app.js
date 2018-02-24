'use strict';

const fs = require('fs');
const fileName = './test.txt';

for (let i = 0; i < 500; i++) {
	fs.appendFileSync(fileName, 'あ', 'utf8');
	fs.appendFileSync(fileName, 'い', 'utf8');
	fs.appendFileSync(fileName, 'う', 'utf8');
	fs.appendFileSync(fileName, 'え', 'utf8');
	fs.appendFileSync(fileName, 'お', 'utf8');
	fs.appendFileSync(fileName, '\n', 'utf8');
}
