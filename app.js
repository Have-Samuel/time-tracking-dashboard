/* eslint-disable no-use-before-define */
/* eslint-disable array-callback-return */

// Fetching daily data from db.json
const dailyStats = document.querySelector('.daily-data');
const weeklyStats = document.querySelector('.weekly-data');
const monthlyStats = document.querySelector('.monthly-data');
const cardNo = document.querySelector('.no-card');
const prevData = document.querySelector('.week');

// Fetching the json API
fetch('http://localhost:3000/user')
  // Getting the data from database
  // And fast converting it into json
  .then((res) => res.json())
  // Getting the current and previous hours for title "work"
  .then((cards) => {
    const title = '';
    // add an event to daily so that when you click on it, it will show the daily data
    // Card One
    dailyStats.addEventListener('click', () => {
      console.log(cards[0].timeframes.daily.current);
      console.log(cards[0].timeframes.daily.previous);
      if (title === 'Work') {
        cardNo.textContent = `${cards[0].timeframes.daily.current}hrs`;
        prevData.textContent = `Yesterday - ${cards[0].timeframes.daily.previous}hrs`;
      }
      if (title === 'Play') {
        cardNo.textContent = `${cards[1].timeframes.daily.current}hrs`;
        prevData.textContent = `Yesterday - ${cards[1].timeframes.daily.previous}hrs`;
      } if (title === 'Study') {
        cardNo.textContent = `${cards[2].timeframes.daily.current}hrs`;
        prevData.textContent = `Yesterday - ${cards[2].timeframes.daily.previous}hrs`;
      }
      // cardNo.textContent = `${cards[0].timeframes.daily.current}hrs`;
      // prevData.textContent = `Yesterday - ${cards[0].timeframes.daily.previous}hrs`;
    });
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
    // Card Two
    // dailyStats.addEventListener('click', () => {
    //   console.log(cards[1].timeframes.daily.current);
    //   console.log(cards[1].timeframes.daily.previous);
    //   cardNo.textContent = `${cards[1].timeframes.daily.current}hrs`;
    //   prevData.textContent = `Yesterday - ${cards[1].timeframes.daily.previous}hrs`;
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