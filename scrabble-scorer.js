  for( let i = 0; i < obj[m].length; i++ ){
      //console.log("New array", obj[m][i]);
     //newPointStructure[(obj[m][i]).toLowerCase()] = m;
     newObj[(obj[m][i]).toUpperCase()] = Number(m);
     newObj[(obj[m][i]).toLowerCase()] = Number(m);
    }

newPointStructure = transform(oldPointStructure);
newPointStructure[' '] = 0;

//console.log('newPointStructure', newPointStructure);
//console.log('oldPointStructure', oldPointStructure);
//console.log(transform(oldPointStructure));

let scrabbleScore = function(word){
  word = word.toUpperCase();
  word = word.toLowerCase();
  let letterPoints = 0;
  for( let i = 0; i < word.length; i++ ){
    //letterPoints += Number(newPointStructure[word[i]]);
    letterPoints += newPointStructure[word[i]];
  }
  return letterPoints;
}
function oldScrabbleScorer(word) {
  word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if ( oldPointStructure[pointValue].includes(word[i]) ) {
			 //letterPoints += `Points for '${word[i]}': ${pointValue}\n`
       pointValueconv = Number( pointValue );
       letterPoints += pointValueconv;
		  }
 
	  }
	}
	return letterPoints;
 }
  let simpleScore = function (word){
   //word = word.toUpperCase();
   let pointValue = 1;
   let letterPoints = 0;
   
   for( let i = 0; i < word.length; i++){
     //letterPoints += `Points for '${word[i]}': ${pointValue}\n`
     letterPoints += pointValue;
    }
    return letterPoints;
 }
  let vowelBonusScore = function (word){
   word = word.toUpperCase();
   let pointValue = 0;
   let letterPoints = 0;
   let vowel =['A', 'E', 'I', 'O', 'U'];
   
   for( let i = 0; i < word.length; i++){
      if( vowel.includes(word[i])){
        pointValue = 3;
      } else {
        pointValue = 1;
      }
     // letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      letterPoints += pointValue;
    }
    return letterPoints;
}
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
function initialPrompt() {
  console.log("Let's play some scrabble! \n");
  let word = input.question("Enter a word to score: ");
    
  //let letters = "";
  let letters = /^[A-Za-z ]*$/;
  if(!letters.test(word)){
    console.log("Please enter a word not a number or symbol");
    return -1;
  }
  return word;
 
 /*console.log(oldScrabbleScorer(scrabbleScore));
  let simpleScore = input.question("Enter a word to score");
  console.log(simpleScorer(simpleScore));
  let vowelBonusScore = input.question("Enter a word to score");
  console.log(vowelBonusScorer(vowelBonusScore));*/
};
//let simpleScore;
//let vowelBonusScore;
//let scrabbleScore;
let object1 =
{
  name: "Simple Score",
  description: "Each letter is worth 1 point",
  scoringFunction: 
  simpleScore
 }
 let object2 =
 {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt",
  scoringFunction: 
  vowelBonusScore
 }
 let object3 =
 {
  name: "Scrabble",
  description: "The traditional scoring algorithm",
 // scorerFunction: function(word){ return oldScrabbleScorer(word)}
  scoringFunction: 
  scrabbleScore
  
 }
const scoringAlgorithms = [ object1, object2, object3 ];
/*console.log("algorithm name: ", scoringAlgorithms[0].name);
console.log("scorerFunction result:", scoringAlgorithms[0].scorerFunction("JavaScript"));*/
function scorerPrompt() {
  let scoringAlgorithm = input.question( `Which Scoring Algorithm would you like to use ?
  0 - Simple: One point per character
  1 - Vowel Bonus: Vowels are worth 3 points
  2 - Scrabble: Uses scrabble point system
  Enter 0, 1, or 2 : `);
  const validOptions = ['0','1','2'];
  if(!validOptions.includes(scoringAlgorithm)){
    console.log("Please enter only 0 1 and 2");
    return -1;
  }
  //console.log(scoringAlgorithm);
  return scoringAlgorithm;
} 
//function transform() {};
//let newPointStructure;
function runProgram() {
  //let newWord = initialPrompt();
  let newWord = -1;
  while ( newWord === -1 ){
    newWord = initialPrompt();
  }
  let score = -1;
  while( score === -1 ){
    score =  scorerPrompt();
  }
  //console.log(newWord);
  //console.log(score);
  console.log(`Score for ${newWord} : ${scoringAlgorithms[score].scoringFunction(newWord)}`);
   
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
