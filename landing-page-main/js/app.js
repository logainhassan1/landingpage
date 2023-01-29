/**
 * Define Global Variables
 * 
*/
// too reduce reflow and rebuild
const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll('section');
const ul = document.querySelector('#navbar__list');
const navbar =document.getElementsByClassName('landing__container')
const links=document.querySelectorAll("a.menu__link");
// end


function createNav(id, name){
    const itemHTML = `<a class ="menu__link" data-id="${id}">${name}</a>`;
    return itemHTML;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


 
// Navigation is built dynamically as an unordered list


sections.forEach(section=>{
  const Name=section.getAttribute('data-nav');
  const Id=section.getAttribute('id');
  const li = document.createElement('li');
  const a = document.createElement("a");

   li.appendChild(a);
   fragment.appendChild(li);
   ul.appendChild(li);

   a.href=`#${Id}`
   a.textContent = Name

   a.addEventListener("click", function(event){
    event.preventDefault();
    section.scrollIntoView({behavior: "smooth",top: section.offsetTop, block: "end", inline: "nearest"})})
})

// which section is being viewed while scrolling through the page{


for (let i = 0; i < sections.length; i++) {
  window.addEventListener("click",function(){
    let active=document.getElementsByClassName('your-active-class');
    if (active.lengh>0) {
      active[0].className= active[0].className.replace("active","");}
      this.className+="active";

  });
  
}


const callback=(entries)=>{
  let section=entries[0];
  section.target.classList.remove('your-active-class');

  if (section. isIntersecting) {
    section.target.classList.add("your-active-class")
    links.forEach(link=>{
      if(link.Name===section.target.dataset.nav){
        link.classList.add("active-link")
      }else{
        link.classList.remove("active-link")} 
      })
  }
      else{section.target.classList.remove('your-active-class');
    };}
    let options = {
      root: document.querySelector('#scrollArea'),
      rootMargin: '0px',
      threshold: 1.0
    }
    
const observer =new IntersectionObserver(callback,options);




// When clicking an item from the navigation menu, the link should scroll to the appropriate section.
sections.forEach( (section)=>
  observer.observe(section)
);






//  * End Main Functions
//  * Begin Events
//  * 
// */

// Build menu 




// Scroll to section on link click

// const menuLinks = document.querySelectorAll('.menu__link');
// menuLinks.forEach(function(href) {href.addEventListener('click', LinkClick)})

// Set sections as active
