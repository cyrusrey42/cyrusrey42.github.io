const goals = document.querySelectorAll('.goal');

goals.forEach((goal) => {
  goal.addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'h2') {
      goal.classList.toggle('active');
    }
  });
});

const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
const currentDay = document.querySelector('[data-testid="currentDay"]');

function updateTime() {
  const now = new Date();
  currentTimeUTC.textContent = now.toLocaleString('en-US', { timeZone: 'UTC' });
  currentDay.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
}

updateTime();
setInterval(updateTime, 1000);
