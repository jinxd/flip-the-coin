const coinImg = document.getElementById('coinImg');
const flipBtn = document.getElementById('flip');
const resultText = document.querySelector('.result');

function flipCoin() {
    // Disable button during animation
    flipBtn.disabled = true;

    // Randomly choose heads or tails
    const isHeads = Math.random() < 0.5;
    const result = isHeads ? 'Heads' : 'Tails';
    const newSrc = isHeads ? './resources/heads.svg' : './resources/tails.svg';


    // Add flip animation class
    coinImg.classList.add('flipping');

    // Halfway through animation, change the image
    setTimeout(() => {
        coinImg.src = newSrc;
    }, 300);

    // When animation completes
    setTimeout(() => {
        coinImg.classList.remove('flipping');
        resultText.textContent = result;
        flipBtn.disabled = false;
    }, 600);
}

flipBtn.addEventListener('click', flipCoin);
