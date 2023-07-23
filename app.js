/* eslint-disable no-use-before-define */
/* eslint-disable array-callback-return */
const sectionCards = document.querySelector('#card-section');
sectionCards.append(cardFn());
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

// Create Card
function cardFn() {
  const card = document.createElement('div');
  card.innerHTML = `
  
  `;
  return card;
}
cardFn();
