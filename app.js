


//nav bar
let iconoNavegador = document.querySelector(".icono-navegador");
let navItems = document.querySelector(".nav-items");
let icon = document.querySelector(".icono-navegador i");
let flag = 0;

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
