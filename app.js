/* eslint-disable no-use-before-define */
/* eslint-disable array-callback-return */

// Fetching daily data from db.json
const dailyStats = document.querySelector('.daily-data');
const cardNo = document.querySelector('.no-card');
const prevData = document.querySelector('.week-1');

// Fetching the json API
const url = fetch('http://localhost:3000/user')
  // Getting the data from database
  // And fast converting it into json
  .then((res) => res.json())
  // Getting the current and previous hours for title "work"
  .then((data) => {
    // add an event to daily so that when you click on it, it will show the daily data
    dailyStats.addEventListener('click', () => {
      console.log(data.daily);
      console.log(data.daily.previous);
      cardNo.textContent = `${data.daily}hrs`;
      prevData.textContent = `${data.daily}hrs`;
    });
  });