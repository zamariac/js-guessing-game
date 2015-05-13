function* guessingGame() {

	// var randomNumber= Math.random();
	// console.log(randomNumber);

	// var intvalue = Math.floor(randomNumber);
	// console.log(intvalue);

	var randomNumber= Math.random()*100
	console.log (randomNumber);

	var intValue = Math.floor(randomNumber);
	console.log (intValue);


	// var yourNumber = yield game.ask('Guess a number between 0 and 100')
	// console.log (yourNumber);

	var guess = true;

	while (guess===true) {

		var yourNumber = yield game.ask('Guess a number between 0 and 100');
		console.log (yourNumber);
		yourNumber= parseInt(yourNumber);
		console.log (yourNumber);


		if (yourNumber < intValue){
			yield game.say( 'Guess higher!');
		}
		
		else if (yourNumber > intValue) {
			yield game.say( 'Guess lower!');
		}
		else {
			yield game.say( 'You did it!'); 
			guess=false;
		}

	}
	

	

	//var yourNumber = yield game.ask( '')






	//yield game.say('Hey there!');
	//yield game.say('Woah', 'This is cool');
	//yield game.ask('Guess a number between 0 and 100');
	//yield game.choose('Woah', 'This is cool', 'Hello world');
	//yield game.say('That\'s all folks!', 'THE END');












}








