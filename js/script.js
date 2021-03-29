const animateTop = document.querySelector('.top')
const animateBottom = document.querySelector('.bottom')
const animateArrow = document.querySelector('.arrow')
const animateAbout = document.querySelector('.about-p')
// const animateRoadmap = document.querySelector('.roadmap')

window.onload = function(){

  animateTop.classList.add('animated', 'fadeInDown')
  animateBottom.classList.add('animated', 'fadeInUp')
  animateArrow.classList.add('animated', 'fadeIn')
  animateAbout.classList.add('animated', 'fadeInUp')
//   animateRoadmap.classList.add('animated', 'fadeInUp')

}

var secs = document.querySelectorAll('section');
var currentSection = 0;
document.querySelector('#arrow').addEventListener('click', move);

function move(e) {
  if (e.target.classList.contains('next') && currentSection < secs.length) {
    window.scroll({
      top: secs[++currentSection].offsetTop,
      left: 0,
      behavior: 'smooth'
    });
    //    secs[++currentSection].scrollIntoView({ behavior: 'smooth' });
  } else if (currentSection > 0) {
    window.scroll({
      top: secs[--currentSection].offsetTop,
      left: 0,
      behavior: 'smooth'
    });

  }
}
