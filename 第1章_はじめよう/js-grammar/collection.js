(function () {
	'use strict';
	// const classes = ['A組', 'B組', 'C組', 'D組'];

	// for (var grade = 1; grade < 4; grade++) {
	// 	for (var i = 0; i < classes.length; i++) {
	// 		// <p>○年○組</p>という文字列を作る
	// 		document.write('<p>' + grade + '年' + classes[i] + '</p>');
	// 	}
	// }

	const name = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

	for (var i = 0; i < name.length; i++) {
		for (var j = 0; j < name.length; j++) {
			document.write('<p>' + name[i] + name[j] + '</p>');
		}
	}
})();
