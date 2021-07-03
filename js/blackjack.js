
let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
}

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('sounds/swish.m4a');

function blackjackHit() {
    let card = randomCard();
    showCard(card, YOU);
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer) {
    let cardImage = document.createElement('img');
    cardImage.src = `images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
}

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackDeal() {
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');

    for (let i = 0; i < yourImages.length; i++) {
        yourImages[i].remove();
    }

    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

    for (let i = 0; i < dealerImages.length; i++) {
        dealerImages[i].remove();
    }
}