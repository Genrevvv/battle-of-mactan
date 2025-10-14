import { initializeCards } from "./carousel.js";

/*
    Pede pa to i-refactor later, 
    ganyan lng muna para lng ma-test kung nagana haha
*/

const contentPreview = document.getElementById('content-preview');
const mainStory = document.getElementById('main-story');
const characters = document.getElementById('characters');
const temp = document.getElementById('temp');
const aboutUs = document.getElementById('about-us');

const characterPreview = document.getElementById('character-preview');

mainStory.onclick = () => {
    characterPreview.innerHTML = '';

    const mainStoryContainer = document.getElementById('main-story-container');
    if (mainStoryContainer !== null) {
        mainStoryContainer.style.animation = 'fadeOut 0.5s ease';

        mainStoryContainer.addEventListener('animationend', () => {
            mainStoryContainer.remove();
        });
        
        return;
    }

    fetch('/html/main-story.html')
        .then(res => res.text())
        .then(html => {
            contentPreview.innerHTML = html;
        });
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
        });
}

temp.onclick = () => {
    characterPreview.innerHTML = '';

    const tempContainer = document.getElementById('temp-container');
    if (tempContainer !== null) {
        tempContainer.style.animation = 'fadeOut 0.5s ease';

        tempContainer.addEventListener('animationend', () => {
            tempContainer.remove();
        });
        
        return;
    }

    fetch('/html/temp.html')
        .then(res => res.text())
        .then(html => {
            contentPreview.innerHTML = html;
        });
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
        });
}