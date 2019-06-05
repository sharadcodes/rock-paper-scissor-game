var play_button = document.getElementById("play-button");
var computer_score = document.getElementById("computer-score");
var human_score = document.getElementById("human-score");
var winner = document.getElementById("winner");
var declaration = document.getElementById("score-seperator");

var game_level = 1;

const max = 3;
var c_total = 0;
var h_total = 0;

play_button.addEventListener("click", () => {
  if (game_level < 10) {
    var c = getRandomInt();
    var h = getRandomInt();
    if (c < h) {
      h_total++;
      declaration.innerText = "You won this level";
    } else if (c > h) {
      c_total++;
      declaration.innerText = "Computer won! this level";
    } else {
      declaration.innerText = "This level's a Draw";
    }
    computer_score.innerText = c_total;
    human_score.innerText = h_total;
  } else {
    if (h_total > c_total) {
      winner.innerText = "Hurray! You are the winner !";
    } else if (h_total < c_total) {
      winner.innerText = "So sad you lost !";
    } else if (h_total == c_total) {
      winner.innerText = "Ohh! It's a Draw";
    } else {
      winner.innerText = "Something is wrong!";
    }

    var d = document.getElementById("play-button");
    d.className += " hidden";
  }
  game_level++;
  chance();
});

// Random number generator

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(max));
}

// Chances

function chance() {
  if (game_level < 10 && game_level != 9)
    winner.innerHTML = `<i> ${10 - game_level + 1} chances remaining </i>`;
  else if (game_level == 9) {
    winner.innerHTML = `<i> ${10 - game_level} chance remaining </i>`;
  } else if (game_level == 10) {
    winner.innerHTML = `The last chance`;
  }
}
