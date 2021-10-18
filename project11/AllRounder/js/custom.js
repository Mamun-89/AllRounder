const image=document.querySelector(".img").children;
const rightSlide=document.querySelector("#right");
const leftSlide=document.querySelector("#left");

var current =0;

function reset() {
    for(var i=0; i<image.length; i++) {
        image[i].style.display="none";
    }
}
reset();

function startSlide() {
    image[0].style.display="flex";

}
startSlide();


function nextSlide() {
    reset();
    image[current + 1].style.display="flex";
    current ++;
}
function prevSlide() {
    reset();
    image[current - 1].style.display="flex";
    current --;
}

rightSlide.addEventListener("click",function() {
    if (current===image.length -1) {
    current = -1
    }
    nextSlide();
})

leftSlide.addEventListener("click",function() {
    if (current===0) {
        current =image.length;
    }
    prevSlide();
})

const d =new Date();
document.querySelector(".date").innerHTML= d;


// Mobile menu

const mobileMenu = document.querySelector(".mobile-Menu");
const mainMenu = document.querySelector(".main-menu");
const menuList=document.querySelector(".menu-list");
let menuOpen=false;

mobileMenu.addEventListener("click",function() {
    
    if(!menuOpen) {
        mobileMenu.classList.add("open");
        menuList.classList.add("openMenuList");
        menuOpen=true;
        
    }else{
        mobileMenu.classList.remove("open");
        menuList.classList.remove("openMenuList");
        menuOpen=false;
        
    }
})

// email validations
function validateEmail() {
    const form=document.querySelector("#form");
    const name=document.querySelector("#name");
    const email=document.querySelector("#email").value;
    const text=document.querySelector("#text");
    const pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML="Your email address is valid.";
        text.style.color="green";
    }else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML="Please enter valid email address.";
        text.style.color="red";
    }
    if (email=="") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML="";
        text.style.color="green";
    }
}



