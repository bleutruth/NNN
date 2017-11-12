(function () {
	'use strict';

	const answers = [
		'{userName}のいいところは声です。{userName}の特徴的な声はみなを惹きつけ、心に残ります。',
		'{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
		'{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
		'{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
		'{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
		'{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
		'{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
		'{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
		'{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
		'{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
		'{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
		'{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
		'{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
		'{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
		'{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
		'{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。'
	];

	function assessment(userName) {
		// 全文字のコード番号を取得してそれを足し合わせる
		let sumOfcharCode = 0;
		for (let i = 0; i < userName.length; i++) {
			sumOfcharCode += userName.charCodeAt(i);
		}

		// 文字のコード番号の合計を回答の数で割って添字の数値を求める
		const index = sumOfcharCode % answers.length;
		let result = answers[index];
		result = result.replace(/\{userName\}/g, userName);

		// TODO {userName}をユーザーの名前に置き換える
		return result;
	}

	// console.log(assessment('A'));
	// console.log(assessment('AB'));
	// console.log(assessment('あいうえお'));
	console.assert(
		assessment('太郎') === '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
		'診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
	);
	console.assert(assessment('あかさたな') === assessment('あかさたな'), '同内容の入力に対する診断結果が一致しません。');

})();
