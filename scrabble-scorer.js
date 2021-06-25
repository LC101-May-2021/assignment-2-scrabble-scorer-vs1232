function vowelBonusScore (word) {
  let bonusScore=0;
  // word = word.toUpperCase();
  word = word.toUpperCase();
  for (let i=0; i<word.length; i++) {
    if (vowels.includes (word[i]))  {
      bonusScore=bonusScore+3;
    } else {
      bonusScore=bonusScore+1;
    }
  }
    return bonusScore;
}
let newPointStructure=transform(oldPointStructure);
let scrabbleScore = function(word) {
  let newScore=0;
  word=word.toLowerCase();
  console.log(`word = ${word}`);
  // for (const letter in word) {
  //  console.log(`letter = ${letter}`);
    for (i=0; i<word.length; i++) {
      // console.log(`letter[i] = ${letter[i]}`);
      // console.log(`word[i] = ${word[i]}`);
      // if (newPointStructure===word[i]) {
        console.log("word[i] = ", word[i]);
        console.log("newScore = ", newScore);
        console.log("newPointStructure[word[i]] = ", newPointStructure[word[i]]);
        newScore+=newPointStructure[word[i]];
        // newScore=newPointStructure[letter][i];
      // }
    }
  // }  
  console.log("type of " + typeof newScore);
  return newScore
}
const oldScrab = {
  name:  'Scrabble',
  description: 'The traditional scoring algorithm.',
  scoringFunction: scrabbleScore
}
const simpleSc = {
  name:  'Simple Score',
  description: 'Each letter is worth 1 point',
  scoringFunction: simpleScore
}
const vBonus = {
  name:  'Bonus Vowels',
  description:  'A function that returns a score based on the number of vowels and consonants.',
  scoringFunction:  vowelBonusScore
}
const scoringAlgorithms = [simpleSc, vBonus, oldScrab];
function scorerPrompt() {
  // let select=input.question('Which scoring algorithm would you like to use? \n0 - Simple: One point per character \n1 - Vowel Bonus: Vowels are worth 3 points \n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ');
  let select=input.question(`Which scoring algorithm would you like to use? \n0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description} \n1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description} \n2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}\nEnter 0, 1 or 2: `);
  
  //(`Which scoring algorithm would you like to see? \n ${simpleSc[name] `)
  
  return select;
}
function transform (oldPointStructure) {
  let newPoint={};
  for (let letter in oldPointStructure) {
    // console.log(`letter = ${letter}`);
    let letterArray = oldPointStructure[letter];
    //.console.log(`letterArray = ${letterArray}`);  
    for (i=0; i<letterArray.length; i++) {
      // newPoint[letterArray]=letter
    //  console.log(letterArray[i].toLowerCase() + ": " + letter);
    //  console.log(letterArray[i].toLowerCase());
      // newPoint=letterArray[i].toLowerCase();
      letter=Number(letter);
      newPoint[letterArray[i].toLowerCase()] = letter;
    }
    
    console.log(`letter = ${typeof letter}`);
    // obj[letter]=letter
  }
  // for (i=0; i<obj.length; i++) {
  //   console.log(obj[i]);
  // }
  console.log("newPointStructure: ")
  console.log(newPoint)
      return newPoint; 
}
// let newPointStructure=transform(oldPointStructure);
  
// console.log(newPointStructure);
function runProgram() {
  let response = initialPrompt();
  //let finalWord=newPoint;
        //  let lowCase = 
   let method=scorerPrompt();
    if (method==='0') {
      let simple=simpleScore(response);
      console.log(`Score for ${response}: ${simple}`)
    } else if (method==='1') {
      let vbs=vowelBonusScore(response);
      console.log(`Score for ${response}: ${vbs}`)
    } else if (method==='2') {
      let oldScr=scrabbleScore (response);
      console.log(`Score for ${response}: ${oldScr}`)
    }
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