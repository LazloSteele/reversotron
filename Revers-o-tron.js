let letterStack = [];
let reverseStack = [];
let word = prompt('Enter your word','arugula');

function stackPusher(outputLetters){
	letterStack.push(outputLetters)
}

function stackPopper(){
	let step=0;
	for(step=0; step<word.length; step++) {
		reverseStack.push(letterStack.pop());
	}
}

function letterSeperator(originalWord){
	let step=0;
	for(step=0; step<originalWord.length; step++) {
		stackPusher(originalWord.charAt(step));
	}
}

function reversotron(){
	return reverseStack.join('');
}			

letterSeperator(word);
stackPopper();
alert(reversotron());
