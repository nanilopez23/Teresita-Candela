//variables
let images = [...document.querySelectorAll(".img")];
let slider = document.querySelector(".slider");
let sliderWidth;
let imageWidth;
let current = 0;
let target = 0 ; 
let ease = .05;

let menuToggle = document.querySelector(".menu-toggle2");
let menuClose = document.querySelector(".menu-close");
let menu = document.querySelector(".menu");
let navLinks = Array.from(document.querySelectorAll(".nav-link"));

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

// Gallery

window,addEventListener("resize", init);
  
images.forEach((img, idx) => {
    img.style.backgroundImage = `url(../image/${idx + 1}.jpg)`
})

function lerp (start, end, t){
  return start * (1-t) + end * t;
};

function setTransform(el, transform){
  el.style.transform = transform;
};

function init(){
  sliderWidth = slider.getBoundingClientRect().width;
  imageWidth = sliderWidth / images-length; 
  document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`

};

function animate (){
  current = parseFloat(lerp(current, target ,ease)).toFixed(2);
  target = window.scrollY;
  setTransform(slider, `TranslateX(-${current}px)`);
  animateImage();
  requestAnimationFrame(animate);
}

function animateImage(){
  let ratio = current / imageWidth;
  let intersectionRatioValue;

  images.forEach((image, idx)=>{
    intersectionRatioValue = ratio - (idx * 0.7);
    setTransform(image, `translateX(${intersectionRatioValue * 70}px)`)
  });
};

init();
animate();