
let quizData = [];

function addQuestion() {
    const questionInput = document.getElementById('question');
    const answerInput = document.getElementById('answer');

    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();

    if (question !== '' && answer !== '') {
        quizData.push({ question, answer });
        questionInput.value = '';
        answerInput.value = '';
        alert('Question added!');
    } else {
        alert('Please enter both a question and an answer.');
    }
}

function generateQuiz() {
    if (quizData.length > 0) {
     
        console.log('Generated Quiz:', quizData);
    } else {
        alert('Please add at least one question before generating the quiz.');
    }
}