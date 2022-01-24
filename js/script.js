
$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
  });

//Colour Change Start

/* Obsolete Code. Replaced by CSS Var
let buttonColor_Change = document.getElementsByTagName('button');
let textColor_Change = document.getElementsByClassName('textColor_Change');
let borderColor_Change = document.getElementsByClassName('borderColor_Change');
let borderLinkColor_Change = document.getElementsByClassName('borderLinkColor_Change');
let linkColor_Change = document.getElementsByTagName('a');
*/

const root = document.querySelector(":root");

function changeToDefault() {
  /* Obsolete Code
  for (i = 0; i < buttonColor_Change.length; i++) {
    buttonColor_Change[i].classList.remove("link-blue", "link-red", "link-green", "link-yellow");
    buttonColor_Change[i].classList.add("link-default");
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
    for (i = 0; i < linkColor_Change.length; i++) {
    linkColor_Change[i].classList.remove("link-blue", "link-red", "link-green", "link-yellow");
    linkColor_Change[i].classList.add("link-default");
  }
  */
  let logo_Img = document.getElementById('logo_Img');
  logo_Img.src = "img/designs/logo.png";

  let contact_Img = document.getElementById('contact_Img');
  contact_Img.src = "img/designs/logo.png";

  let workspace_Img = document.getElementById('workspace_Img');
  workspace_Img.src = "img/designs/workspace1.png";

  root.style.setProperty("--pseudo-color", '#8c52ff');
}

function changeToBlue() {
  /* Obsolete Code
  for (i = 0; i < buttonColor_Change.length; i++) {
    buttonColor_Change[i].classList.remove("link-default","link-red", "link-green", "link-yellow");
    buttonColor_Change[i].classList.add("link-blue");
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
    for (i = 0; i < linkColor_Change.length; i++) {
    linkColor_Change[i].classList.remove("link-default","link-red", "link-green", "link-yellow");
    linkColor_Change[i].classList.add("link-blue");
  }
  */
  let logo_Img = document.getElementById('logo_Img');
  logo_Img.src = "img/designs/logo4.png";
  
  let contact_Img = document.getElementById('contact_Img');
  contact_Img.src = "img/designs/logo4.png";
  
  let workspace_Img = document.getElementById('workspace_Img');
  workspace_Img.src = "img/designs/workspace4.png";

  root.style.setProperty("--pseudo-color", '#5271ff');
}

function changeToRed() {
  /* Obsolete Code
  for (i = 0; i < buttonColor_Change.length; i++) {
    buttonColor_Change[i].classList.remove("link-default","link-blue", "link-green", "link-yellow");
    buttonColor_Change[i].classList.add("link-red");
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
    for (i = 0; i < linkColor_Change.length; i++) {
    linkColor_Change[i].classList.remove("link-default","link-blue", "link-green", "link-yellow");
    linkColor_Change[i].classList.add("link-red");
  }
  */ 
  let logo_Img = document.getElementById('logo_Img');
  logo_Img.src = "img/designs/logo2.png";

  let contact_Img = document.getElementById('contact_Img');
  contact_Img.src = "img/designs/logo2.png";

  let workspace_Img = document.getElementById('workspace_Img');
  workspace_Img.src = "img/designs/workspace2.png";

  root.style.setProperty("--pseudo-color", '#ff5757');
}

function changeToGreen() {
  /* Obsolete Code
  for (i = 0; i < buttonColor_Change.length; i++) {
    buttonColor_Change[i].classList.remove("link-default","link-red", "link-blue", "link-yellow");
    buttonColor_Change[i].classList.add("link-green");
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
    for (i = 0; i < linkColor_Change.length; i++) {
    linkColor_Change[i].classList.remove("link-default","link-red", "link-blue", "link-yellow");
    linkColor_Change[i].classList.add("link-green");
  }
  */
  let logo_Img = document.getElementById('logo_Img');
  logo_Img.src = "img/designs/logo3.png";

  let contact_Img = document.getElementById('contact_Img');
  contact_Img.src = "img/designs/logo3.png";

  let workspace_Img = document.getElementById('workspace_Img');
  workspace_Img.src = "img/designs/workspace3.png";

  root.style.setProperty("--pseudo-color", '#7ed957');
}

function changeToYellow() {
  /* Obsolete Code
  for (i = 0; i < buttonColor_Change.length; i++) {
    buttonColor_Change[i].classList.remove("link-default","link-red", "link-green", "link-blue");
    buttonColor_Change[i].classList.add("link-yellow");
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
    for (i = 0; i < linkColor_Change.length; i++) {
    linkColor_Change[i].classList.remove("link-default","link-red", "link-green", "link-blue");
    linkColor_Change[i].classList.add("link-yellow");
  }
  */
  let logo_Img = document.getElementById('logo_Img');
  logo_Img.src = "img/designs/logo5.png";

  let contact_Img = document.getElementById('contact_Img');
  contact_Img.src = "img/designs/logo5.png";

  let workspace_Img = document.getElementById('workspace_Img');
  workspace_Img.src = "img/designs/workspace5.png";

  root.style.setProperty("--pseudo-color", '#ffde59');
}

//Colour Change End

//Review Cycle Start

const reviews = [
  {
    id: 1,
    name: "Ciaran Gravestock",
    job: "University of Birmingham: Creative Media Student",
    img: "https://ciarangravestock.co.uk/images/frosty-1.jpg",
    text: "Tom was a real pleasure to work with. I sent him across a few designsof how I wanted each page to look and he turned it into a real functioning website.I would definitely be up for working with him again.",
  },
  {
    id: 2,
    name: "Placeholder Name",
    job: "Placeholder Occupation",
    img: "img/designs/logo.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ex commodo consequat."},
];

const reviewName = document.getElementById('review_Name');
const reviewJob = document.getElementById('review_Job');
const reviewImg = document.getElementById('review_Img');
const reviewDescrip = document.getElementById('review_Descrip');

const prevBtn = document.querySelector('.prev_Btn');
const nextBtn = document.querySelector('.next_Btn');
const randomBtn = document.querySelector('.random_Btn');

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
  reviewCycle(currentItem);
});

function reviewCycle() {
  const item = reviews[currentItem];
  reviewName.textContent = item.name;
  reviewJob.textContent = item.job;
  reviewDescrip.textContent = item.text;
  reviewImg.src = item.img;
};

prevBtn.addEventListener('click', function(){
  currentItem--
  if(currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  reviewCycle();
});

nextBtn.addEventListener('click', function(){
  currentItem++
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  reviewCycle();
});

randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * reviews.length);
  reviewCycle();
})

//Review Cycle End

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