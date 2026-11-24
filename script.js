
// Image carousel

var pictures = [
    "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=800",
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800"
];

var currentSlide = 0;

function nextSlide() {
    currentSlide++;

    if (currentSlide >= pictures.length) {
        currentSlide = 0;
    }

    document.getElementById("slide").src = pictures[currentSlide];
}

function previousSlide() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = pictures.length - 1;
    }

    document.getElementById("slide").src = pictures[currentSlide];
}


// Favorites

function addFavorite(food) {
    var list = document.getElementById("favoriteList");

    var item = document.createElement("li");
    item.textContent = food;

    list.appendChild(item);
}


// Trivia quiz

function checkAnswer(answer) {
    var result = document.getElementById("result");

    if (answer == 1) {
        result.textContent = "Correct! Thanksgiving is celebrated in November.";
    } else {
        result.textContent = "Incorrect. Try again!";
    }
}
