/*	======================================
	Esquivalience - A funky word generator
	====================================== */

(function($){

	var esquivalience = function(){

		var s = {
			button: $('button'),
			letter: $('.letter'),
			word: $('h1')
		};
	
		var alphabet = {
			vowels: ['a', 'e', 'i', 'o', 'u', 'y'],
			consanents: ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
		};
	
		var letterCount = function(num){
			return num || (Math.floor(Math.random()*5)+1)*2;
		};
	
		var randomWord = function(num){
			var i, letter, word = '';

			for (i = 0; i < num; i++){
				if (i % 2 === 0){
					letter = alphabet.consanents[
						Math.floor(Math.random()*alphabet.consanents.length)
					];
				} else {
					letter = alphabet.vowels[
						Math.floor(Math.random()*alphabet.vowels.length)
					];
				}
				word += letter;
			}

			return word;
		};

		var changeWord = function(){
			s.button.click(function(){
				setTimeout(function(){
					s.word.removeClass('bounceIn').addClass('bounceOut');
					setTimeout(function(){
						s.word.text(randomWord(letterCount()));
						setTimeout(function(){
							s.word.removeClass('bounceOut').addClass('bounceIn');
						}, 0);
					}, 600);
				}, 0);
			});
		};

		return {
			init: changeWord
		};
	}();

	esquivalience.init();
	
})(jQuery);