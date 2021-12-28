//variables
let iconoNavegador = document.querySelector(".icono-navegador");
let navItems = document.querySelector(".nav-items");
let icon = document.querySelector(".icono-navegador i");
let flag = 0;
const faders = document.querySelectorAll(".fade-in");


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
  
