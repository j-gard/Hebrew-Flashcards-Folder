const deckArray = [
  {
    "english": 'he made',
    "hebrew": 'ברא',
    "difficulty": 0
  },
  {
    "english": 'beginning',
    "hebrew": 'ראשׁית',
    "difficulty": 0
   },
   {
    "english": 'in (prep.)',
    "hebrew": 'בּ',
    "difficulty": 0
   },
   {
    "english": 'to (prep.)',
    "hebrew": 'ל',
    "difficulty": 0
   },
   {
    "english": 'God',
    "hebrew": 'אלהים',
    "difficulty": 0
   },
   {
    "english": 'evening',
    "hebrew": 'ערב',
    "difficulty": 0
   },
   {
    "english": 'voice',
    "hebrew": 'קוֹל',
    "difficulty": 0
   },
   {
    "english": 'night',
    "hebrew": 'לילָה',
    "difficulty": 0
   },
   {
    "english": 'day',
    "hebrew": 'יוֹם',
    "difficulty": 0
   },
   {
    "english": 'morning',
    "hebrew": 'בּקר',
    "difficulty": 0
   }
]

deckArray.sort(() => 0.5 - Math.random());
let score = 1;
const possibleArray = [
  deckArray[1].english,
  deckArray[2].english,
  deckArray[3].english,
  deckArray[4].english,
  deckArray[0].english,
]

possibleArray.sort(() => 0.5 - Math.random());

function newCard () {
  
}

let activeCard = document.querySelector('#activeCard');
const loadQuestion = deckArray[0].hebrew;
const correctAnswer = deckArray[0].english;
let wrongAnswers = possibleArray;

document.getElementById("activeCard").innerText = loadQuestion;

document.getElementById("buttonOne").innerText = possibleArray[0];
document.getElementById("buttonTwo").innerText = possibleArray[1];
document.getElementById("buttonThree").innerText = possibleArray[2];
document.getElementById("buttonFour").innerText = possibleArray[3];
document.getElementById("buttonFive").innerText = possibleArray[4];

function checkAnswer(x) {
  if (x === deckArray[0].english) {
    alert ("You Are Correct!");
    document.getElementById("numberCorrect").innerText = score++;
    newCard ();
  } else {
    alert ("You Are Dumb!");
    deckArray[0].difficulty++;
  }
}

function newRound () {
  alert("this is a new round");
}




/*  STEPS:
1. create a DECK of flashcards in an array. Each CARD = one object.
  a. each object should have three elements (?): ENGLISH, HEBREW, DIFFICULTY rating

2. Have a variable grab a random CARD to display.

function testCard () {
3. Have another WRONG array grab 4 wrong english answers (the 5th and correct answer is in the CARD object).

4. Display random CARD>HEBREW.

5. Display WRONG array answers & correct answer.

6. Make all possible answers clickable.
  a.  if click = incorrect, display "try again" and increase difficulty level by 1; 
  b.  else, display "Nice job bro" and start function again.
}
*/




