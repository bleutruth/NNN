(function () {
	'use strict';
	var startTime = null;

	function start() {
		startTime = new Date().getTime();
		console.log('スタートしました');
	}

	if (confirm('OKを押して10秒だと思ったら何かキーを押してください')) {
		start();
	}
})();
