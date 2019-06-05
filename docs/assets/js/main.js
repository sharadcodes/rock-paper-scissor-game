var rock_img = document.getElementById("r");
var paper_img = document.getElementById("p");
var scissors_img = document.getElementById("s");

var computer_score = document.getElementById("computer-score");
var human_score = document.getElementById("human-score");
var winner = document.getElementById("winner");
var declaration = document.getElementById("score-seperator");
var announcer = document.getElementById("announce");

var game_level = 1;
var status = 0;
var pressed_div = "";

const max = 3;
var c_total = 0;
var h_total = 0;

function result(user_value) {
  if (game_level < 11) {
    var c = getRandomInt();
    var h = getRandomInt(user_value);
    if (c < h) {
      h_total++;
      declaration.innerText = "You won this level";
      status = 1;
      highlight(pressed_div, status);
      console.log("HUMAN");
    } else if (c > h) {
      c_total++;
      declaration.innerText = "Computer won! this level";
      status = 0;
      highlight(pressed_div, status);
      console.log("bot");
    } else {
      declaration.innerText = "This level's a Draw";
      status = -1;
      highlight(pressed_div, status);
      console.log("DRAW");
    }
    computer_score.innerText = c_total;
    human_score.innerText = h_total;
  }
  chance();
  game_level++;
  check_level(game_level);
}

// Random number generator

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(max));
}

// Chances

function chance() {
  if (game_level < 11) winner.innerHTML = `<i>Chance no: ${game_level}</i>`;
  else {
    winner.innerHTML = "No chance remaining";
  }
}

function game(userChoice) {
  pressed_div = userChoice;
  switch (userChoice) {
    case "r": {
      result(1);
      break;
    }
    case "p": {
      result(2);
      break;
    }
    case "s": {
      result(3);
      break;
    }
    default:
      break;
  }
}

function highlight(my_value, flag) {
  if (flag == 1) {
    switch (my_value) {
      case "r":
        rock_img.classList.add("green");
        setTimeout(() => rock_img.classList.remove("green"), 400);
        break;
      case "s":
        scissors_img.classList.add("green");
        setTimeout(() => scissors_img.classList.remove("green"), 400);
        break;
      case "p":
        paper_img.classList.add("green");
        setTimeout(() => paper_img.classList.remove("green"), 400);
        break;
      default:
        break;
    }
  } else if (flag == 0) {
    switch (my_value) {
      case "r":
        rock_img.classList.add("red");
        setTimeout(() => rock_img.classList.remove("red"), 400);
        break;
      case "s":
        scissors_img.classList.add("red");
        setTimeout(() => scissors_img.classList.remove("red"), 400);
        break;
      case "p":
        paper_img.classList.add("red");
        setTimeout(() => paper_img.classList.remove("red"), 400);
        break;
      default:
        break;
    }
  } else if (flag == -1) {
    switch (my_value) {
      case "r":
        rock_img.classList.add("grey");
        setTimeout(() => rock_img.classList.remove("grey"), 400);
        break;
      case "s":
        scissors_img.classList.add("grey");
        setTimeout(() => scissors_img.classList.remove("grey"), 400);
        break;
      case "p":
        paper_img.classList.add("grey");
        setTimeout(() => paper_img.classList.remove("grey"), 400);
        break;
      default:
        break;
    }
  }
}

// MAIN

rock_img.addEventListener("click", function() {
  game("r");
});

paper_img.addEventListener("click", function() {
  game("p");
});

scissors_img.addEventListener("click", function() {
  game("s");
});



// check level

function check_level(level){
  if(level == 11){
  var child1 = document.getElementById("r");
  var child2 = document.getElementById("p");
  var child3 = document.getElementById("s");
  child1.parentNode.removeChild(child1);
  child2.parentNode.removeChild(child2);
  child3.parentNode.removeChild(child3);
  if (h_total > c_total) {
    announcer.innerText = "Hurray! You are the champion !";
  } else if (h_total < c_total) {
    announcer.innerText = "So sad you lost !";
  } else if (h_total == c_total) {
    announcer.innerText = "Scores tied it's a Draw";
  } else {
    announcer.innerText = "Something is wrong!";
  }
}
}