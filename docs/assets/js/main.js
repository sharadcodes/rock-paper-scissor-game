var rock_img = document.getElementById("rock");
var paper_img = document.getElementById("paper");
var scissors_img = document.getElementById("scissors");
var computer_score = document.getElementById("computer-score");
var human_score = document.getElementById("human-score");
var winner = document.getElementById("winner");
var choices = document.getElementById("choices");
var announcer = document.getElementById("announce");

var game_level = 1;
const max = 3;
var c_total = 0;
var h_total = 0;

var list_of_choices = ["Rock", "Paper", "Scissor"];
var computerChoice;

function result(user_value, computer_value) {
  chance();
  if (game_level < 11) {
    if (
      (user_value === "rock" && computer_value === "scissors") ||
      (user_value === "scissors" && computer_value === "paper") ||
      (user_value === "paper" && computer_value === "rock")
    ) {
      h_total++;
      var status = 1;
      choices.innerHTML =
        "<span>You showed <i style=' color: yellow;'>" +
        user_value +
        "</i> Computer showed <i style=' color: yellow;'> " +
        computer_value;
      highlight(user_value, status);
    } else if (
      (user_value === "paper" && computer_value === "scissors") ||
      (user_value === "rock" && computer_value === "paper") ||
      (user_value === "scissors" && computer_value === "rock")
    ) {
      c_total++;
      var status = 0;
      choices.innerHTML =
        "<span>You showed <i style=' color: yellow;'>" +
        user_value +
        "</i> Computer showed <i style=' color: yellow;'>" +
        computer_value;
      highlight(user_value, status);
    } else if (
      (user_value === "rock" && computer_value === "rock") ||
      (user_value === "paper" && computer_value === "paper") ||
      (user_value === "scissors" && computer_value === "scissors")
    ) {
      var status = -1;
      choices.innerHTML =
        "<span>You showed <i style=' color: yellow;'>" +
        user_value +
        "</i> Computer showed <i style=' color: yellow;'>" +
        computer_value;
      highlight(user_value, status);
    } else {
    }
    computer_score.innerText = c_total;
    human_score.innerText = h_total;
  }
  game_level++;
  check_level(game_level);
}

// Random number generator

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomIntUser(value) {
  return Math.floor(Math.random() * Math.floor(value));
}

// Chances

function chance() {
  if (game_level < 11) winner.innerHTML = `<i>Chance no: ${game_level}</i>`;
  else {
    winner.innerHTML = "No chance remaining";
  }
}

function game(userChoice, computerChoice) {
  switch (userChoice) {
    case "rock": {
      result("rock", computerChoice);
      break;
    }
    case "paper": {
      result("paper", computerChoice);
      break;
    }
    case "scissors": {
      result("scissors", computerChoice);
      break;
    }
    default:
      break;
  }
}

function highlight(my_value, flag) {
  if (flag === 1) {
    switch (my_value) {
      case "rock":
        rock_img.classList.add("green");
        setTimeout(() => rock_img.classList.remove("green"), 400);
        break;
      case "scissors":
        scissors_img.classList.add("green");
        setTimeout(() => scissors_img.classList.remove("green"), 400);
        break;
      case "paper":
        paper_img.classList.add("green");
        setTimeout(() => paper_img.classList.remove("green"), 400);
        break;
      default:
        break;
    }
  } else if (flag === 0) {
    switch (my_value) {
      case "rock":
        rock_img.classList.add("red");
        setTimeout(() => rock_img.classList.remove("red"), 400);
        break;
      case "scissors":
        scissors_img.classList.add("red");
        setTimeout(() => scissors_img.classList.remove("red"), 400);
        break;
      case "paper":
        paper_img.classList.add("red");
        setTimeout(() => paper_img.classList.remove("red"), 400);
        break;
      default:
        break;
    }
  } else if (flag === -1) {
    switch (my_value) {
      case "rock":
        rock_img.classList.add("grey");
        setTimeout(() => rock_img.classList.remove("grey"), 400);
        break;
      case "scissors":
        scissors_img.classList.add("grey");
        setTimeout(() => scissors_img.classList.remove("grey"), 400);
        break;
      case "paper":
        paper_img.classList.add("grey");
        setTimeout(() => paper_img.classList.remove("grey"), 400);
        break;
      default:
        break;
    }
  } else {
  }
}

// Event Listners
  rock_img.addEventListener("click", function() {
    game("rock", generate_C_choice());
  });

  paper_img.addEventListener("click", function() {
    game("paper", generate_C_choice());
  });

  scissors_img.addEventListener("click", function() {
    game("scissors", generate_C_choice());
  });

// check level

function check_level(level) {
  if (level === 11) {
    var child1 = document.getElementById("rock");
    var child2 = document.getElementById("paper");
    var child3 = document.getElementById("scissors");
    child1.parentNode.removeChild(child1);
    child2.parentNode.removeChild(child2);
    child3.parentNode.removeChild(child3);
    if (h_total > c_total) {
      announcer.innerText = "Hurray! You are the champion !";
    } else if (h_total < c_total) {
      announcer.innerText = "So sad you lost !";
    } else if (h_total === c_total) {
      announcer.innerText = "Scores tied it's a Draw";
    } else {
      announcer.innerText = "Something is wrong!";
    }
  }
}

function generate_C_choice() {
  var random_value = getRandomInt();
  var z = "";

  if (random_value === 1) {
    z = "rock";
  } else if (random_value === 2) {
    z = "paper";
  } else if (random_value === 3) {
    z = "scissors";
  } else {
  }
  return z;
}
