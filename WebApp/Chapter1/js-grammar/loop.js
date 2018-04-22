(function () {
	'use strict';
	// for (var i = 1; i <= 100000; i++) {
	// 	document.write(i + ' ');
	// }

	for (var i = 1; i <= 1000; i++) {
		if (i % 15 === 0) {
			document.write('FizzBuzz, ');
		}
		else if (i % 5 === 0) {
			document.write('Buzz, ');
		}
		else if (i % 3 === 0) {
			document.write('Fizz, ');
		}
		else {
			document.write(i + ', ');
		}
	}
})();
