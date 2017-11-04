(function () {
	'use strict';
	var startTime = null;
	const displayArea = document.getElementById('display-area');

	function start() {
		startTime = new Date().getTime();
		document.body.onkeypress = stop;
		// console.log('スタートしました');
	}

	function stop() {
		// console.log('ストップしました');
		const currentTime = new Date().getTime();
		const seconds = (currentTime - startTime) / 1000;
		if ((seconds >= 9.5) && (seconds <= 10.5)) {
			displayArea.innerText = seconds + '秒でした。すごい。';
		}
		else {
			displayArea.innerText = seconds + '秒でした。残念。';
		}
	}

	if (confirm('OKを押して10秒だと思ったら何かキーを押してください')) {
		start();
	}
})();
