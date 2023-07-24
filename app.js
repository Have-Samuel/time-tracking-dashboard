/* eslint-disable no-use-before-define */
/* eslint-disable array-callback-return */
const infoCards = document.querySelector('.changer');
infoCards.append(cardInfo());
// Fetching the json API
fetch('http://localhost:3000/user')
  // Getting the data from database
  // And fast converting it into json
  .then((res) => res.json())
  // iterating the data and getting information from the data
  .then((json) => {
    json.map((data) => {
      console.log(data.title);
    });
  });

// Showing the data in the DOM
function cardInfo() {
  const cardShower = document.createElement('span');
  cardShower.innerHTML = `

  `;
  return cardShower;
}
cardInfo();
