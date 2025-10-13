import { cards } from './cards.js';

function initializeCards() {
    const cardsContainer = document.getElementById('cards-container');

    let cardElements = []
    let card = null;

    for (let i = 0; i < cards.length; i++) {
        card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<p>${cards[i].content}</p>`;

        cardElements[i] = card

        cardsContainer.appendChild(card);
        console.log(cards[i].content);
    }

    // Set middle element as active
    let middleCard = Math.round((cardElements.length - 1) / 2);
    let active = middleCard;

    console.log(cardElements.length);
    console.log(middleCard);
    console.log(cardElements[middleCard].innerHTML);

    loadCards(cardElements, active);

    const next = document.getElementById('next');
    const prev = document.getElementById('prev');

    next.onclick = () => {
        active = active + 1 > cardElements.length - 1 ? active : active + 1;
        loadCards(cardElements, active);
    }

    prev.onclick = () => {
        active = active - 1 < 0 ? active : active - 1;
        loadCards(cardElements, active);
    }
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

        console.log(cardElements[i].innerHTML)
    }
}


export { initializeCards };