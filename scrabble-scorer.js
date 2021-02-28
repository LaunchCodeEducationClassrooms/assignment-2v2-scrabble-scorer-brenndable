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



function initialPrompt(word) {
  console.log("\nLet's play Scrabble!\n ")
  return input.question("Enter a word to score: ")
}
  

let simpleScore = function(word) {
  word = word.toUpperCase();
  let simplePoints = 0

  for (let i = 0; i < word.length; i++) {
    simplePoints++
  }
  return simplePoints
}

let vowelBonusScore = function(word) {
  word = word.toUpperCase();
  let vowelPoints = 0

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" ||   word[i] === "U") {
      vowelPoints += 2 
    } 
      vowelPoints += 1
  }
    return vowelPoints
}


let scrabbleScore = function(word) {
  word = word.toLowerCase();
  let scorePoints = 0
  
  for (let i = 0; i < word.length; i++) {
    scorePoints += newPointStructure[word[i]]
  }
    return scorePoints
};


 const scoringAlgorithms = [
  {name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoringFunction: scrabbleScore},

  {name: "Simple Scorer",
  description: "Each letter is worth 1 point.",
  scoringFunction: simpleScore},

  {name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",scoringFunction: vowelBonusScore} ]



function scorerPrompt(word) {
  let playerInput = 3
  while (playerInput > 2 || isNaN(playerInput)) {
    playerInput = input.question(`Which scoring algorithm would you like to use?\n\n0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}\n1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}\n2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}\n\nEnter 0, 1, or 2: `)
  
  if (playerInput === "0") {
    console.log(`${scoringAlgorithms[0].name}`)
      return `Score for: ${scoringAlgorithms[0].scoringFunction(word)}`
    } else if (playerInput === "1") {
    console.log(`${scoringAlgorithms[1].name}`)
      return `Score for: ${scoringAlgorithms[1].scoringFunction(word)}`
    } else if (playerInput === "2") {
    console.log(`${scoringAlgorithms[2].name}`)
      return `Score for: ${scoringAlgorithms[2].scoringFunction(word)}`
    } else {
      console.log("Enter 0, 1, or 2")
      }
    }
  }

function transform(object) {
  let newPointObject = {}

  for (item in object) {
    for (let i = 0; i < object[item].length; i++) {
      let keyStorage = object[item][i]
      keyStorage = keyStorage.toLowerCase()
      newPointObject[`${keyStorage}`] = Number(item)
      }
    }
      return newPointObject
  }


let newPointStructure = transform(oldPointStructure)
 

function runProgram() {
  let word = initialPrompt()
  console.log(scorerPrompt(word))   
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

