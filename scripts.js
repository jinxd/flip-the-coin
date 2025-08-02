// Get elements and set variables
const coinImg = document.getElementById('coinImg');
const flipBtn = document.getElementById('flipBtn');
const resultText = document.querySelector('.result');

function flipCoin() {
  // Disable button during animation
  flipBtn.disabled = true;

  // Randomly choose heads or tails
  const isHeads = Math.random() < 0.5;
  const result = isHeads ? 'Heads' : 'Tails';
  const coinSide = isHeads ? './resources/heads.svg' : './resources/tails.svg';

  // Add flip animation class
  coinImg.classList.add('flipping');
  // Halfway through animation, change the image
  setTimeout(() => {
    coinImg.src = coinSide;
  }, 300);

    // When animation completes
  setTimeout(() => {
    coinImg.classList.remove('flipping');
    resultText.textContent = result;
    flipBtn.disabled = false;
  }, 600);
}

// add event listener
flipBtn.addEventListener('click', flipCoin);
