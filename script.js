const symbols = [
    'assets/Screenshot1.png',
    'assets/Screenshot2.png',
    'assets/Screenshot4.png',
]

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function spinReels() {
    const reels = document.querySelectorAll('.reel');
    const spunSymbols = [];

    reels.forEach(reel => {
        const symbol = getRandomSymbol();
        reel.style.backgroundImage = `url('${symbol}')`;
        spunSymbols.push(symbol);
    });

    if (spunSymbols.every(symbol => symbol === spunSymbols[0])) {
        displayResult("Κέρδισες ένα καφέ στο Πτυχίο");
    } else {
        displayResult("Έχασες και τώρα πρέπει να ακούσεις για τους Meshuggah");
    }
}

function displayResult(result) {
    const resultElement = document.createElement('h2');
    resultElement.textContent = result;
    resultElement.classList.add('result-message');

    // Assuming you have an h2 element with id 'outcome'
    const outcomeElement = document.querySelector('#outcome');
    outcomeElement.textContent = result;
    
}

document.getElementById('spin-button').addEventListener('click', spinReels);