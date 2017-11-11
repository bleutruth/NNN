(function () {
	'use strict';

	const header = document.getElementById('header');
	var deg = 0;

	function rotateHeader() {
		deg += 6;
		deg %= 360;
		if (((deg >= 0) && (deg < 90)) || ((deg >= 270) && (deg < 360))) {
			header.className = 'face';
		}
		else {
			header.className = 'back';
		}
		header.style.transform = 'rotateX(' + deg + 'deg)';
	}
	setInterval(rotateHeader, 20);
})();
