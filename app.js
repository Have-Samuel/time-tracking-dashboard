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
  .then((response) => response.json())
  .then((data) => {
    dailyStats.addEventListener('click', () => {
      console.log(data);
      // Looping through the data
      data.map((item) => {
        if (item.title === 'work') {
          cardNo.innerHTML = `
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Work</h3>
              <div class="card-icon">
                <img src="./images/icon-work.svg" alt="Work Icon" />
              </div>
            </div>
            <div class="card-content">
              <h1 class="card-time">${item.timeframes.daily.current}hrs</h1>
              <p class="card-previous">Yesterday - ${item.timeframes.daily.previous}hrs</p>
            </div>
          </div>
          `;
        }
      });
    });
  });