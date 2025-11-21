const button = document.getElementById('kickflipBtn');
const wrapper = document.querySelector('.skater-wrapper');

button.addEventListener('click', () => {
  wrapper.classList.add('kickflip');

  wrapper.addEventListener('animationend', () => {
    wrapper.classList.remove('kickflip');
  }, { once: true });
});
