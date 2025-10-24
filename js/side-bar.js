import { initializeCards } from "./carousel.js";
import { initAudio, stopAndResetAudio } from "./audio-option.js";
import { initAnalysis } from "./analysis.js";

const contentPreview = document.getElementById('content-preview');
const mainStory = document.getElementById('main-story');
const characters = document.getElementById('characters');
const analysis = document.getElementById('analysis');

const characterPreview = document.getElementById('character-preview');

mainStory.onclick = () => {
    highlightOption('main-story');

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

    fetch('html/main-story.html')
        .then(res => res.text())
        .then(html => {
            contentPreview.innerHTML = html;
            initAudio();
        });
}

characters.onclick = () => {
    highlightOption('characters');

    characterPreview.innerHTML = '';

    const charactersContainer = document.getElementById('characters-container');

    if (charactersContainer !== null) {
        charactersContainer.style.animation = 'fadeOut 0.5s ease';

        charactersContainer.addEventListener('animationend', () => {
            charactersContainer.remove();
        });

        return;
    }

    fetch('html/characters.html')
        .then(res => res.text())
        .then(html => {
            contentPreview.innerHTML = html;
            initializeCards();

            stopAndResetAudio();
        });
}

analysis.onclick = () => {
    highlightOption('analysis');

    characterPreview.innerHTML = '';


    const analysisContainer = document.getElementById('analysis-container');
    if (analysisContainer !== null) {
        analysisContainer.style.animation = 'fadeOut 0.5s ease';

        analysisContainer.addEventListener('animationend', () => {
            analysisContainer.remove();
        });
        
        return;
    }

    fetch('html/analysis.html')
        .then(res => res.text())
        .then(html => {
            contentPreview.innerHTML = html;

            initAnalysis();
            stopAndResetAudio();
        });
}

function highlightOption(option) {

    const optionElements = [mainStory, characters, analysis];

    switch (option) {
        case 'main-story':
            optionElements.forEach(optionElement => setupColor('main-story', optionElement));
            break;
        case 'characters':
            optionElements.forEach(optionElement => setupColor('characters', optionElement));
            break;
        case 'analysis':
            optionElements.forEach(optionElement => setupColor('analysis', optionElement));
            break;
        default:
            console.log('Option not found');
            break;
    }

    function setupColor(optionID, optionElement) {
        if (!(optionElement.id === optionID)) {
            optionElement.classList.remove('highlighted');
            return;
        }

        if (optionElement.classList.contains('highlighted')) {
            optionElement.classList.remove('highlighted');
            return;
        }

        optionElement.classList.add('highlighted');
        
    }
}