/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

//get all sections 
const sectionsNo = document.querySelectorAll('section');

let listNav;

let linkNav;

//get the nacigation bar ... ul
const menu  = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//function to add active class to the section 
// Add class 'active' to section when near top of viewport

function activeSection(x){
    const dim = x.getBoundingClientRect(); 
    //console.log(dim.top);
    if(dim.top <= 10 && dim.bottom >= 100){
        x.className =  "active" ;
    } else {
        x.classList.remove("active");
    }
}

//making the active section clear

function colorActiveSection(x){
    if(x.className === 'active'){
        x.style.backgroundColor = "darkgrey";
    }else{
        x.style.backgroundColor = "transparent";
    }
}

// build the nav

function buildNav(x){
    const sectionName = x.getAttribute('data-nav');
    listNav = document.createElement('li');
    linkNav = document.createElement('a');
    linkNav.textContent = sectionName;
    listNav.appendChild(linkNav);
    menu.appendChild(listNav);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

//loop to catch each section

for(let i = 0; i < sectionsNo.length; i++){
    
    // Build menu 

    buildNav(sectionsNo[i]);

    /*
    *Begin Events
    */ 

    // Set sections as active    

    document.addEventListener('scroll', function(){
       activeSection(sectionsNo[i]);
       colorActiveSection(sectionsNo[i]);
       
    }); 

    // Scroll to anchor ID using scrollTO event
    // Scroll to section on link click

    const linksNo = document.querySelectorAll('a');
    linksNo[i].addEventListener('click',function(){
        sectionsNo[i].scrollIntoView({behavior: "smooth"});
        });
}

//scroll to top of the page

document.getElementById('back-to-top').addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/**
 * End Main Functions
*/








