
$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
  });

//Colour Change Start

const defaultBtn = document.querySelector('#default_Btn').addEventListener('click', changeToDefault);
const blueBtn = document.querySelector('#blue_Btn').addEventListener('click', changeToBlue);
const redBtn = document.querySelector('#red_Btn').addEventListener('click', changeToRed);
const greenBtn = document.querySelector('#green_Btn').addEventListener('click', changeToGreen);
const yellowBtn = document.querySelector('#yellow_Btn').addEventListener('click', changeToYellow);

const root = document.querySelector(":root");

function changeToDefault() {

  let logo_Img = document.getElementById('logo_Img');
  logo_Img.src = "img/designs/logo.png";

  let contact_Img = document.getElementById('contact_Img');
  contact_Img.src = "img/designs/logo.png";

  let workspace_Img = document.getElementById('workspace_Img');
  workspace_Img.src = "img/designs/workspace1.png";

  root.style.setProperty("--pseudo-color", '#8c52ff');
}

function changeToBlue() {

  let logo_Img = document.getElementById('logo_Img');
  logo_Img.src = "img/designs/logo4.png";
  
  let contact_Img = document.getElementById('contact_Img');
  contact_Img.src = "img/designs/logo4.png";
  
  let workspace_Img = document.getElementById('workspace_Img');
  workspace_Img.src = "img/designs/workspace4.png";

  root.style.setProperty("--pseudo-color", '#5271ff');
}

function changeToRed() {

  let logo_Img = document.getElementById('logo_Img');
  logo_Img.src = "img/designs/logo2.png";

  let contact_Img = document.getElementById('contact_Img');
  contact_Img.src = "img/designs/logo2.png";

  let workspace_Img = document.getElementById('workspace_Img');
  workspace_Img.src = "img/designs/workspace2.png";

  root.style.setProperty("--pseudo-color", '#ff5757');
}

function changeToGreen() {

  let logo_Img = document.getElementById('logo_Img');
  logo_Img.src = "img/designs/logo3.png";

  let contact_Img = document.getElementById('contact_Img');
  contact_Img.src = "img/designs/logo3.png";

  let workspace_Img = document.getElementById('workspace_Img');
  workspace_Img.src = "img/designs/workspace3.png";

  root.style.setProperty("--pseudo-color", '#7ed957');
}

function changeToYellow() {

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

//Animations On Scroll Start

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

//Animations On Scroll End