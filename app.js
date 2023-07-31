/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable array-callback-return */

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
// Fetching the json API
fetch('http://localhost:3000/user')
  // Getting the data from database
  // And fast converting it into json
  .then((res) => res.json())
  // Getting the current and previous hours for title "work"
  .then((user) => {
    const title = '';
    // add an event to daily so that when you click on it, it will show the daily data
    // Card One
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
    // dailyStats.addEventListener('click', () => {
    //   console.log(user[0].timeframes.daily.current);
    //   // console.log(user[0].timeframes.daily.current);
    //   console.log(user[0].timeframes.daily.previous);
    //   cardNo.textContent = `${user[0].timeframes.daily.current}hrs`;
    //   prevData.textContent = `Yesterday - ${user[0].timeframes.daily.previous}hrs`;
    // });
    // weeklyStats.addEventListener('click', () => {
    //   console.log(user[0].timeframes.weekly.current);
    //   console.log(user[0].timeframes.weekly.previous);
    //   cardNo.textContent = `${user[0].timeframes.weekly.current}hrs`;
    //   prevData.textContent = `Yesterday - ${user[0].timeframes.weekly.previous}hrs`;
    // });
    // monthlyStats.addEventListener('click', () => {
    //   console.log(user[0].timeframes.monthly.current);
    //   console.log(user[0].timeframes.monthly.previous);
    //   cardNo.textContent = `${user[0].timeframes.monthly.current}hrs`;
    //   prevData.textContent = `Yesterday - ${user[0].timeframes.monthly.previous}hrs`;
    // });
    // Card Two
    // dailyStats.addEventListener('click', () => {
    //   console.log(user[1].timeframes.daily.current);
    //   console.log(user[1].timeframes.daily.previous);
    //   cardNo.textContent = `${user[1].timeframes.daily.current}hrs`;
    //   prevData.textContent = `Yesterday - ${user[1].timeframes.daily.previous}hrs`;
    // });
    // weeklyStats.addEventListener('click', () => {
    //   console.log(cards[0].timeframes.weekly.current);
    //   console.log(cards[0].timeframes.weekly.previous);
    //   cardNo.textContent = `${cards[0].timeframes.weekly.current}hrs`;
    //   prevData.textContent = `Yesterday - ${cards[0].timeframes.weekly.previous}hrs`;
    // });
    // monthlyStats.addEventListener('click', () => {
    //   console.log(cards[0].timeframes.monthly.current);
    //   console.log(cards[0].timeframes.monthly.previous);
    //   cardNo.textContent = `${cards[0].timeframes.monthly.current}hrs`;
    //   prevData.textContent = `Yesterday - ${cards[0].timeframes.monthly.previous}hrs`;
    // });

    // Card Three
    // dailyStats.addEventListener('click', () => {
    //   console.log(cards[2].timeframes.daily.current);
    //   console.log(cards[2].timeframes.daily.previous);
    //   cardNo.textContent = `${cards[2].timeframes.daily.current}hrs`;
    //   prevData.textContent = `Yesterday - ${cards[2].timeframes.daily.previous}hrs`;
    // });
  });