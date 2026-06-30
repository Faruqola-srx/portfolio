const hero = document.querySelector('.hero');
const projects = document.querySelector('.projects');
const viewProjectButton = document.querySelector('.view-project-btn');
const allProjects = document.querySelectorAll('.project1');
projects.style.display = 'none';
const aboutPage=document.querySelector('.about')
aboutPage.style.display='none';
const contactPage=document.querySelector('.contact-page');
contactPage.style.display='none';

function viewProject() {
  hero.style.display = 'none';
  projects.style.display = 'flex';
  aboutPage.style.display='none';
   contactPage.style.display='none';
}
viewProjectButton.addEventListener('click', viewProject);

//project page --next and previous arrow
const nextButton= document.querySelector('.right-arrow');
console.log(nextButton)
const prevButton=document.querySelector('.left-arrow');

let currentIndex= 0;
function updatePage() {
  allProjects.forEach((project, index) => {
    if(index===currentIndex) {
      project.classList.add('active');
    }else {
      project.classList.remove('active')
    }

  });
};

const firstNum=document.querySelector('.first');
nextButton.addEventListener('click',()=>{
  if(currentIndex < allProjects.length-1) {
    currentIndex++;
    firstNum.innerHTML=`${currentIndex + 1}`;
    updatePage();
  }
});

prevButton.addEventListener('click',()=> {
  if(currentIndex > 0) {
    firstNum.innerHTML=`${currentIndex}`;
    currentIndex--;
    updatePage();
  }
});

//About page
const aboutButton=document.querySelector('.aboutt')
function showAboutpage() {
  hero.style.display='none';
  aboutPage.style.display='block';
  projects.style.display='none';
   contactPage.style.display='none';
}
aboutButton.addEventListener('click',showAboutpage);

//home page
const homeButton=document.querySelector('.home');
function showHomepage() {
  hero.style.display='flex';
  projects.style.display='none';
  aboutPage.style.display='none';
   contactPage.style.display='none';
}

homeButton.addEventListener('click',showHomepage);

//contact page
const getInTouch=document.querySelector('.btn');
const contactBtn=document.querySelector('.contact');
function contactPagedisplay() {
  contactPage.style.display='block';
  hero.style.display='none';
  projects.style.display='none';
  aboutPage.style.display='none';
}
getInTouch.addEventListener('click',contactPagedisplay);
contactBtn.addEventListener('click',contactPagedisplay)
 