//variables
//var navbar
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const nav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav-link");

const faders = document.querySelectorAll(".fade-in");
const cursorEl = document.querySelector(".js-cursor");
const isClickedClass = "is-clicked";
const isHiddenClass = "is-hidden";
const isLinkHoveredClass = "is-link-hovered";
const hascustomCursorClass = "has-custom-cursor";


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

//navbar

menuOpen.addEventListener("click", menuTog);
menuClose.addEventListener("click", menuTog);

navLink.forEach((link) => {
  link.addEventListener("click", menuTog);
});

function menuTog(e){
  nav.classList.toggle("active")
};

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
  

