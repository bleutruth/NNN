(function () {
	'use strict';

	const oneDay = 60 * 60 * 24;	// 1日の秒数
	const myBirthTime = new Date(2001, 1, 1, 12, 0);	// 適当な日付

	function updateParagraph() {
		const now = new Date();
		const day = (now.getTime() - myBirthTime.getTime()) / (oneDay * 1000);
		document.getElementById('birth-time').innerText = '生まれてから' + day + '日経過。';
	}

	setInterval(updateParagraph, 100);
})();
