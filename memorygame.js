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
  },
  {
    "english": 'heavens,sky',
    "hebrew": 'שׁמים',
    "difficulty": 0
  },
  {
    "english": 'earth,land',
    "hebrew": 'ארצ',
    "difficulty": 0
  },
  {
    "english": 'desolation',
    "hebrew": 'תהוּ',
    "difficulty": 0
  },
  {
    "english": 'waste',
    "hebrew": 'בהוּ',
    "difficulty": 0
  },
  {
    "english": 'light',
    "hebrew": 'אוֹר',
    "difficulty": 0
  },
  {
    "english": 'good',
    "hebrew": 'טוֹב',
    "difficulty": 0
  },
  {
    "english": 'caused a division (V.)',
    "hebrew": 'יבדל',
    "difficulty": 0
  },
  {
    "english": 'between',
    "hebrew": 'בין',
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
let minIndex = 4;
let answerChoices = [];
let displayedCard = document.getElementById("activeCard");
let displayedSizeOfDeck = document.getElementById("sizeOfDeck");
let displayedSmartAnswer = document.getElementById("smartAnswer");
let displayedIdiotAnswer = document.getElementById("idiotAnswer");

let storeSmartScore = smartAnswer;
let savedSmartScore = JSON.parse(localStorage.getItem("smartScore"));
let storeIdiotScore = idiotAnswer;
let savedIdiotScore = JSON.parse(localStorage.getItem("idiotScore"));

let fifthHeart = document.getElementById("heartFive");
let fourthHeart = document.getElementById("heartFour");
let thirdHeart = document.getElementById("heartThree");
let secondHeart = document.getElementById("heartTwo");
let firstHeart = document.getElementById("heartOne");

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
  displayedSmartAnswer.innerText = `\xa0 ${savedSmartScore} `;
}

function resetHearts() {
  firstHeart.style.visibility="visible";
  setTimeout(() => {
    secondHeart.style.visibility="visible";
  }, 400);
  setTimeout(() => {
    thirdHeart.style.visibility="visible";
  }, 800);
  setTimeout(() => {
    fourthHeart.style.visibility="visible";
  }, 1200);
  setTimeout(() => {
    fifthHeart.style.visibility="visible";
  }, 1600);
}

function absoluteFailureOccurred() {
  alert("Nice job. You are are an actual idiot. Enjoy life knowing that you cannot get any lower than where you now stand. Get wrecked, punk.");
  smartAnswer = 0;
  idiotAnswer = 0;
  displaySmartScore();
  saveScores();
  setTimeout(() => {
    resetHearts();
  }, 2000);
}

function displayIdiotScore() {
  if (savedIdiotScore === 0) {
  } else if (savedIdiotScore === 1) {
    fifthHeart.style.visibility="hidden";
  } else if (savedIdiotScore === 2) {
    fifthHeart.style.visibility="hidden";
    fourthHeart.style.visibility="hidden";
  } else if (savedIdiotScore === 3) {
    fifthHeart.style.visibility="hidden";
    fourthHeart.style.visibility="hidden";
    thirdHeart.style.visibility="hidden";
  } else if (savedIdiotScore === 4) {
    fifthHeart.style.visibility="hidden";
    fourthHeart.style.visibility="hidden";
    thirdHeart.style.visibility="hidden";
    secondHeart.style.visibility="hidden";
  } else if (savedIdiotScore === 5) {
    fifthHeart.style.visibility="hidden";
    fourthHeart.style.visibility="hidden";
    thirdHeart.style.visibility="hidden";
    secondHeart.style.visibility="hidden";
    firstHeart.style.visibility="hidden";
    absoluteFailureOccurred();
  }
} 

function doNotDuplicateRandomIndex() {
  if (randomIndex < 4) createRandomIndex();
}

function createRandomIndex() {
  randomIndex = Math.floor(Math.random() * ((maxIndex - minIndex) + minIndex));
  doNotDuplicateRandomIndex();
}

function shuffleDeck() {
  createRandomIndex();
  fullDeck.sort(() => 0.5 - Math.random());
}

function createAnswerChoices() {
  answerChoices = [  
    fullDeck[0].english,
    fullDeck[1].english,
    fullDeck[2].english,
    fullDeck[3].english,
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
    saveScores();
    initialize();
  }
  else {
    console.log("you're an idiot.");
    idiotAnswer++;
    saveScores();
  }
}

function saveScores() {
  storeSmartScore = JSON.stringify(smartAnswer);
  localStorage.setItem("smartScore", storeSmartScore);
  savedSmartScore = JSON.parse(localStorage.getItem("smartScore"));

  storeIdiotScore = JSON.stringify(idiotAnswer);
  localStorage.setItem("idiotScore", storeIdiotScore);
  savedIdiotScore = JSON.parse(localStorage.getItem("idiotScore"));

  displayIdiotScore();
  displaySmartScore();
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
  saveScores();
  console.log(savedIdiotScore);
  console.log(savedSmartScore);
}

initialize ();


