(function () {
	'use strict';
	var startTime = null;

	function start() {
		startTime = new Date().getTime();
		document.body.onkeypress = stop;
		console.log('スタートしました');
	}

	function stop() {
		console.log('ストップしました');
	}

	if (confirm('OKを押して10秒だと思ったら何かキーを押してください')) {
		start();
	}
})();
