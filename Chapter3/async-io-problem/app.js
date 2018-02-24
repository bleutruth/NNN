'use strict';

const fs = require('fs');
const fileName = './test.txt';

for (let i = 0; i < 500; i++) {
	fs.appendFile(fileName, 'あ', 'utf8');
	fs.appendFile(fileName, 'い', 'utf8');
	fs.appendFile(fileName, 'う', 'utf8');
	fs.appendFile(fileName, 'え', 'utf8');
	fs.appendFile(fileName, 'お', 'utf8');
	fs.appendFile(fileName, '\n', 'utf8');
}
