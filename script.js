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
const menuBtn=document.querySelector('.trigger');
const closeBtn=document.querySelector('.tClose');
const addClass=document.querySelector('.site');
menuBtn.addEventListener('click', function(){
    addClass.classList.toggle('showmenu')
})
closeBtn.addEventListener('click', function(){
    addClass.classList.remove('showmenu')
})


//subMenu showing on mobile
const submenu=document.querySelector('.dropDown .iconSmall');
submenu.forEach((menu)=> menu.addEventListener('click', toggle));
function toggle(e){
    e.preventDefault();
    submenu.forEach((item)=> item!=this? item.closest('.dropDown').classList.remove('expand') : null);
    if(this.closest('.dropDown').classList != 'expand');
    this.closest('.dropDown').classList.toggle('expand');
}
//1:03:00