// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
let word;

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n'`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.log (`Let's play some Scrabble!\n`); 
  word = input.question (`Enter your word: `);
  console.log (oldScrabbleScorer(word))
  
    
};

function simpleScore(word) {
  return word.length


}


function vowelBonusScore(word) {
  let points = 0;
  let vowels = ["A", "E", "I", "O", "U"];
    word = word.toUpperCase()
  for (let i = 0; i < word.length; i++){
    if (vowels.includes(word[i])) {
      points = points + 3
    

  } else {
    points = points + 1
  }
  }

  return points

}

function scrabbleScore(word){
  word = word.toUpperCase();
	let letterPoints = 0;

 
	for (let i = 0; i < word.length; i++) {
    letterPoints += Number(newPointStructure[word[i]])
    console.log(letterPoints)
  
			
		 
 
	  
	}
  console.log(`Points for ${word}: ${letterPoints}\n`)
	return letterPoints;
  /*let simpleObject = {
    name:"Simple Score", 
    description:"Each letter is worth 1 point.", 
    scoringFunction: simpleScore
  }
  let vowelObject = {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: bonusVowels
  } 
  let scrabbleObject = {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scoringFunction: scrabble
  }*/
}


  let simpleObject = {
    name:"Simple Score", 
    description:"Each letter is worth 1 point.", 
    scoringFunction: simpleScore
  };
  let vowelObject = {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: vowelBonusScore
  }; 
  let scrabbleObject = {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scoringFunction: scrabbleScore
  }
const scoringAlgorithms = [
simpleObject, vowelObject, scrabbleObject]

function scorerPrompt() {
 let userChoice = input.question (`Which scoring algorithm would you like to use?\n 
 0- Simple: One point per character\n 
 1- Vowel Bonus: Vowels are with 3 points\n 
 2- Scrabble: Uses scrabble point system\n
 Enter 0, 1, or 2:\n`)
 console.log ("scoringFunction result:", scoringAlgorithms[userChoice].scoringFunction (word))
}
function transform(oldPointStructure) {
  for (let letterPoints in oldPointStructure) {
     let alphabet = oldPointStructure[letterPoints]
    //  console.log(alphabet)
     for (i = 0; i < alphabet.length ; i++) {
    // // console.log(letterPoints);
    // console.log(alphabet[i])
    newPointStructure[alphabet[i]] = letterPoints;
     }
    // console.log (oldPointStructure[letterPoints][i])
    
    
  }

};
  

let newPointStructure = {} ;

function runProgram() {
 initialPrompt();
 
 transform(oldPointStructure);
 scorerPrompt();
  //let word = input.question(`Enter your word: `)
  //console.log (vowelBonusScore(word))
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

