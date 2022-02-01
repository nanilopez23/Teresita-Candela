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
//var proyectos 
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const links = [...document.querySelectorAll('.project-ul__li')];

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
  


//PROYECTOS




function lerp(start, end, t){
    return start * (1 - t) + end * t;
}



let imgIndex = 0;
// Load images into an array for reference
const images = [
    './image/1.jpg',
    './image/2.jpg',
    './image/3.jpg',
    './image/4.jpg',
    './image/5.jpg',
    './image/6.jpg'
]

let imgArr = [];

// Canvas mousemove varaibles

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

window.addEventListener('mousemove', (e)=> {
    targetX = e.clientX;
    targetY = e.clientY;
    
})

images.forEach((image, idx) => {
    let elImage = new Image(300);
    elImage.src = image;
    elImage.classList.add('project-image');
    document.body.append(elImage);
    imgArr.push(elImage)
})

// Draw images to the canvas

let percent = 0;
let target = 0;

function drawImage(idx){
    let {width, height} = imgArr[idx].getBoundingClientRect();

    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // pixelate by diabling the smoothing
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.msSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    if(target === 1){ // Link has been hovered
        // 2 speeds to make the effect more gradual
        if(percent < 0.2){
            percent += .01;
        }else if(percent < 1){
            percent += .1;
        }
    }else if(target === 0){
        if(percent > 0.2){
            percent -= .3
        }else if( percent > 0){
            percent -= .01;
        }
    }

    let scaledWidth = width * percent;
    let scaledHeight = height * percent;

    if(percent >= 1){
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        ctx.drawImage(imgArr[idx], 0, 0, width, height);
    }else{
        ctx.drawImage(imgArr[idx], 0, 0, scaledWidth, scaledHeight);
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        if(canvas.width !== 0 && canvas.height !== 0){
            ctx.drawImage(canvas, 0, 0, scaledWidth, scaledHeight, 0, 0, width, height)
        }
    }
}

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('mouseover', () => {
        for(let j = 0; j < links.length; j++){
            if(j !== i){
                links[j].style.opacity = 0.2;
                links[j].style.zIndex = 0;
            }else{
                links[j].style.opacity = 1;
                links[j].style.zIndex = 3;
            }
        }
    })

    links[i].addEventListener('mouseleave', () => {
        for(let i = 0; i < links.length; i++){
            links[i].style.opacity = 1;
        }
    })

    links[i].addEventListener('mouseenter', () => {
        imgIndex = i;
        target = 1
    });

    links[i].addEventListener('mouseleave', () => {
        target = 0;
    })
}

function animate(){
    currentX = lerp(currentX, targetX, 0.075);
    currentY = lerp(currentY, targetY, 0.075);
    let { width, height} = imgArr[imgIndex].getBoundingClientRect();
    canvas.style.transform = `translate3d(${currentX - (width / 2)}px, ${currentY - (height / 2)}px, 0)`;
    drawImage(imgIndex);
    window.requestAnimationFrame(animate);
}

animate()
