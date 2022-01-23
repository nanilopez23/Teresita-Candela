//variables
//var navbar
let menuToggle = document.querySelector(".menu-toggle");
let menuClose = document.querySelector(".menu-close");
let menu = document.querySelector(".menu");
let navLinks = Array.from(document.querySelectorAll(".nav-link"));

const faders = document.querySelectorAll(".fade-in");
const cursorEl = document.querySelector(".js-cursor");
const isClickedClass = "is-clicked";
const isHiddenClass = "is-hidden";
const isLinkHoveredClass = "is-link-hovered";
const hascustomCursorClass = "has-custom-cursor";

//var splash screen 
let intro = document.querySelector(".intro"); 
let logo1 = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo1");

//splash screen
window.addEventListener('DOMContentLoaded', () => {

    setTimeout(()=> {

      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add("active");
        }, (idx + 1) * 400)
      });

      setTimeout(()=>{
        logoSpan.forEach((span, idx) =>{
            setTimeout(()=>{
                span.classList.remove('active');
                span.classList.add('fade');
            },(idx + 1) * 50)
        })
    },2000)

    setTimeout(()=>{
      intro.style.top = '-100vh';
      
  },3500)

    })
})




//navbar
menuToggle.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

function openMenu(){
  menu.classList.add("active");

  navLinks.forEach((link, idx) => {
    setTimeout(() => {
      link.classList.add("active");
    }, idx * 100)
  })
}

function closeMenu(){
  menu.classList.remove("active");

  setTimeout(()=> {
    navLinks.forEach(link => link.classList.remove("active"));
  }, 100)
}

//revisa si el dispositivo es tactil 
function isTouchDevice() {
	return (('ontouchstart' in window) ||
			  (navigator.maxTouchPoints > 0) ||
			  (navigator.msMaxTouchPoints > 0));
}

const isTouch = isTouchDevice();

if (!isTouch){

	const cursorEl = document.querySelector('.js-cursor');
	const isClickedClass = 'is-clicked';
	const isHiddenClass = 'is-hidden';
	const isLinkHoveredClass = 'is-link-hovered';
	const hasCustomCursorClass = 'has-custom-cursor';


//cursor 

const addEventListener = () => {
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mouseup", onMouseUp);
  document.addEventListener("mouseenter", onMouseEnter);
  document.addEventListener("mouseleave", onMouseLeave);
  handleLinkHoverEvents();
}; 

const onMouseMove = (e) => {
  cursorEl.style.setProperty("--cursor-x", e.clientX + "px");
  cursorEl.style.setProperty("--cursor-y", e.clientY + "px");
};
const onMouseDown = () => {
  cursorEl.classList.add(isClickedClass);
};
const onMouseUp = () => {
  cursorEl.classList.remove(isClickedClass);
};
const onMouseEnter = () => {
  cursorEl.classList.remove(isHiddenClass);
};
const onMouseLeave = () => {
  cursorEl.classList.add(isHiddenClass);
};

const handleLinkHoverEvents = () => {
  document.querySelectorAll('a, button, .js-link, input[type="button"], input[type="submit"]').forEach((el) => {
    el.addEventListener("mouseover", () => cursorEl.classList.add(isLinkHoveredClass) );
    el.addEventListener("mouseout", () => cursorEl.classList.remove(isLinkHoveredClass) );
  });
};
addEventListener();
document.body.classList.add(hascustomCursorClass);

}



//fade in 


const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -200px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  

