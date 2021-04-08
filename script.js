var inputElement;
var outputElement;
var button;

window.addEventListener('DOMContentLoaded', function() {
  inputElement = document.getElementById("fortuneInput");
  outputElement = document.getElementById("fortuneOutput");
  button = document.getElementById("fortuneButton");

  fortuneButton.addEventListener("click", fortune);
});


function fortune() {

  var fortunes = ["you're about to have an amazing day!", "great opportunities are coming your way :)", "don't overwork yourself! You deserve to take a break :)", "you're so close to success!", "your hard work is about to pay off!"]
  var randFortuneIndex = Math.floor(Math.random() * fortunes.length);
  var chosenFortune = fortunes[randFortuneIndex];

  var currentInputText = inputElement.value;
  var finalOutput = currentInputText + ", " + chosenFortune;

  if (currentInputText == "") {
    outputElement.innerText = "Please type in your name!";
  } else {
    outputElement.innerText = finalOutput;
    restyle(outputElement);
  }

}


function restyle(text) {

  var randomRed = Math.random() * 255 + 25;
  var randomGreen = Math.random() * 255 + 25;
  var randomBlue = Math.random() * 255 + 25;
  var colorMod = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  text.style.color = colorMod;


  var fontStyles = ["normal", "italic", "oblique"]
  var randFontStyleIdex = Math.floor(Math.random() * fontStyles.length);
  var randFontStyle = fontStyles[randFontStyleIdex];
  text.style.fontStyle = randFontStyle;

  var fontFam = ["Helvetica", "Courier New", "Times New Roman", "Trebuchet MS"]
  var randFontFamIndex = Math.floor(Math.random() * fontFam.length);
  var randFontFam = fontFam[randFontFamIndex];
  text.style.fontFamily = randFontFam;

  text.style.transition = "0.5s";

}
