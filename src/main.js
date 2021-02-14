// query selector variables go here 👇


// display elements
var image = document.querySelector('.poster-img');
var title = document.querySelector('.poster-title');
var quote = document.querySelector('.poster-quote');
var posterForm = document.querySelector('.poster-form');
var mainPoster = document.querySelector('.main-poster');
var savedPostersView = document.querySelector('.saved-posters');
var posterGrid = document.querySelector('.saved-posters-grid');

// main buttons
var buttonSavePoster = document.querySelector('.save-poster');
var buttonShowSaved = document.querySelector('.show-saved');
var buttonRandom = document.querySelector('.show-random');
var buttonMakePoster = document.querySelector('.show-form');

// form buttons and inputs
var buttonNevermind = document.querySelector('.show-main');
var buttonBackToMain = document.querySelector('.back-to-main');
var buttonShowPoster = document.querySelector('.make-poster');
var imageInput = document.getElementById('poster-image-url')
var titleInput = document.getElementById('poster-title');
var quoteInput = document.getElementById('poster-quote');



// we've provided you with some data to work with 👇

// static arrays
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];

// dynamic functions
var savedPosters = [];
var currentPoster;

// event listeners go here 👇

window.addEventListener('load', buildRandomPoster);

buttonSavePoster.addEventListener('click', function() {
  pushValues();
  saveCurrentPoster();
});

buttonShowSaved.addEventListener('click', function() {
  showSaved();
  displayGrid();
});

buttonRandom.addEventListener('click', buildRandomPoster); // instead of having this click call the buildCurrentPoster function, it could call a helper function that would buildCurrentPoster, AND instantiate an object AND do whatever else we need it to do in the future
buttonMakePoster.addEventListener('click', showForm); // display the form, and the main poster should be hidden

// other button listeners

buttonNevermind.addEventListener('click', takeMeBack);  // show only the main poster section
buttonBackToMain.addEventListener('click', takeMeBack); // show only the main poster section
buttonShowPoster.addEventListener('click', showUserPoster); // display user poster back on main

// functions and event handlers go here 👇

function buildRandomPoster() {
  image.src = images[getRandomIndex(images)];
  title.innerText = titles[getRandomIndex(titles)];
  quote.innerText = quotes[getRandomIndex(quotes)];
  currentPoster = new Poster(image.src, title.innerText, quote.innerText);
};


function saveCurrentPoster() {
  if (!savedPosters.includes(currentPoster)){
    savedPosters.push(currentPoster);
  }
}

function showUserPoster() {
  event.preventDefault(event);
  image.src = imageInput.value;
  title.innerText = titleInput.value;
  quote.innerText = quoteInput.value;
  currentPoster = new Poster(imageInput.value, titleInput.value, quoteInput.value);
  takeMeBack();
  pushValues();
}

// helper functions

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function pushValues() {
  // images.push(image.src);
  // titles.push(title.innerText);
  // quotes.push(quote.innerText);

  if (!images.includes(image.src)) {
    images.push(image.src);
  }
  if (!titles.includes(title.innerText)) {
    titles.push(title.innerText);
  }
  if (!quotes.includes(quote.innerText)) {
    quotes.push(quote.innerText);
  }
}

function showForm() {
  posterForm.classList.remove('hidden');
  mainPoster.classList.add('hidden');
};

function showSaved() {
  savedPostersView.classList.remove('hidden');
  mainPoster.classList.add('hidden');
}

function takeMeBack() {
  posterForm.classList.add('hidden');
  mainPoster.classList.remove('hidden');
  savedPostersView.classList.add('hidden');
}

function displayGrid() {
  // posterGrid.innerHTML = "";
  for (var i = 0; i < savedPosters.length; i++) {
    console.log('savedPoster:', savedPosters[i]);
    console.log('posterGrid:', posterGrid);
    posterGrid.innerHTML +=
      `<article class="poster">
      <img class="poster-img" src="${savedPosters[i].imageURL}">
      <h1 class="poster-title">${savedPosters[i].title}</h1>
      <h3 class="poster-quote">${savedPosters[i].quote}</h3>
      </article>`;
  }
}



// write a conditional function to pair with buildCurrentPoster that will compare what is currently displayed vs what is stored in the currentPoster object - if the next random value matches any of the current values, find a different value { if a === b we need a new value}

// something like this for image/title/quote? :
// use a while loop so that 'while' the randomly-generated

// if (randomImage === image.src) {
//   continue (run randomizer again);
// } else {
//   image.src = randomImage;
//   break;
// }


// ITERATION 3 - Saving & Viewing Posters - GOAL: complete Saturday evening; refactor Sunday and work on the README; review DTR
// √ When a user clicks the “Save This Poster” button, the current main poster will be added to the savedPosters array.
// √ If a user clicks the “Save This Poster” more than once on a single poster, it will still only be saved once (no duplicates)
// √ When a user clicks the “Show Saved Posters” button, we should see the saved posters section
// All the posters in the `savedPosters` array should be displayed in the saved posters grid section
// all elements stored within the `savedPosters` array will be displayed on the page {nd}
// build a function that will display all the saved posters; might this use innerHTML? {nd}
// there is a class `saved-posters-grid` on line 38 of the HTML that will likely come into play here {nd}
// 1) target the saved-posters-grid and store in a variable (query selector)
// 2) values stored in the savedPosters array should be displayed in the grid
// 3) use innerHTML to add the values to the array
// 4) use a for loop (?) to iterate through savedPosters and build each mini poster
// 5) each iteration will += the innerHTML to add it to the display section
// 6) each iteration will reassign the values contained within the HTML structure to savedPosters[i].image, savedPosters[i].title, savedPosters[i].quote
// 7) use the structure in the HTML on lines 12 - 16 as a guide:
// <article class="poster">
  // <img class="poster-img" src="" alt="nothin' to see here">
  // <h1 class="poster-title">Title</h1>
  // <h3 class="poster-quote">Quote</h3>
// </article>


// ITERATION 4 - Deleting Saved Posters - STRETCH GOAL: if we complete iteration 3 goals early (on Saturday) we will divide and each attempt iteration 4 (with communication)
// From the saved posters view, if a user double clicks a saved poster, it will be deleted
