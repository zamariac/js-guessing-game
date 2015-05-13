function* guessingGame() {
	console.log(yield game.say('Hey there!'));
	console.log(yield game.say('Woah', 'This is cool'));
	console.log(yield game.ask('Woah', 'This is cool'));
	console.log(yield game.choose('Woah', 'This is cool', 'Hello world'));
	console.log(yield game.say('That\'s all folks!', 'THE END'));
}