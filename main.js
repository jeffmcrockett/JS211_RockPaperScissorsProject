// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below
// DO THIS
const rockPaperScissors = function(hand1, hand2) {

  // Modification of each hand to tripm and lowercase is on the single if statements. 
  // Planning to test trim and lowercasing pre-if statements by adding an additional = to each statement to change equality

  if ((hand1.replace(/\s+/g, '').toLowerCase() == 'rock') && (hand2.replace(/\s+/g, '').toLowerCase() == 'rock')) {
    return "It's a tie!";
  }
  if ((hand1.replace(/\s+/g, '').toLowerCase() == 'rock') && (hand2.replace(/\s+/g, '').toLowerCase() == 'paper')) {
    return "Hand two wins!";
  }
  if ((hand1.replace(/\s+/g, '').toLowerCase() == 'rock') && (hand2.replace(/\s+/g, '').toLowerCase() == 'scissors')) {
    return "Hand one wins!";
  }
  if ((hand1.replace(/\s+/g, '').toLowerCase() == 'paper') && (hand2.replace(/\s+/g, '').toLowerCase() == 'rock')) {
    return "Hand one wins!";
  }
  if ((hand1.replace(/\s+/g, '').toLowerCase() == 'paper') && (hand2.replace(/\s+/g, '').toLowerCase() == 'paper')) {
    return "It's a tie!";
  }
  if ((hand1.replace(/\s+/g, '').toLowerCase() == 'paper') && (hand2.replace(/\s+/g, '').toLowerCase() == 'scissors')) {
    return "Hand two wins!";
  }
  if ((hand1.replace(/\s+/g, '').toLowerCase() == 'scissors') && (hand2.replace(/\s+/g, '').toLowerCase() == 'rock')) {
    return "Hand two wins!";
  }
  if ((hand1.replace(/\s+/g, '').toLowerCase() == 'scissors') && (hand2.replace(/\s+/g, '').toLowerCase() == 'paper')) {
    return "Hand one wins!";
  }
  if ((hand1.replace(/\s+/g, '').toLowerCase() == 'scissors') && (hand2.replace(/\s+/g, '').toLowerCase() == 'scissors')) {
    return "It's a tie!";
  }  
  else return "That's not an appropriate RPS weapon! The only options are rock, paper, or scissors. Try, try again...";
}






// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });

  //additional tests for RPS

  describe ('RPS Unit test assignment', function(){

    it('should handle bad input', function(){
      let actual = rockPaperScissors('boot', 'roach');
      let expected = "Boot";
      assert.equal(actual, expected);
    })

    it('should handle vulgar language', function(){
      let actual = rockPaperScissors("shit", "crap");
      let expected = "No bad language please!";
      assert.equal(actual, expected);
    })

    it('should launch a missile', function(){
      let actual = rockPaperScissors('initiate', 'sequence');
      let expected = "Launch sequence initiated!";
      assert.equal(actual, expected);
    })

    it('should fail inputs that do not fit the requirements of this very simple game', function(){
      let actual = rockPaperScissors('dynamite', 'mario');
      let expected = "That's not an appropriate RPS weapon! The only options are rock, paper, or scissors. Try, try again...";
      assert.equal(actual, expected);
    })
  })
} else {

  // always returns ask the user for another input
  getPrompt();

}
