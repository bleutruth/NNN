(function () {
	'use strict';

	const header = document.getElementById('header');
	var deg = 0;

	function rotateHeader() {
		deg += 6;
		header.style.transform = 'rotateX(' + deg + 'deg)';
	}
	setInterval(rotateHeader, 20);
})();
