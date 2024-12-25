window.onload = function() {
    var texts = ['teacher', 'Web Designer', 'Computer Engineer', 'Frontend Developer', 'Backend Developer']; 
    var textIndex = 0;
    var typingDelay = 100;
    var blinkDelay = 1500; 
  
    function typeText() {
      var text = texts[textIndex];
      var typingElement = document.getElementById('typing-text');
      var cursorElement = document.getElementById('blinking-cursor');
  
      var i = 0;
      var interval = setInterval(function() {
        typingElement.textContent += text[i];
        i++;
  
        if (i === text.length) {
          clearInterval(interval);
          setTimeout(function() {
            typingElement.textContent = '';
            cursorElement.style.display = 'none';
  
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeText, blinkDelay);
          }, blinkDelay);
        }
      }, typingDelay);
    }
  
    typeText();
  };


// circle skill ///////////////////////////////////

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor(dots*marked/100);
  var points = "";
  var rotate = 360 / dots;


  for(let i = 0 ; i < dots ; i++){
    points += `<div class="points" style="--i:${i};--rot:${rotate}deg"></div>`;
  }
  elem.innerHTML=points;

  const pointsMarked=elem.querySelectorAll('.points');
  for(let i = 0; i<percent; i++){
    pointsMarked[i].classList.add('marked')
  }
})


var mixitup = mixitup('.portfolio-gallery');


// active menu ///////////////////////////////////

let menuli = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuli.forEach(sec => sec.classList.remove("active"));
    menuli[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

// sticky navbar ///////////////////////////////////

window.addEventListener('scroll',function(){
  var header = document.querySelector('header');
  var scrollPosition = window.scrollY;

  if(scrollPosition > 0){
    header.classList.add('sticky');
  }else{
    header.classList.remove('sticky');
  }
});

// toggle icon navbar ///////////////////////////////////

let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector("#navList");

function toggleMenu() {
    navList.classList.toggle("open");
    menuIcon.classList.toggle("bx-x");
}

menuIcon.addEventListener("click", toggleMenu);


