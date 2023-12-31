const dailyStats = document.querySelector('.daily-data');
const weeklyStats = document.querySelector('.weekly-data');
const monthlyStats = document.querySelector('.monthly-data');

const workColor = '#d96c47';
const playColor = '#56c2e6';
const studyColor = '#c06c84';
const exerciseColor = '#51b6c8';
const socialColor = '#498fc1';
const selfCareColor = '#d96ed4';

const user = [
  {
    title: 'Work',
    featuredImage: './images/icon-work.svg',
    workColor,
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: 'Play',
    featuredImage: './images/icon-play.svg',
    playColor,
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: 'Study',
    featuredImage: './images/icon-study.svg',
    studyColor,
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: 'Exercise',
    featuredImage: './images/icon-exercise.svg',
    exerciseColor,
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: 'Social',
    featuredImage: './images/icon-social.svg',
    socialColor,
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: 'Self Care',
    featuredImage: './images/icon-self-care.svg',
    selfCareColor,
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

function cardSection(card) {
  return `
  <div class="play-card color">
    <div class="image-show">
      <img class="adjust" src=${card.featuredImage} alt="work">
    </div>
    <div class="content">
      <div class="work-hours">
        <h2>${card.title}</h2>
        <div class="hours">
          <span class="no-card">${card.timeframes.weekly.current}hrs</span>
        </div>
      </div>
      <div class="three-dots">
        <div class="dot">
          <img src="./images/icon-ellipsis.svg" alt="ellipsis">
        </div>
        <div class="changer">
          <span class="week">Last Week - ${card.timeframes.weekly.previous}hrs</span>
        </div>
      </div>
    </div>
  </div>
  `;
}

const allCards = document.querySelector('#card-section');
allCards.innerHTML = `${user.map(cardSection).join('')}`;

// Loop through the data array
for (let i = 0; i < user.length; i += 1) {
  dailyStats.addEventListener('click', () => {
    const daily = user[i].timeframes.daily.current;
    const prevDaily = user[i].timeframes.daily.previous;
    const noCard = document.querySelectorAll('.no-card');
    const prev = document.querySelectorAll('.week');
    noCard[i].textContent = `${daily}hrs`;
    prev[i].textContent = `Yesterday - ${prevDaily}hrs`;
  });

  weeklyStats.addEventListener('click', () => {
    const weekly = user[i].timeframes.weekly.current;
    const prevWeekly = user[i].timeframes.weekly.previous;
    const noCard = document.querySelectorAll('.no-card');
    const prev = document.querySelectorAll('.week');
    noCard[i].textContent = `${weekly}hrs`;
    prev[i].textContent = `Last Week - ${prevWeekly}hrs`;
  });

  monthlyStats.addEventListener('click', () => {
    const monthly = user[i].timeframes.monthly.current;
    const prevMonthly = user[i].timeframes.monthly.previous;
    const noCard = document.querySelectorAll('.no-card');
    const prev = document.querySelectorAll('.week');
    noCard[i].textContent = `${monthly}hrs`;
    prev[i].textContent = `Last Month - ${prevMonthly}hrs`;
  });
}

for (let i = 0; i < user.length; i += 1) {
  const card = document.querySelectorAll('.play-card');
  card[i].style.backgroundColor = `${
    user[i].workColor
    || user[i].playColor
    || user[i].studyColor
    || user[i].exerciseColor
    || user[i].socialColor
    || user[i].selfCareColor
  }`;
}