(function () {
	'use strict';

	const myBirthTime = new Date(2001, 1, 1, 12, 0);	// 適当な日付

	function updateParagraph() {
		const now = new Date();
		const seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
		document.getElementById('birth-time').innerText = '生まれてから' + seconds + '秒経過。';
	}

	setInterval(updateParagraph, 100);
})();
