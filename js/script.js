
$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
  });

let buttonColor_Change = document.getElementsByClassName('btn_Style');
let textColor_Change = document.getElementsByClassName('textColor_Change');
let borderColor_Change = document.getElementsByClassName('borderColor_Change');
let borderLinkColor_Change = document.getElementsByClassName('borderLinkColor_Change');
let linkColor_Change = document.getElementsByTagName('a');

function changeToDefault() {
  for (i = 0; i < buttonColor_Change.length; i++) {
    buttonColor_Change[i].style.color = "#8c52ff";
  }
  for (i = 0; i < textColor_Change.length; i++) {
    textColor_Change[i].style.color = "#8c52ff";
  }
  for (i = 0; i < borderColor_Change.length; i++) {
    borderColor_Change[i].style.borderColor = "#8c52ff";
  }
  for (i=0; i < borderLinkColor_Change.length; i++) {
    borderLinkColor_Change[i].style.borderColor = "#8c52ff";
  }
  let logo_Img = document.getElementById('logo_Img');
  logo_Img.src = "img/designs/logo.png";

  let contact_Img = document.getElementById('contact_Img');
  contact_Img.src = "img/designs/logo.png";

  let workspace_Img = document.getElementById('workspace_Img');
  workspace_Img.src = "img/designs/workspace1.png";

  for (i = 0; i < linkColor_Change.length; i++) {
    linkColor_Change[i].classList.remove("link-blue", "link-red", "link-green", "link-yellow");
    linkColor_Change[i].classList.add("link-default");
  }
}

function changeToBlue() {
  for (i = 0; i < buttonColor_Change.length; i++) {
    buttonColor_Change[i].style.color = "#5271ff";
  }
  for (i = 0; i < textColor_Change.length; i++) {
    textColor_Change[i].style.color = "#5271ff";
  }
  for (i = 0; i < borderColor_Change.length; i++) {
    borderColor_Change[i].style.borderColor = "#5271ff";
  }
  for (i=0; i < borderLinkColor_Change.length; i++) {
    borderLinkColor_Change[i].style.borderColor = "#5271ff";
  }
  let logo_Img = document.getElementById('logo_Img');
  logo_Img.src = "img/designs/logo4.png";
  
  let contact_Img = document.getElementById('contact_Img');
  contact_Img.src = "img/designs/logo4.png";

  let workspace_Img = document.getElementById('workspace_Img');
  workspace_Img.src = "img/designs/workspace4.png";

  for (i = 0; i < linkColor_Change.length; i++) {
    linkColor_Change[i].classList.remove("link-default","link-red", "link-green", "link-yellow");
    linkColor_Change[i].classList.add("link-blue");
  }
}

function changeToRed() {
  for (i = 0; i < buttonColor_Change.length; i++) {
    buttonColor_Change[i].style.color = "#ff5757";
  }
  for (i = 0; i < textColor_Change.length; i++) {
    textColor_Change[i].style.color = "#ff5757";
  }
  for (i = 0; i < borderColor_Change.length; i++) {
    borderColor_Change[i].style.borderColor = "#ff5757";
  }
  for (i=0; i < borderLinkColor_Change.length; i++) {
    borderLinkColor_Change[i].style.borderColor = "#ff5757";
  }
  let logo_Img = document.getElementById('logo_Img');
  logo_Img.src = "img/designs/logo2.png";

  let contact_Img = document.getElementById('contact_Img');
  contact_Img.src = "img/designs/logo2.png";

  let workspace_Img = document.getElementById('workspace_Img');
  workspace_Img.src = "img/designs/workspace2.png";

  for (i = 0; i < linkColor_Change.length; i++) {
    linkColor_Change[i].classList.remove("link-default","link-blue", "link-green", "link-yellow");
    linkColor_Change[i].classList.add("link-red");
  }
}

function changeToGreen() {
  for (i = 0; i < buttonColor_Change.length; i++) {
    buttonColor_Change[i].style.color = "#7ed957";
  }
  for (i = 0; i < textColor_Change.length; i++) {
    textColor_Change[i].style.color = "#7ed957";
  }
  for (i = 0; i < borderColor_Change.length; i++) {
    borderColor_Change[i].style.borderColor = "#7ed957";
  }
  for (i=0; i < borderLinkColor_Change.length; i++) {
    borderLinkColor_Change[i].style.borderColor = "#7ed957";
  }
  let logo_Img = document.getElementById('logo_Img');
  logo_Img.src = "img/designs/logo3.png";

  let contact_Img = document.getElementById('contact_Img');
  contact_Img.src = "img/designs/logo3.png";

  let workspace_Img = document.getElementById('workspace_Img');
  workspace_Img.src = "img/designs/workspace3.png";

  for (i = 0; i < linkColor_Change.length; i++) {
    linkColor_Change[i].classList.remove("link-default","link-red", "link-blue", "link-yellow");
    linkColor_Change[i].classList.add("link-green");
  }
}

function changeToYellow() {
  for (i = 0; i < buttonColor_Change.length; i++) {
    buttonColor_Change[i].style.color = "#ffde59";
  }
  for (i = 0; i < textColor_Change.length; i++) {
    textColor_Change[i].style.color = "#ffde59";
  }
  for (i = 0; i < borderColor_Change.length; i++) {
    borderColor_Change[i].style.borderColor = "#ffde59";
  }
  for (i=0; i < borderLinkColor_Change.length; i++) {
    borderLinkColor_Change[i].style.borderColor = "#ffde59";
  }
  let logo_Img = document.getElementById('logo_Img');
  logo_Img.src = "img/designs/logo5.png";

  let contact_Img = document.getElementById('contact_Img');
  contact_Img.src = "img/designs/logo5.png";

  let workspace_Img = document.getElementById('workspace_Img');
  workspace_Img.src = "img/designs/workspace5.png";

  for (i = 0; i < linkColor_Change.length; i++) {
    linkColor_Change[i].classList.remove("link-default","link-red", "link-green", "link-blue");
    linkColor_Change[i].classList.add("link-yellow");
  }
}

/*window.addEventListener('scroll',()=>{
  let content = document.getElementById('intro');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(contentPosition < screenPosition){
    content.classList.add('activeIntro');
  } else {
    content.classList.remove('activeIntro');
  }
})*/