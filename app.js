/* eslint-disable no-use-before-define */
/* eslint-disable array-callback-return */
const sectionCards = document.querySelector('#card-section');

// Fetching the json API
fetch('http://localhost:3000/user')
  // Getting the data from database
  // And fast converting it into json
  .then((res) => res.json())
  // iterating the data and getting information from the data
  .then((json) => {
    json.map((data) => {
      console.log(data.title);
      sectionCards.append(cardFn(data.title, data.image));
    });
  });

// Create Card
function cardFn(title, image) {
  const card = document.createElement('div');
  card.innerHTML = `
  <div class="play-card">
  <div class="image-show">
      <img src="${image}" alt="work">
    </div>
    <div class="content">
    <div class="work-hours">
      <h2>${title}</h2>
      <div class="hours">
        <span>32hrs</span>
      </div>
    </div>
    <div class="three-dots">
      <div class="dot">
      <img src="./images/icon-ellipsis.svg" alt="three-dots">
    </div>
      <span class="week-1">last Week - 36hrs</span>
    </div>
  </div>
  </div>
 
  `;
  return card;
}
cardFn();
