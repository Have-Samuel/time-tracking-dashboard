// Fetching daily data from db.json
const displaySection = document.querySelector('#card-section');
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

// Creating the card
const card = document.createElement('div');
card.classList = 'play-card';

const showImg = document.createElement('div');
showImg.classList = 'image-show';
const imgOne = document.createElement('image');
imgOne.src = './images/icon-work.svg" alt="work';
showImg.appendChild(imgOne);

const contDiv = document.querySelector('.content');

const workHours = document.querySelector('.work-hours');
const title = document.createElement('h2');
title.innerHTML = 'Work';
const hours = document.querySelector('.hours');
const spanDiv = document.createElement('span');
spanDiv.classList = 'no-card';
hours.appendChild(spanDiv);
workHours.append(title, hours);

const threeDots = document.querySelector('.three-dots');
const dotImg = document.querySelector('.dot');
const imgTwo = document.createElement('image');
imgTwo.src = './images/icon-ellipsis.svg';
dotImg.append(imgTwo);

const prevUpDate = document.querySelector('.changer');
const spanDis = document.createElement('span');
spanDis.textContent = 'last Week - 36hrs';
spanDis.classList = 'week';
prevUpDate.appendChild(spanDis);

threeDots.append(dotImg, prevUpDate);

contDiv.append(workHours, threeDots);
card.append(showImg, contDiv);
displaySection.append(card);