document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os contêineres de perguntas do quiz
    const questions = document.querySelectorAll('.quiz-question');

    questions.forEach(question => {
        const options = question.querySelectorAll('.options-list li');
        const validateBtn = question.querySelector('.validate-btn');
        const feedbackMessage = question.querySelector('.feedback-message');

        let selectedOption = null;

        
        options.forEach(option => {
            option.addEventListener('click', () => {
                
                if (question.classList.contains('answered')) {
                    return;
                }
                
                
                options.forEach(opt => opt.classList.remove('selected'));
                
                
                option.classList.add('selected');
                selectedOption = option;
            });
        });

        
        validateBtn.addEventListener('click', () => {
            
            if (!selectedOption) {
                alert('Por favor, selecione uma resposta antes de validar!');
                return;
            }

            
            question.classList.add('answered');

            const isCorrect = selectedOption.hasAttribute('data-correct');
            const correctAnswer = question.querySelector('li[data-correct="true"]');

            if (isCorrect) {
                
                selectedOption.classList.add('correct-answer');
                feedbackMessage.textContent = '🎉 Resposta Correta!';
                feedbackMessage.classList.add('correct');
            } else {
                
                selectedOption.classList.add('wrong-answer');
                correctAnswer.classList.add('correct-answer'); 
                feedbackMessage.textContent = `😕 Resposta Incorreta! A resposta certa é a ${correctAnswer.dataset.option}.`;
                feedbackMessage.classList.add('incorrect');
            }
            
            
            validateBtn.disabled = true;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {

    const questions = document.querySelectorAll('.quiz-question');
    const totalQuestions = questions.length;
    
    
    const resultsContainer = document.getElementById('quiz-results');
    const resultsText = document.getElementById('results-text');
    const restartBtn = document.getElementById('restart-quiz-btn');

    
    let correctAnswersCount = 0;
    let answeredQuestionsCount = 0;

    
    function showFinalResults() {
        let message = '';
        if (correctAnswersCount === totalQuestions) {
            message = `Parabéns! 🏆 Você acertou todas as ${totalQuestions} perguntas!`;
        } else if (correctAnswersCount > totalQuestions / 2) {
            message = `Muito bem! 👍 Você acertou ${correctAnswersCount} de ${totalQuestions} perguntas.`;
        } else {
            message = `Continue estudando! 😊 Você acertou ${correctAnswersCount} de ${totalQuestions} perguntas.`;
        }
        resultsText.textContent = message;
        resultsContainer.style.display = 'block'; 
    }

   
    function restartQuiz() {
       
        correctAnswersCount = 0;
        answeredQuestionsCount = 0;

        
        resultsContainer.style.display = 'none';

        
        questions.forEach(question => {
            question.classList.remove('answered');
            question.querySelector('.validate-btn').disabled = false;

            const feedback = question.querySelector('.feedback-message');
            feedback.textContent = '';
            feedback.className = 'feedback-message';

            question.querySelectorAll('.options-list li').forEach(option => {
                option.className = '';
            });
        });
        
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    
    restartBtn.addEventListener('click', restartQuiz);

   
    questions.forEach(question => {
        const options = question.querySelectorAll('.options-list li');
        const validateBtn = question.querySelector('.validate-btn');
        const feedbackMessage = question.querySelector('.feedback-message');
        let selectedOption = null;

        options.forEach(option => {
            option.addEventListener('click', () => {
                if (question.classList.contains('answered')) return;
                
                options.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                selectedOption = option;
            });
        });

        validateBtn.addEventListener('click', () => {
            if (!selectedOption) {
                alert('Por favor, selecione uma resposta antes de validar!');
                return;
            }
            if (question.classList.contains('answered')) return;

            question.classList.add('answered');
            answeredQuestionsCount++; 

            const isCorrect = selectedOption.hasAttribute('data-correct');
            const correctAnswer = question.querySelector('li[data-correct="true"]');

            if (isCorrect) {
                correctAnswersCount++; 
                selectedOption.classList.add('correct-answer');
                feedbackMessage.textContent = '🎉 Resposta Correta!';
                feedbackMessage.classList.add('correct');
            } else {
                selectedOption.classList.add('wrong-answer');
                correctAnswer.classList.add('correct-answer');
                feedbackMessage.textContent = `😕 Resposta Incorreta! A resposta certa é a ${correctAnswer.dataset.option}.`;
                feedbackMessage.classList.add('incorrect');
            }
            
            validateBtn.disabled = true;

            
            if (answeredQuestionsCount === totalQuestions) {
                
                setTimeout(showFinalResults, 1500);
            }
        });
    });
});