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
const img = './images/icon-work.svg" alt="work';
img.classList = '';
showImg.append(img);

const contDiv = document.querySelector('.content');

const workHours = document.querySelector('.work-hours');
const title = document.querySelector('h2');
title.textContent = 'Work';
const hours = document.querySelector('.hours');
const spanDiv = document.querySelector('.no-card');
hours.append(spanDiv);
workHours.append(title, hours);

const threeDots = document.querySelector('.three-dots');


displaySection.append(card);