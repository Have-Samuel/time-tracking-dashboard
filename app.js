// Fetching daily data from db.json
const dailyStats = document.querySelector('.daily-data');
const weeklyStats = document.querySelector('.weekly-data');
const monthlyStats = document.querySelector('.monthly-data');

const user = [
  {
    title: 'Work',
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

// Creating the card
// const card = document.createElement('div');
// card.className = 'play-card';

// const showImg = document.createElement('div');
// showImg.className = 'image-show';
// const imgOne = document.createElement('img');
// imgOne.src = './images/icon-work.svg';
// showImg.appendChild(imgOne);

// const contDiv = document.createElement('div');
// contDiv.className = 'content';

// const workHours = document.createElement('div');
// workHours.className = 'work-hours';
// const title = document.createElement('h2');
// title.innerHTML = 'Work';
// const hours = document.createElement('div');
// hours.className = 'hours';
// const spanDiv = document.createElement('span');
// spanDiv.className = 'no-card';
// spanDiv.innerHTML = '32hrs';
// hours.appendChild(spanDiv);
// workHours.append(title, hours);

// const threeDots = document.createElement('div');
// threeDots.className = 'three-dots';
// const dotImg = document.createElement('div');
// dotImg.className = 'dot';
// const imgTwo = document.createElement('img');
// imgTwo.src = './images/icon-ellipsis.svg';
// dotImg.append(imgTwo);

// const prevUpDate = document.createElement('div');
// prevUpDate.className = 'changer';
// const spanDis = document.createElement('span');
// spanDis.textContent = 'last Week - 36hrs';
// spanDis.className = 'week';
// prevUpDate.appendChild(spanDis);

// threeDots.append(dotImg, prevUpDate);

// contDiv.append(workHours, threeDots);
// card.append(showImg, contDiv);
// displaySection.append(card);

function cardSection(work) {
  return `
  <div class="play-card">
    <div class="image-show">
      <img src="./images/icon-work.svg" alt="work">
    </div>
    <div class="content">
      <div class="work-hours">
        <h2>${work.title}</h2>
        <div class="hours">
          <span class="no-card">${work.timeframes.weekly.current}hrs</span>
        </div>
      </div>
      <div class="three-dots">
        <div class="dot">
          <img src="./images/icon-ellipsis.svg" alt="ellipsis">
        </div>
        <div class="changer">
          <span class="week">Last Week - ${work.timeframes.weekly.previous}hrs</span>
        </div>
      </div>
    </div>
  </div>
  `;
}

const allCards = document.querySelector('#card-section');
allCards.innerHTML = user.map(cardSection).join('');

// Lopp though the data array
user.forEach((work) => {
  const cardNo = document.querySelector('.no-card');
  const prevData = document.querySelector('.week');
  // const daily = work.timeframes.daily.current;
  // const weekly = work.timeframes.weekly.current;
  // const monthly = work.timeframes.monthly.current;

  // Add event listener to the daily button
  dailyStats.addEventListener('click', () => {
    const daily = work.timeframes.daily.current;
    const prevDaily = work.timeframes.daily.previous;
    const noCard = document.querySelector('.no-card');
    const prev = document.querySelector('.week');
    noCard.textContent = `${daily}hrs`;
    prev.textContent = `Yesterday - ${prevDaily}hrs`;
  });

  // Add event listener to the weekly button
  weeklyStats.addEventListener('click', () => {
    const weekly = work.timeframes.weekly.current;
    const prevWeekly = work.timeframes.weekly.previous;
    const noCard = document.querySelector('.no-card');
    const prev = document.querySelector('.week');
    noCard.textContent = `${weekly}hrs`;
    prev.textContent = `Last Week - ${prevWeekly}hrs`;
  });

  // Add event listener to the monthly button
  monthlyStats.addEventListener('click', () => {
    const monthly = work.timeframes.monthly.current;
    const prevMonthly = work.timeframes.monthly.previous;
    const noCard = document.querySelector('.no-card');
    const prev = document.querySelector('.week');
    noCard.textContent = `${monthly}hrs`;
    prev.textContent = `Last Month - ${prevMonthly}hrs`;
  });
});