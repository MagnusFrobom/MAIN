const cards = document.querySelectorAll('.card');
let isFlipped = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('is-flipped');

  if (!isFlipped) {
    // First click
    isFlipped = true;
    firstCard = this;
  } else {
    // Second click
    secondCard = this;
    checkForMatch();
  }
}

function checkForMatch() {
  let isMatch = firstCard.querySelector('.answer').textContent === secondCard.querySelector('.answer').textContent;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('is-flipped');
    secondCard.classList.remove('is-flipped');
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [isFlipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffleCards() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * cards.length);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
