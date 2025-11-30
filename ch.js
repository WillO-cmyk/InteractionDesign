// Buttons
const trick1Btn = document.getElementById('trick1Btn');
const trick2Btn = document.getElementById('trick2Btn');
const trick3Btn = document.getElementById('trick3Btn');

// Elements
const skaterWrapper = document.querySelector('.skater-wrapper');
const sixSkater     = document.getElementById('sixSkater');
const blockThree    = document.getElementById('blockThree');

// Sound
const kickSound = new Audio('sounds/kickflip.mp3'); // make sure this file exists
const landSound = new Audio('sounds/SuccessfulLand.wav');
const metalSound = new Audio('sounds/WavyMetal.wav');


/* ===== Trick I — image skater ===== */
if (trick1Btn && skaterWrapper) {
  trick1Btn.addEventListener('click', () => {
    kickSound.currentTime = 0;
    kickSound.play();

    skaterWrapper.classList.add('kickflip');

    skaterWrapper.addEventListener('animationend', () => {
      skaterWrapper.classList.remove('kickflip');
    }, { once: true });
  });
}

/* ===== Trick II — RAD 6 glyph ===== */
if (trick2Btn && sixSkater) {
  trick2Btn.addEventListener('click', () => {

    // No POP sound — only landing

    sixSkater.classList.remove('is-tricking');
    void sixSkater.offsetWidth; // restart animation
    sixSkater.classList.add('is-tricking');

    sixSkater.addEventListener('animationend', () => {
      landSound.currentTime = 0;
      landSound.play();  // plays when trick finishes
      sixSkater.classList.remove('is-tricking');
    }, { once: true });

  }); 
}     



/* ===== Trick III — RAD 8 wobble ===== */
if (trick3Btn && blockThree) {
trick3Btn.addEventListener('click', () => {

  blockThree.classList.remove('is-wobbling');
  void blockThree.offsetWidth;
  blockThree.classList.add('is-wobbling');

  // Start the sound
  metalSound.currentTime = 0;
  metalSound.play();

  blockThree.addEventListener('animationend', () => {

    metalSound.pause();
    metalSound.currentTime = 0;

    blockThree.classList.remove('is-wobbling');
  }, { once: true });

});

}
