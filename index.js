const x_oE1 = document.querySelector(".content");
const win_box = document.getElementById("win");
const player = document.getElementById("users");
const containerE1 = document.querySelector(".container");
const ticE1 = document.getElementById("tic");
const tacE1 = document.getElementById("tac");
const toeE1 = document.getElementById("toe");

let arr = new Array([9, 9, 9], [9, 9, 9], [9, 9, 9]);
let count = 0;
let check;
function myfunc(game) {
  if (count % 2 == 0) {
    if (game.innerHTML == "") {
      game.innerHTML = "X"; //-----> user_1 -> X
      let choice = game.id;
      switch (choice) {
        case "one": {
          arr[0][0] = 1;
          // winning condition checking part for user_1
          if (
            (arr[0][0] == 1 && arr[0][1] == 1 && arr[0][2] == 1) ||
            (arr[0][0] == 1 && arr[1][0] == 1 && arr[2][0] == 1) ||
            (arr[0][0] == 1 && arr[1][1] == 1 && arr[2][2] == 1)
          ) {
            user_1_win();
          }
          break;
        }
        case "two": {
          arr[0][1] = 1;
          if (
            (arr[0][1] == 1 && arr[0][0] == 1 && arr[0][2] == 1) ||
            (arr[0][1] == 1 && arr[1][1] == 1 && arr[2][1] == 1)
          ) {
            user_1_win();
          }
          break;
        }
        case "three": {
          arr[0][2] = 1;
          if (
            (arr[0][2] == 1 && arr[0][1] == 1 && arr[0][0] == 1) ||
            (arr[0][2] == 1 && arr[1][1] == 1 && arr[2][0] == 1) ||
            (arr[0][2] == 1 && arr[1][2] == 1 && arr[2][2] == 1)
          ) {
            user_1_win();
          }
          break;
        }
        case "four": {
          arr[1][0] = 1;
          if (
            (arr[1][0] == 1 && arr[0][0] == 1 && arr[2][0] == 1) ||
            (arr[1][0] == 1 && arr[1][1] == 1 && arr[1][2] == 1)
          ) {
            user_1_win();
          }
          break;
        }
        case "five": {
          arr[1][1] = 1;
          if (
            (arr[1][1] == 1 && arr[0][0] == 1 && arr[2][2] == 1) ||
            (arr[1][1] == 1 && arr[2][0] == 1 && arr[0][2] == 1) ||
            (arr[1][1] == 1 && arr[0][1] == 1 && arr[2][1] == 1) ||
            (arr[1][1] == 1 && arr[1][0] == 1 && arr[1][2] == 1)
          ) {
            user_1_win();
          }
          break;
        }
        case "six": {
          arr[1][2] = 1;
          if (
            (arr[1][2] == 1 && arr[0][2] == 1 && arr[2][2] == 1) ||
            (arr[1][2] == 1 && arr[1][0] == 1 && arr[1][1] == 1)
          ) {
            user_1_win();
          }
          break;
        }
        case "seven": {
          arr[2][0] = 1;
          if (
            (arr[2][0] == 1 && arr[1][0] == 1 && arr[0][0] == 1) ||
            (arr[2][0] == 1 && arr[2][1] == 1 && arr[2][2] == 1) ||
            (arr[2][0] == 1 && arr[1][1] == 1 && arr[0][2] == 1)
          ) {
            user_1_win();
          }
          break;
        }
        case "eight": {
          arr[2][1] = 1;
          if (
            (arr[2][1] == 1 && arr[1][1] == 1 && arr[0][1] == 1) ||
            (arr[2][1] == 1 && arr[2][0] == 1 && arr[2][2] == 1)
          ) {
            user_1_win();
          }
          break;
        }
        case "nine": {
          arr[2][2] = 1;
          if (
            (arr[2][2] == 1 && arr[1][2] == 1 && arr[0][2] == 1) ||
            (arr[2][2] == 1 && arr[1][1] == 1 && arr[0][0] == 1) ||
            (arr[2][2] == 1 && arr[2][1] == 1 && arr[2][0] == 1)
          ) {
            user_1_win();
          }
          break;
        }
        default: {
          alert("===hey error===");
          break;
        }
      }
    } else {
      alert("already chosen");
    }

    count = count + 1;
  } else {
    if (game.innerHTML == "") {
      game.innerHTML = "O"; //-----> user_2 -> O
      let choice = game.id;
      switch (choice) {
        case "one": {
          arr[0][0] = 0;
          // winning condition checking part for user_2
          if (
            (arr[0][0] == 0 && arr[0][1] == 0 && arr[0][2] == 0) ||
            (arr[0][0] == 0 && arr[1][0] == 0 && arr[2][0] == 0) ||
            (arr[0][0] == 0 && arr[1][1] == 0 && arr[2][2] == 0)
          ) {
            user_2_win();
          }
          break;
        }
        case "two": {
          arr[0][1] = 0;
          if (
            (arr[0][1] == 0 && arr[0][0] == 0 && arr[0][2] == 0) ||
            (arr[0][1] == 0 && arr[1][1] == 0 && arr[2][1] == 0)
          ) {
            user_2_win();
          }
          break;
        }
        case "three": {
          arr[0][2] = 0;
          if (
            (arr[0][2] == 0 && arr[0][1] == 0 && arr[0][0] == 0) ||
            (arr[0][2] == 0 && arr[1][1] == 0 && arr[2][0] == 0) ||
            (arr[0][2] == 0 && arr[1][2] == 0 && arr[2][2] == 0)
          ) {
            user_2_win();
          }
          break;
        }
        case "four": {
          arr[1][0] = 0;
          if (
            (arr[1][0] == 0 && arr[0][0] == 0 && arr[2][0] == 0) ||
            (arr[1][0] == 0 && arr[1][1] == 0 && arr[1][2] == 0)
          ) {
            user_2_win();
          }
          break;
        }
        case "five": {
          arr[1][1] = 0;
          if (
            (arr[1][1] == 0 && arr[0][0] == 0 && arr[2][2] == 0) ||
            (arr[1][1] == 0 && arr[2][0] == 0 && arr[0][2] == 0) ||
            (arr[1][1] == 0 && arr[0][1] == 0 && arr[2][1] == 0) ||
            (arr[1][1] == 0 && arr[1][0] == 0 && arr[1][2] == 0)
          ) {
            user_2_win();
          }
          break;
        }
        case "six": {
          arr[1][2] = 0;
          if (
            (arr[1][2] == 0 && arr[0][2] == 0 && arr[2][2] == 0) ||
            (arr[1][2] == 0 && arr[1][0] == 0 && arr[1][1] == 0)
          ) {
            user_2_win();
          }
          break;
        }
        case "seven": {
          arr[2][0] = 0;
          if (
            (arr[2][0] == 0 && arr[1][0] == 0 && arr[0][0] == 0) ||
            (arr[2][0] == 0 && arr[2][1] == 0 && arr[2][2] == 0) ||
            (arr[2][0] == 0 && arr[1][1] == 0 && arr[0][2] == 0)
          ) {
            user_2_win();
          }
          break;
        }
        case "eight": {
          arr[2][1] = 0;
          if (
            (arr[2][1] == 0 && arr[1][1] == 0 && arr[0][1] == 0) ||
            (arr[2][1] == 0 && arr[2][0] == 0 && arr[2][2] == 0)
          ) {
            user_2_win();
          }
          break;
        }
        case "nine": {
          arr[2][2] = 0;
          if (
            (arr[2][2] == 0 && arr[1][2] == 0 && arr[0][2] == 0) ||
            (arr[2][2] == 0 && arr[1][1] == 0 && arr[0][0] == 0) ||
            (arr[2][2] == 0 && arr[2][1] == 0 && arr[2][0] == 0)
          ) {
            user_2_win();
          }
          break;
        }
        default: {
          alert("===hey error===");
          break;
        }
      }
    } else {
      alert("already chosen");
    }
    count = count + 1;
  }
}

