// Fetching daily data from db.json
const dailyStats = document.querySelector('.daily-data');
const weeklyStats = document.querySelector('.weekly-data');
const monthlyStats = document.querySelector('.monthly-data');
const cardNo = document.querySelector('.no-card');
const prevData = document.querySelector('.week');

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
];
user.forEach((user) => {
  dailyStats.addEventListener('click', () => {
    console.log(user.timeframes.daily.current);
    console.log(user.timeframes.daily.previous);
    cardNo.textContent = `${user.timeframes.daily.current}hrs`;
    prevData.textContent = `Yesterday - ${user.timeframes.daily.previous}hrs`;
  });
  weeklyStats.addEventListener('click', () => {
    console.log(user.timeframes.weekly.current);
    console.log(user.timeframes.weekly.previous);
    cardNo.textContent = `${user.timeframes.weekly.current}hrs`;
    prevData.textContent = `Yesterday - ${user.timeframes.weekly.previous}hrs`;
  });
  monthlyStats.addEventListener('click', () => {
    console.log(user.timeframes.monthly.current);
    console.log(user.timeframes.monthly.previous);
    cardNo.textContent = `${user.timeframes.monthly.current}hrs`;
    prevData.textContent = `Yesterday - ${user.timeframes.monthly.previous}hrs`;
  });
});