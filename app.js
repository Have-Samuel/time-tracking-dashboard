const sectionCards = document.querySelector('#card-section');

// Create Card
function cardFn() {
  const card = document.createElement('div');
  card.innerHTML = `
  <div class="play-card">
  <div class="image-show">
      <img src="./images/icon-work.svg" alt="work">
    </div>
    <div class="content">
    <div class="work-hours">
      <h2>Work</h2>
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
  <div class="play-card1">
    <div class="image-show">
        <img src="./images/icon-play.svg" alt="work">
      </div>
      <div class="content">
      <div class="work-hours">
        <h2>Play</h2>
        <div class="hours">
          <span>10hrs</span>
        </div>
      </div>
      <div class="three-dots">
        <div class="dot">
        <img src="./images/icon-ellipsis.svg" alt="three-dots">
      </div>
        <span class="week-2">last Week - 36hrs</span>
      </div>
    </div>
    </div>
    <div class="play-card2">
      <div class="image-show">
          <img src="./images/icon-study.svg" alt="work">
        </div>
        <div class="content">
        <div class="work-hours">
          <h2>Study</h2>
          <div class="hours">
            <span>4hrs</span>
          </div>
        </div>
        <div class="three-dots">
          <div class="dot">
          <img src="./images/icon-ellipsis.svg" alt="three-dots">
        </div>
          <span class="week-3">last Week - 7hrs</span>
        </div>
      </div>
      </div>
      <div class="play-card3">
        <div class="image-show">
            <img src="./images/icon-exercise.svg" alt="work">
          </div>
          <div class="content">
          <div class="work-hours">
            <h2>Exercise</h2>
            <div class="hours">
              <span>4hrs</span>
            </div>
          </div>
          <div class="three-dots">
            <div class="dot">
            <img src="./images/icon-ellipsis.svg" alt="three-dots">
          </div>
            <span class="week-4">last Week - 10hrs</span>
          </div>
        </div>
        </div>
        <div class="play-card4">
          <div class="image-show">
              <img src="./images/icon-social.svg" alt="work">
            </div>
            <div class="content">
            <div class="work-hours">
              <h2>Social</h2>
              <div class="hours">
                <span>5hrs</span>
              </div>
            </div>
            <div class="three-dots">
              <div class="dot">
              <img src="./images/icon-ellipsis.svg" alt="three-dots">
            </div>
              <span class="week-5">last Week - 10hrs</span>
            </div>
          </div>
          </div>
          <div class="play-card5">
            <div class="image-show">
                <img src="./images/icon-self-care.svg" alt="work">
              </div>
              <div class="content">
              <div class="work-hours">
                <h2>Self Care</h2>
                <div class="hours">
                  <span>2hrs</span>
                </div>
              </div>
              <div class="three-dots">
                <div class="dot">
                <img src="./images/icon-ellipsis.svg" alt="three-dots">
              </div>
                <span class="week-6">last Week - 2hrs</span>
              </div>
            </div>
            </div>
  `;
  return card;
}
cardFn();

sectionCards.appendChild(cardFn());