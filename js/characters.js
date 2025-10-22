const characterPreview = document.getElementById('character-preview');

function createCard(trigger, cardData) {

    trigger.onclick = () => {
        characterPreview.innerHTML = `<div id="character-display">
                                        <div class="header">   
                                            <i id="close-display" class="fa-solid fa-xmark"></i>
                                        </div> 
                                        <h2>${cardData.name}</h2>
                                        <div class="content">
                                            <img id="card-image" src="${cardData.cardImage}"
                                            <div class="description">
                                                <p>${cardData.description}</p>
                                            </div>
                                        </div>
                                      </div>`;

        characterPreview.style.backgroundColor = '#00000075';
        characterPreview.style.zIndex = 2;
        
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