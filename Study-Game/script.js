// Get all the questions
const questions = document.querySelectorAll('.question');

// Loop through each question and add a click event listener
questions.forEach((question) => {
  const input = question.querySelector('input');
  const answer = question.querySelector('.answer');
  
  input.addEventListener('click', () => {
    answer.style.display = 'block';
  });
});
