(function(){
	'use strict';

	// const age = 19;
	// const result = (age >= 20) ? '成年' : '未成年';
	// document.write(result);

	const age = 20;
	const is_female = true;

	if(age <= 15){
		document.write('800円');
	}
	else if(is_female){
		document.write('1000円');
	}
	else{
		document.write('1800円');
	}
})();
