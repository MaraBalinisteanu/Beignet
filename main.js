//menu mobile
    //copy dptCat to departments
    const dptCategory= document.querySelector('.dptCat');
    const dptPlace=document.querySelector('.departments');
    dptPlace.innerHTML=dptCategory.innerHTML;
    
    //copy nav to nav
    const miniNav=document.querySelector('.headerNav nav');
    const navPlace=document.querySelector('.offCanvas nav');
    navPlace.innerHTML=miniNav.innerHTML

    //copy .headerTop to .topNav
    const topNav=document.querySelector('.headerTop .wrapper');
    const topPlace=document.querySelector('.offCanvas .topNav');
    topPlace.innerHTML=topNav.innerHTML;


//Slider-carousel

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function switchScrollable(){
    const titles = document.querySelectorAll('.imgTitle');
  const prices = document.querySelectorAll('.currentP');
  const imgs = document.querySelectorAll('.imgProd');
fetch('./main.json')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((post, index) => {
      titles[index].innerHTML = post.title;
      prices[index].innerHTML = post.price;
      imgs[index].setAttribute('src', post.img);
    });
  });
}
switchScrollable()

//countdown
const countdown=()=>{
  const countDate= new Date('August 4, 2023 00:00:00').getTime();
  const now=new Date().getTime();
  const gap=countDate-now;

  const second=1000;
  const minute=second*60;
  const hour=minute*60;
  const day=hour*24;

  const textDay=Math.floor(gap/day);
  const textHour=Math.floor((gap%day)/hour);
  const textMinute=Math.floor((gap%hour)/minute);
  const textSecond=Math.floor((gap%minute)/second)

  document.querySelector('.day').innerText=textDay;
  document.querySelector('.hour').innerText=textHour;
  document.querySelector('.minute').innerText=textMinute;
  document.querySelector('.sec').innerText=textSecond;
};
setInterval(countdown,1000)

const hamburger = document.querySelector(".hamburger");
const miniMenu = document.querySelector(".miniMenu");
hamburger.onclick = function() {
  const navBar= document.querySelector('.nav-bar')
    navBar.classList.toggle("actively");
    miniMenu.classList.toggle("actively");
  //   const miniMenu = document.querySelector('.miniMenu');
  // miniMenu.classList.toggle("miniMenu-active");

}