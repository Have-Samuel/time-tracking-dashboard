/* eslint-disable no-use-before-define */
/* eslint-disable array-callback-return */

// Fetching daily data from db.json
const dailyStats = document.querySelector('.daily-data');
const cardNo = document.querySelector('.no-card');
const pervData = document.querySelector('.week-1');

// Fetching the json API
fetch('http://localhost:3000/user')
  // Getting the data from database
  // And fast converting it into json
  .then((res) => {
    return res.json();
  })
  .then((cards) => {
    const sectionCards = document.querySelector('#card-section');

    let display = '';
    for (let card of cards) {
      display += `
      
      `;
    }
  })