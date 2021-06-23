
$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
  });
  
let textColor_Change = document.getElementsByClassName('textColor_Change');
let borderColor_Change = document.getElementsByClassName('borderColor_Change');

function changeToDefault() {
  for (i = 0; i < textColor_Change.length; i++) {
    textColor_Change[i].style.color = "#8c52ff";
  }
  for (i = 0; i < borderColor_Change.length; i++) {
    borderColor_Change[i].style.borderColor = "#8c52ff";
  }
}

function changeToBlue() {
  for (i = 0; i < textColor_Change.length; i++) {
    textColor_Change[i].style.color = "blue";
  }
  for (i = 0; i < borderColor_Change.length; i++) {
    borderColor_Change[i].style.borderColor = "blue";
  }
}

function changeToRed() {
  for (i = 0; i < textColor_Change.length; i++) {
    textColor_Change[i].style.color = "red";
  }
  for (i = 0; i < borderColor_Change.length; i++) {
    borderColor_Change[i].style.borderColor = "red";
  }
}

function changeToGreen() {
  for (i = 0; i < textColor_Change.length; i++) {
    textColor_Change[i].style.color = "green";
  }
  for (i = 0; i < borderColor_Change.length; i++) {
    borderColor_Change[i].style.borderColor = "green";
  }
}


function randomColors() {
  let colors = ['textColor_Change', 'blue_Color', 'red_Color', 'Green_Color']

  for (let i=0; i < textColor_Change.length; i ++) {
      let randomNumber = Math.floor(Math.random() * 4);
      textColor_Change[i].classList.remove(textColor_Change[i].classList[0]);
      textColor_Change[i].classList.add(colors[randomNumber]);
  }
  for (let i=0; i < borderColor_Change.length; i ++) {
    let randomNumber = Math.floor(Math.random() * 4);
    borderColor_Change[i].classList.remove(borderColor_Change[i].classList[0]);
    borderColor_Change[i].classList.add(colors[randomNumber]);
  }
}