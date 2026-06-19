const hero = document.querySelector('.hero');
const projects = document.querySelector('.projects');
const viewProjectButton = document.querySelector('.view-project-btn');
const allProjects = document.querySelectorAll('.project1');
projects.style.display = 'none'

function viewProject() {
  hero.style.display = 'none';
  projects.style.display = 'flex';
}
viewProjectButton.addEventListener('click', viewProject);

let currentIndex=0
function updatePage() {
  allProjects.forEach((project, index) => {
    if(index===currentIndex) {
      project.classList.add('active');
    }else {
      project.classList.remove('active')
    }

  });
};

const nextButton= document.querySelector('.right-arrow');
console.log(nextButton)
const prevButton=document.querySelector('.left-arrow');

nextButton.addEventListener('click',()=>{
  if(currentIndex < allProjects.length-1) {
    currentIndex++;
    updatePage();
  }
});

prevButton.addEventListener('click',()=> {
  if(currentIndex > 0) {
    currentIndex--;
    updatePage();
  }
})