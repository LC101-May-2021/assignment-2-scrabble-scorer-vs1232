// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
let userWord = '';

function initialPrompt() {
  userWord = String(input.question("Let's play some scrabble! Enter a word: "));
};

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


function simpleScore(word) {
  word = userWord.toUpperCase();
  let simpleScore=0;
  for (let i = 0; i < word.length; i++) {
    simpleScore +=1  
  }
  return "Points: ", simpleScore;
}

function vowelBonusScore(word) {
  word = userWord.toUpperCase();
  let vowelBonusScore = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === 'A' ||
       word[i] === 'E' ||
       word[i] === 'I' ||
       word[i] === 'O' ||
       word[i] === 'U') {
        vowelBonusScore += 3;
    } else {
      vowelBonusScore += 1;
    }
  }
  return vowelBonusScore;
}

function transform(object) {
  let newO = {}
  object = oldPointStructure
  for (key in object){
    for (let i = 0; i < object[key].length; i++) {
      newO[object[key][i].toLowerCase()]=Number([key]);  
  }
}
return newO
};

let newPointStructure = transform(oldPointStructure);

function scrabbleScore(word) {
	let scrabbleScore = 0;
  word = userWord.toLowerCase();
  //console.log('New Point Structure: ',newPointStructure)
	for (let i = 0; i < word.length; i++) {
      if (word[i] in newPointStructure) {
      scrabbleScore += Number(newPointStructure[word[i]]);
      }
		}
	return (scrabbleScore*1);
 }


const scoringAlgorithms = [
  simpleScorer = {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scoringFunction: simpleScore
  }, 
  vowelBonusScorer = {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: vowelBonusScore
  }, 
  scrabbleScorer = {
    name: "Traditional Scrabble",
    description: "The traditional scoring algorithm.",
    scoringFunction: scrabbleScore
  }
  ];

function scorerPrompt() {
  let scoreOption = Number(input.question("Select a scoring option:\n\n0 = Score is equal to the number of letters in the word. \n1 = Vowels = 3pts, Consonants = 1pt. \n2 = Traditional Scrabble scoring.\nEnter 0, 1, or 2: "))

// A) If the user enters 0, have the program output a score using the simple scorer.

  if (scoreOption === 0) {
    scoreOption = 
    console.log("Simple Scoring Points: ", scoringAlgorithms[0].scoringFunction());

  }
// B) If the user enters 1, use the vowel bonus scoring function.

  else if (scoreOption === 1) {
    scoreOption = 
    console.log("Bonus Vowel Scoring Points: ", scoringAlgorithms[1].scoringFunction());
}
// C) If the user enters 2, use the Scrabble scoring option.

  else {
    scoreOption = 
    console.log("Scrabble Scoring Points: ", scoringAlgorithms[2].scoringFunction());
}
// D) scorerPrompt() should return the object the user has selected.
  return scoreOption
}


function runProgram() {
   initialPrompt();
   scorerPrompt();
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

