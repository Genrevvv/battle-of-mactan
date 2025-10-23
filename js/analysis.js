import { questionsData } from "./questions.js";


function initAnalysis() {
    const FAQsection = document.getElementById('FAQ-section');

    questionsData.forEach(questionData => {
        createQuestion(questionData, FAQsection);
    });

    const questions = document.querySelectorAll('.question-container');

    questions.forEach(questionContainer => {
        const question = questionContainer.querySelector('.question');
        const answer = questionContainer.querySelector('.answer');

        answer.style.display = 'none';

        question.onclick = () => {
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
                answer.classList.add('open');
            }
            else {
                answer.style.display = 'none';
            }
        }        
    });
}

function createQuestion(questionData, parent) {
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');
    questionContainer.innerHTML = `<div class="question-number">Q${questionData.id}</div>
                                   <div class="question">
                                        <p>${questionData.question}</p>
                                   </div>
                                   <div class="answer">
                                        <p>${questionData.answer}</p>
                                   </div>`;

    parent.appendChild(questionContainer);
}
export { initAnalysis };