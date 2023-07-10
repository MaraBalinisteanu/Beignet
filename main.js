//menu mobile
    //copy dptCat to departments
    const dptCategory= document.querySelector('.dptCat');
    const dptPlace=document.querySelector('.departments');
    dptPlace.innerHTML=dptCategory.innerHTML;
    
    //copy nav to nav
    const miniNav=document.querySelector('.headerNav nav');
    const navPlace=document.querySelector('.offCanvas nav');

    //copy .headerTop to .topNav
    const topNav=document.querySelector('.headerTop .wrapper');
    const topPlace=document.querySelector('.offCanvas .topNav');
    topPlace.innerHTML=topNav.innerHTML;
//menu on mobile showing

const menuBtn=document.querySelector('.trigger'),
 closeBtn=document.querySelector('.tClose'),
 addclass=document.querySelector('.site');
menuBtn.addEventListener('click', function(){
    addclass.classList.toggle('showmenu')
})
closeBtn.addEventListener('click', function(){
    addclass.classList.remove('showmenu')
})


//subMenu showing on mobile
const submenu=document.querySelectorAll('.dropDown .iconSmall');
submenu.forEach((menu)=> menu.addEventListener('click', toggle));
function toggle(e){
    e.preventDefault();
    submenu.forEach((item)=> item!=this? item.closest('.dropDown').classList.remove('expand') : null);
    if(this.closest('.dropDown').classList != 'expand');
    this.closest('.dropDown').classList.toggle('expand');
}

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