import './style.css';

const scores = document.querySelectorAll('li');

scores.forEach((score, index) => {
  if (index % 2 === 0) {
    score.classList.add('color');
  } else {
    score.classList.remove('color');
  }
});