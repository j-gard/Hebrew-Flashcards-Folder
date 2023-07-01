const fullDeck = [
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

let smartAnswer = 0;
let idiotAnswer = 0;
let pickedCard;
let englishAnswer;
let hebrewAnswer;
let randomIndex = 0;
let maxIndex = fullDeck.length;
let minIndex = 1;
let answerChoices = [];
let displayedCard = document.getElementById("activeCard");
let displayedSizeOfDeck = document.getElementById("sizeOfDeck");
let displayedSmartAnswer = document.getElementById("smartAnswer");
let displayedIdiotAnswer = document.getElementById("idiotAnswer");

let buttonOne = document.getElementById("buttonOne");
let buttonTwo = document.getElementById("buttonTwo");
let buttonThree = document.getElementById("buttonThree");
let buttonFour = document.getElementById("buttonFour");
let buttonFive = document.getElementById("buttonFive");
let buttonInput = 0;

function displayDeckSize() {
  displayedSizeOfDeck.innerText = `\xa0 ${maxIndex} `;
}

function displaySmartScore() {
  displayedSmartAnswer.innerText = `\xa0 ${smartAnswer} `;
}

function displayIdiotScore() {
  displayedIdiotAnswer.innerText = `\xa0 ${idiotAnswer} `;
}

function createRandomIndex() {
  randomIndex = Math.floor(Math.random() * ((maxIndex - minIndex) + minIndex));
}

function shuffleDeck() {
  createRandomIndex();
  fullDeck.sort(() => 0.5 - Math.random());
}

function createAnswerChoices() {
  answerChoices = [  
    fullDeck[1].english,
    fullDeck[2].english,
    fullDeck[3].english,
    fullDeck[4].english,
    fullDeck[randomIndex].english,
  ]
  answerChoices.sort(() => 0.5 - Math.random());
}

function displayaCard() {
  pickedCard = fullDeck[randomIndex];
  displayedCard.innerText = pickedCard.hebrew;
}

function findEnglishAnswer() {
  englishAnswer = fullDeck[randomIndex].english;
}

function findHebrewAnswer() {
hebrewAnswer = fullDeck[randomIndex].hebrew;
}

function createButtonOptions() {
  buttonOne.innerText = answerChoices[0];
  buttonTwo.innerText = answerChoices[1];
  buttonThree.innerText = answerChoices[2];
  buttonFour.innerText = answerChoices[3];
  buttonFive.innerText = answerChoices[4];
}

function checkUserAnswer(buttonInput) {
  if (buttonInput === pickedCard.english) {
    console.log("nice job bro.");
    smartAnswer++;
    initialize();
    displaySmartScore();
  }
  else {
    console.log("you're an idiot.");
    idiotAnswer++;
    displayIdiotScore();
  }
}

function initialize() {
  displayDeckSize();
  displaySmartScore();
  displayIdiotScore();
  createRandomIndex();
  shuffleDeck();
  createAnswerChoices();
  displayaCard();
  findEnglishAnswer();
  findHebrewAnswer();
  createButtonOptions();
}

initialize ();

