import { initializeCards } from "./carousel.js";
import { initAudio, stopAndResetAudio } from "./audio-option.js";

/*
    Pede pa to i-refactor later, 
    ganyan lng muna para lng ma-test kung nagana haha
*/

const contentPreview = document.getElementById('content-preview');
const mainStory = document.getElementById('main-story');
const characters = document.getElementById('characters');
const aboutUs = document.getElementById('about-us');

const characterPreview = document.getElementById('character-preview');

mainStory.onclick = () => {
    characterPreview.innerHTML = '';

    const mainStoryContainer = document.getElementById('main-story-container');
    if (mainStoryContainer !== null) {
        mainStoryContainer.style.animation = 'fadeOut 0.5s ease';

        mainStoryContainer.addEventListener('animationend', () => {
            mainStoryContainer.remove();
            stopAndResetAudio();
        });
        
        return;
    }

    fetch('/html/main-story.html')
        .then(res => res.text())
        .then(html => {
            contentPreview.innerHTML = html;
            initAudio();
        });

    highlightOption('main-story');
}

characters.onclick = () => {
    characterPreview.innerHTML = '';

    const charactersContainer = document.getElementById('characters-container');

    if (charactersContainer !== null) {
        charactersContainer.style.animation = 'fadeOut 0.5s ease';

        charactersContainer.addEventListener('animationend', () => {
            charactersContainer.remove();
        });

        return;
    }

    fetch('/html/characters.html')
        .then(res => res.text())
        .then(html => {
            contentPreview.innerHTML = html;
            initializeCards();

            stopAndResetAudio();
        });

    highlightOption('characters');
}

aboutUs.onclick = () => {
    characterPreview.innerHTML = '';


    const aboutUsContainer = document.getElementById('about-us-container');
    if (aboutUsContainer !== null) {
        aboutUsContainer.style.animation = 'fadeOut 0.5s ease';

        aboutUsContainer.addEventListener('animationend', () => {
            aboutUsContainer.remove();
        });
        
        return;
    }

    fetch('/html/about-us.html')
        .then(res => res.text())
        .then(html => {
            contentPreview.innerHTML = html;

            stopAndResetAudio();
        });
    
    highlightOption('about-us');
}

function highlightOption(option) {

    const notSelectedBgColor = '#3b3b3b';
    const notSelectedFontColor = '#9c9c9c';
    const selectedBgColor = '#727272';
    const selectedFontColor = '#dad9d9';

    const optionElements = [mainStory, characters, aboutUs];

    switch (option) {
        case 'main-story':
            optionElements.forEach(optionElement => setupColor('main-story', optionElement));
            break;
        case 'characters':
            optionElements.forEach(optionElement => setupColor('characters', optionElement));
            break;
        case 'about-us':
            optionElements.forEach(optionElement => setupColor('about-us', optionElement));
            break;
        default:
            console.log('Option not found')
            break;
    }

    function setupColor(optionID, optionElement) {
        if (optionElement.id === optionID) {
            optionElement.style.backgroundColor = selectedBgColor;
            optionElement.style.color = selectedFontColor;
            return;
        }

        optionElement.style.backgroundColor = notSelectedBgColor;
        optionElement.style.color = notSelectedFontColor;
    }
}