// win for user_1
function user_1_win() {
  player.innerText = "X";
  win_box.style.visibility = "visible";
  containerE1.style.opacity = "0.4";
  check = 1;
}
// win for user_2
function user_2_win() {
  player.innerText = "O";
  win_box.style.visibility = "visible";
  containerE1.style.opacity = "0.4";
  check = 1;
}
// hidding winner box
function hide() {
  win_box.style.visibility = "hidden";
  restart();
}

// restart game
function restart() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      arr[i][j] = 9;
    }
  }
  document.getElementById("one").innerHTML = "";
  document.getElementById("two").innerHTML = "";
  document.getElementById("three").innerHTML = "";
  document.getElementById("four").innerHTML = "";
  document.getElementById("five").innerHTML = "";
  document.getElementById("six").innerHTML = "";
  document.getElementById("seven").innerHTML = "";
  document.getElementById("eight").innerHTML = "";
  document.getElementById("nine").innerHTML = "";

  count = 0;
  containerE1.style.opacity = "1";
}

//animations-----------------------
function tic() {
  ticE1.style.color = "#72aee6";
  ticE1.style.fontSize = "2rem";
}
function tac() {
  tacE1.style.color = "#3582c4";
  tacE1.style.fontSize = "2rem";
}
function toe() {
  toeE1.style.color = "#135e96";
  toeE1.style.fontSize = "2rem";
}
function tic_rev() {
  ticE1.style.color = "#72aee6";
  ticE1.style.fontSize = "0.2rem";
  ticE1.style.transition = "all 2s ease-in-out";
}
function tac_rev() {
  tacE1.style.color = "#3582c4";
  tacE1.style.fontSize = "0.2rem";
  tacE1.style.transition = "all 2s ease-in-out";
}
function toe_rev() {
  toeE1.style.color = "#135e96";
  toeE1.style.fontSize = "0.2rem";
  toeE1.style.transition = "all 2s ease-in-out";
}

setInterval(tic, 1000);
setInterval(tac, 1000);
setInterval(toe, 1000);
setInterval(tic_rev, 4000);
setInterval(tac_rev, 4000);
setInterval(toe_rev, 4000);
console.log(check);
