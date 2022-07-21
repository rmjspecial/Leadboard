import appendScore from './appendScore';

const board = document.querySelector('.leaderboard');

const displayScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zTEs0dx2uBbEMM4clQHb/scores');
  const data = await response.json();
  let dataArray = data.result;
  dataArray = dataArray.sort((a, b) => b.score - a.score);
  board.innerHTML = '';
  dataArray.forEach((element) => {
    appendScore(element.user, element.score);
  });
};

export default displayScores;