const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const generateBtn = document.getElementById("generate-btn");
const passwordOne = document.getElementById("password-one");
const passwordTwo = document.getElementById("password-two");

generateBtn.addEventListener("click", () => {
  let randomOne = "";
  let randomTwo = "";

  for (let i = 0; i < 10; i++) {
    randomOne += characters[Math.floor(Math.random() * characters.length)];
    randomTwo += characters[Math.floor(Math.random() * characters.length)];
  }

  passwordOne.textContent = randomOne;
  passwordTwo.textContent = randomTwo;
});

//! MAKE THE PASSWORDS COPIABLE

passwordOne.onclick = function () {
  document.execCommand("copy");
};

passwordOne.addEventListener("copy", function (event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", passwordOne.textContent);
    console.log(event.clipboardData.getData("text"));
  }
});

passwordTwo.onclick = function () {
  document.execCommand("copy");
};

passwordTwo.addEventListener("copy", function (event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", passwordTwo.textContent);
    console.log(event.clipboardData.getData("text"));
  }
});
