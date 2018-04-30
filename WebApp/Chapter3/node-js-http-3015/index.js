'use strict';

const http = require('http');
const jade = require('jade');
const server = http.createServer((req, res) => {
	const now = new Date();
	console.info('[' + now + '] Requested by ' + req.connection.remoteAddress);
	res.writeHead(200, {
		'Content-Type': 'text/html; charset=utf-8'
	});

	switch (req.method) {
	case 'GET':
		res.write(jade.renderFile('./form.jade', {
			path: req.url,
			firstItem: '焼き肉',
			secondItem: 'しゃぶしゃぶ'
		}));
		res.end();
		break;
	case 'POST':
		let body = [];
		req.on('data', (chunk) => {
			body.push(chunk);
		}).on('end', () => {
			body = Buffer.concat(body).toString();
			const decoded = decodeURIComponent(body);
			console.info('[' + now + '] 投稿: ' + decoded);
			res.write('<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8"></head><body><h1>'
				+ decoded + 'が投稿されました。</h1></body></html>');
			res.end();
		});
		break;
	}
}).on('error', (e) => {
	console.error('[' + new Date() + '] Server Error', e);
}).on('clientError', (e) => {
	console.error('[' + new Date() + '] Client Error', e);
});

const port = 8000;
server.listen(port, () => {
	console.info('[' + new Date() + '] Listening on ' + port);
});
