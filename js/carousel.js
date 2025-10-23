import { cards } from './cards.js';
import { createCard } from './characters.js';

function initializeCards() {    
    const cardsContainer = document.getElementById('cards-container');

    let cardElements = [];
    let card = null;

    for (let i = 0; i < cards.length; i++) {
        card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<img class="card-image" src="${cards[i].cardImage}">`;
        // card.style.backgroundImage = `url()`;

        cardElements[i] = card;
        createCard(card, cards[i]);

        cardsContainer.appendChild(card);
    }   

    // Set middle element as active
    let middleCard = Math.round((cardElements.length - 1) / 2);
    let active = middleCard;

    loadCards(cardElements, active);

    const next = document.getElementById('next');
    const prev = document.getElementById('prev');

    function nextCard() {
        active = active + 1 > cardElements.length - 1 ? active : active + 1;
        loadCards(cardElements, active);

        return active;
    }

    function prevCard() {
        active = active - 1 < 0 ? active : active - 1;
        loadCards(cardElements, active);

        return active;
    }

    next.onclick = () => {
        active = nextCard();
    }

    prev.onclick = () => {
        active = prevCard();
    }

    // Add scroll event handler
    const charactersContainer = document.getElementById('characters-container');
    charactersContainer.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
            // console.log('scrolling down');
            active = nextCard();
        }
        else {
            // console.log('scrolling up');
            active = prevCard();
        }
    });
}

function loadCards(cardElements, active) {
    let card = cardElements[active];
    card.style.transform = 'none';
    card.style.opacity = 1;
    card.style.zIndex = 1;
    

    let n = 0;
    for (let i = active + 1; i < cardElements.length; i++) {
        n++;

        card = cardElements[i];
        cardElements[i].style.transform = `translateX(${100 * n}px) scale(${1 - 0.2*n})`;
        cardElements[i].style.zIndex = -n;
        cardElements[i].style.opacity = n > 2 ?  0 : 0.6;
    }

    n = 0;
    for (let i = active - 1; i >= 0; i--) {
        n++;

        card = cardElements[i];
        cardElements[i].style.transform = `translateX(${-100 * n}px) scale(${1 - 0.2*n})`;
        cardElements[i].style.zIndex = -n;
        cardElements[i].style.opacity = n > 2 ?  0 : 0.6;
    }
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

export { initializeCards };