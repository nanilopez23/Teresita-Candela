//variables
let iconoNavegador = document.querySelector(".icono-navegador");
let navItems = document.querySelector(".nav-items");
let icon = document.querySelector(".icono-navegador i");
let flag = 0;
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
//nav bar
iconoNavegador.addEventListener("click", ()=>{
    if(flag==0){
        navItems.className = ("nav-items show-nav-items");
        icon.className = ("fas fa-times");
        flag = 1;
    }else{
        navItems.className = ("nav-items");
        icon.className = ("fas fa-bars");
        flag = 0;
    }
})

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
  

  

