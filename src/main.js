// query selector variables go here 👇
// display elements
var image = document.querySelector('.poster-img');
var mainPoster = document.querySelector('.main-poster');
var miniPoster = document.querySelector('.mini-poster'); // this is targeting the individual mini posters, and when inspecting with the dev tools, the poster appears in the console with the naming "article#783012764longidnumber738492.mini-poster"
// can use `savedPosters[0].id` to target the id property within the objects of the savedPosters array
// use a `for` loop to examine the objects within savedPosters to find the id that contains the `savedPosters[i].id` value
// the object containing that value can now be removed from the savedPosters array
var posterForm = document.querySelector('.poster-form');
var posterGrid = document.querySelector('.saved-posters-grid');
var quote = document.querySelector('.poster-quote');
var savedPostersView = document.querySelector('.saved-posters');
var title = document.querySelector('.poster-title');
// main page buttons
var buttonMakePoster = document.querySelector('.show-form');
var buttonSavePoster = document.querySelector('.save-poster');
var buttonShowSaved = document.querySelector('.show-saved');
var buttonRandom = document.querySelector('.show-random');
// form buttons and inputs
var buttonNevermind = document.querySelector('.show-main');
var buttonBackToMain = document.querySelector('.back-to-main');
var buttonShowPoster = document.querySelector('.make-poster');
var imageInput = document.getElementById('poster-image-url')
var titleInput = document.getElementById('poster-title');
var quoteInput = document.getElementById('poster-quote');
// mutable global variables
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
var savedPosters = [];
var currentPoster;

// event listeners go here 👇
window.addEventListener('load', buildRandomPoster);
buttonBackToMain.addEventListener('click', takeMeBack);
buttonMakePoster.addEventListener('click', showForm);
buttonNevermind.addEventListener('click', takeMeBack);
buttonRandom.addEventListener('click', buildRandomPoster);
buttonSavePoster.addEventListener('click', function() {
  pushValues();
  saveCurrentPoster();
});
buttonShowPoster.addEventListener('click', showUserPoster);
buttonShowSaved.addEventListener('click', function() {
  showSaved();
  displayGrid();
});
posterGrid.addEventListener('dblclick', removePoster);

// functions and event handlers
function buildRandomPoster() {
  image.src = images[getRandomIndex(images)];
  title.innerText = titles[getRandomIndex(titles)];
  quote.innerText = quotes[getRandomIndex(quotes)];
  currentPoster = new Poster(image.src, title.innerText, quote.innerText);
}

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

function displayGrid() {
  posterGrid.innerHTML = "";
  for (var i = 0; i < savedPosters.length; i++) {
    posterGrid.innerHTML +=
      `<article class="mini-poster" id="${savedPosters[i].id}">
      <img class="poster-img" src="${savedPosters[i].imageURL}">
      <h2 class="poster-title">${savedPosters[i].title}</h2>
      <h4 class="poster-quote">${savedPosters[i].quote}</h4>
      </article>`;
  }
}

function removePoster() {
    // event.target not working - need to figure out the syntax/notation here
    var clickedPoster = event.target;
    // console.log(clickedPoster);
    for (var i = 0; i < savedPosters.length; i++) {
      if (savedPosters[i].id === clickedPoster.id)
        savedPosters.splice(i, 1);
        // posterGrid.HTMLCollection.remove(clickedPoster);
    }
}

// helper functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function pushValues() {
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
}

function showSaved() {
  savedPostersView.classList.remove('hidden');
  mainPoster.classList.add('hidden');
}

function takeMeBack() {
  posterForm.classList.add('hidden');
  mainPoster.classList.remove('hidden');
  savedPostersView.classList.add('hidden');
}

// ITERATION 4 - Deleting Saved Posters - STRETCH GOAL: if we complete iteration 3 goals early (on Saturday) we will divide and each attempt iteration 4 (with communication)
// From the saved posters view, if a user double clicks a saved poster, it will be deleted
// *Hint: How will you update the data model to achieve this?*
// PSEUDO:
  // we need to identify the block of HTML in posterGrid that the user wants to delete.
  // maybe refactor displayGrid so that when a savedPosters instance is added, we give it a unique ID?   i.e. "id = ${savedPosters[i]}" or something?
  // √ we can add a 'dblclick' event to the posterGrid variable to invoke a function that will handle the removal
  // function needs to find id of the element double-clicked    - 'event.target'?  pcm
  // should remove both the <article> from the posterGrid and the class instance from the savedPosters array.
  // probably use a for loop to iterate through each, looking for entries with that id, then use .remove or splice()
  // run showSaved() at the end to refresh page


// CLEAN-UP / REFACTORING:
// refactor pushValues to include just one dynamic conditional, with passed in parameters? pushValues(array, variable.property)
// (possible that dynamism wouldn't really help and # of lines of code would be roughly the same, though)


// Optional Extensions - Gettin’ fancy
// Here’s a list of possible extensions to implement - but ONLY IF your team has completed all the previous iterations AND have cleaned up your code to make it DRYer and more readable.
//
// You are welcome to add your own extensions. Be sure they are thoughtful in terms of UX/UI, and that they do not break any prior functionality.
//
// Implement data validation and error handling into the form (disable button, provide error messages if data entered is not correct, etc)
// In the main poster view, allow users to click each piece of the poster (image, title, quote) to update just that piece with another random item from the appropriate array
// When a user single clicks a saved poster, create a modal to view it larger
// Allow users to drag and drop saved posters into whatever order they want them to appear
