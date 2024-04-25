//Change Nav style on scroll

window.addEventListener('scroll', ()=> {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

//Slideshow Javascript

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
} 

//CONTACT BUTTONS(CIRCULAR_ANIMATION)

const textButtons = document.querySelectorAll('.contact-btn');
textButtons.forEach(textButtons=>{
    let text = textButtons.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index)=>`<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})

//Gallery Javascript

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    599: {
      slidesPerView:2,
      spaceBetween:40,
    },
    1023:{
      slidesPerView:3,
      spaceBetween:60,
    }

  }
});

//NAVBAR RESPONSIVENESS

const nav = document.querySelector('.nav_links');
const openNavBtn = document.querySelector('#nav_toggle_open');
const closeNavBtn = document.querySelector('#nav_toggle_close');

const openNav = () => {
  nav.style.display = 'flex';
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
  nav.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav);

nav.querySelector(`li a`).forEach(navLink => {
  navLink.addEventListener('click', closeNav);
})

