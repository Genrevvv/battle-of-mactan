const characterPreview = document.getElementById('character-preview');

function createCard(trigger, cardData) {

    trigger.onclick = () => {
        characterPreview.innerHTML = `<div id="character-display">
                                        <div class="header">   
                                            <i id="close-display" class="fa-solid fa-xmark"></i>
                                        </div> 
                                        <h2>${cardData.content}</h2>
                                        <div class="content">
                                            <div id="card-image"></div>
                                            <div class="description">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur impedit aperiam. Eveniet assumenda quod esse at similique! Perspiciatis id maxime iusto? Explicabo, atque! Minima fuga facilis ipsa eius vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur impedit aperiam. Eveniet assumenda quod esse at similique! Perspiciatis id maxime iusto? Explicabo, atque! Minima fuga facilis ipsa eius vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur impedit aperiam. Eveniet assumenda quod esse at similique! Perspiciatis id maxime iusto? Explicabo, atque! Minima fuga facilis ipsa eius vero.
                                            </div>
                                        </div>
                                      </div>`;

        characterPreview.style.backgroundColor = '#00000075';
        characterPreview.style.zIndex = 2;

        const cardImage = document.getElementById('card-image');
        cardImage.style.backgroundImage = `url(${cardData.backgroundImage})`;
        
        const closeButton = document.getElementById('close-display');
        closeButton.onclick = () => {
            characterPreview.style.backgroundColor = 'transparent';
            characterPreview.style.zIndex = 1;
            
            const characterDisplay = document.getElementById('character-display');
            characterDisplay.style.animation = 'fadeOutCenter 0.5s ease';
            
            characterDisplay.addEventListener('animationend', () => {
                characterDisplay.remove();
            });
        }
    }
}

export { createCard };