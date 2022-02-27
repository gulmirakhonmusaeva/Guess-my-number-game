let again = document.querySelector(".again"),
  text = document.querySelector(".text"),
  check = document.querySelector(".check"),
  scoreEl = document.querySelector(".score"),
  mynumber = document.querySelector(".mynumber"),
  result = document.querySelector(".result"),
  randomNumber = Math.floor(Math.random() * 20 + 1),
  highscoreEl = document.querySelector(".highscore");

console.log(randomNumber);

let highscore = 0;
let score = 20;

check.addEventListener("click", () => {
  let inputValue = +mynumber.value;

  if (inputValue) {
    if (randomNumber === inputValue) {
      text.textContent = `You are win!`;
      document.body.classList.add("win");
      result.classList.add("win");
      result.textContent = randomNumber;
      if (highscore < score) {
        highscoreEl.textContent = score;
      }
    } else if (randomNumber < inputValue) {
      text.textContent = `You guess is too high !`;
    } else {
      text.textContent = `You guess is too low !`;
    }
    score--;
    scoreEl.textContent = score;
  } else {
    text.textContent = `N⛔ Number`;
  }
});

again.addEventListener("click", newagain);

function newagain() {
  text.textContent = `gessing number....`;
  document.body.classList.remove("win");
  result.classList.remove("win");
  result.textContent = "?";
  randomNumber = Math.floor(Math.random() * 20 + 1);
  mynumber.value = "";
  score = 20;
  scoreEl.textContent = score;
}
