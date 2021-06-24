
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
  let logo_Img = document.getElementById('logo_Img');
  logo_Img.src = "images/designs/logo.png";

  let workspace_Img = document.getElementById('workspace_Img');
  workspace_Img.src = "images/designs/workspace1.png";
}

function changeToBlue() {
  for (i = 0; i < textColor_Change.length; i++) {
    textColor_Change[i].style.color = "#5271ff";
  }
  for (i = 0; i < borderColor_Change.length; i++) {
    borderColor_Change[i].style.borderColor = "#5271ff";
  }
  let logo_Img = document.getElementById('logo_Img');
  logo_Img.src = "images/designs/logo4.png";

  let workspace_Img = document.getElementById('workspace_Img');
  workspace_Img.src = "images/designs/workspace4.png";
}

function changeToRed() {
  for (i = 0; i < textColor_Change.length; i++) {
    textColor_Change[i].style.color = "#ff5757";
  }
  for (i = 0; i < borderColor_Change.length; i++) {
    borderColor_Change[i].style.borderColor = "#ff5757";
  }
  let logo_Img = document.getElementById('logo_Img');
  logo_Img.src = "images/designs/logo2.png";

  let workspace_Img = document.getElementById('workspace_Img');
  workspace_Img.src = "images/designs/workspace2.png";
}

function changeToGreen() {
  for (i = 0; i < textColor_Change.length; i++) {
    textColor_Change[i].style.color = "#7ed957";
  }
  for (i = 0; i < borderColor_Change.length; i++) {
    borderColor_Change[i].style.borderColor = "#7ed957";
  }
  let logo_Img = document.getElementById('logo_Img');
  logo_Img.src = "images/designs/logo3.png";

  let workspace_Img = document.getElementById('workspace_Img');
  workspace_Img.src = "images/designs/workspace3.png";
}

function changeToYellow() {
  for (i = 0; i < textColor_Change.length; i++) {
    textColor_Change[i].style.color = "#ffde59";
  }
  for (i = 0; i < borderColor_Change.length; i++) {
    borderColor_Change[i].style.borderColor = "#ffde59";
  }
  let logo_Img = document.getElementById('logo_Img');
  logo_Img.src = "images/designs/logo5.png";

  let workspace_Img = document.getElementById('workspace_Img');
  workspace_Img.src = "images/designs/workspace5.png";
}


/*
Not working correctly. Will need to change

function randomColors() {
  let color = ['textColor_Change', 'blue_Color', 'red_Color', 'green_Color']
  let borderColor = ['default_BorderColor', 'blue_BorderColor', 'red_BorderColor', 'green_BorderColor']

  for (let i=0; i < textColor_Change.length; i ++) {
    let randomNumber = Math.floor(Math.random() * 4);
    textColor_Change[i].classList.remove(textColor_Change[i].classList[0]);
    textColor_Change[i].classList.add(color[randomNumber]);
  }
  for (let i=0; i < borderColor_Change.length; i ++) {
    let randomNumber = Math.floor(Math.random() * 4);
    borderColor_Change[i].classList.remove(borderColor_Change[i].classList[0]);
    borderColor_Change[i].classList.add(borderColor[randomNumber]);
  }
}*/