 const questions = [
 {
 question: "In the DC comic books for Superheroes, who is the Superhero named Bruce Wayne?",
 answers: [
 { text: "Superman", correct: false},
 { text: "Batman", correct: true},
 { text: "WonderWoman", correct: false},
 { text: "Green Lantern", correct: false},
 
 
 ]
 
 },
 
 { 
 question: "In the DC comic books, the Superhero Wonder Woman has the Laso of what?",
 answers: [
 
 { text: "Lies", correct: false},
 { text: "Good Deads", correct: false},
 { text: "Truth", correct: true},
 { text: "Superpower", correct: false},
 
 
 ]
 
 
 },
 {
 question: "In the DC comic books for Superheroes, which planet is Superman from?",
 answers: [
 
 { text: "Mars", correct: false},
 { text: "Earth", correct: false},
 { text: "Paradise Island", correct: false},
 { text: "Krypton", correct: true},
 
 
 ]
 },
 
 {
 question: "In the DC comic books for Superheroes, what do the superheroes call their team group?",
 answers: [
 
 { text: "The Justice League", correct: true},
 { text: "Superpeople", correct: false},
 { text: "People of Wonder", correct: false},
 { text: "Supes", correct: false},
 
 
 ]
 },
 
 {
  question: "Which city do Batman and Robin protect?",
 answers: [
 
 { text: "Manhhatan", correct: false},
 { text: "Newyork City", correct: false},
 { text: "Texas", correct: false},
 { text: "Gotham City", correct: true},
 
 
 ]
 },
 
 {
  question: "Who is the Jokers side kick in the villan world?",
 answers: [
 
 { text: "Superman", correct: false},
 { text: "Harley Quinn", correct: true},
 { text: "WonderWoman", correct: false},
 { text: "Bain", correct: false},
 
 
 ]
 },
 
 {
  question: "How are superman and supergirl related?",
 answers: [
 
 { text: "Because they are both have SuperPowers", correct: false},
 { text: "Cousins", correct: true},
 { text: "Through Wonderwoman", correct: false},
 { text: "Brother and Sister ", correct: false},
 
 
 ]
 },
 
 {
  question: "Name The name of SuperMans Farther?",
 answers: [
 
 { text: "Jor-El", correct: true},
 { text: "Kar-lel", correct: false},
 { text: "ClarkKent", correct: false},
 { text: "Green Lantern", correct: false},
 
 
 ]
 },
 
 {
  question: "What powers does BatMan have?",
 answers: [
 
 { text: "Super Strength", correct: false},
 { text: "invisibility", correct: false},
 { text: "He can fly", correct: false},
 { text: "None", correct: true},
 
 
 ]
 
 },
 
 {
  question: "What vihicle does Batman drive?",
 answers: [
 
 { text: "Airforce1", correct: false},
 { text: "Jokercopter", correct: fales},
 { text: "Batmobile", correct: true},
 { text: "Invisible Plane", correct: false},
 
 
 ]
 
 }
 
 ];
 
 const questionElement = document.getElementById("question");
 const answerButtons   = document.getElementById("answer-buttons");
 const nextButton      = document.getElementById("next-btn");
 
 let currentQuestionIndex = 0;
 let score                = 0;
 
 function startQuiz(){
 currentQuestionIndex  = 0;
 score                = 0;
 nextButton.innerHTML = "Next";
 showQuestion();
 }
 
 function showQuestion(){
 resetState();
 
 let currentQuestion       = questions[currentQuestionIndex];
 let questionNo            = currentQuestionIndex + 1;
 questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
 
 currentQuestion.answers.forEach(answer => {
 const button     = document.createElement("button");
 button.innerHTML = answer.text;
 button.classList.add("btn");
 answerButtons.appendChild(button);
 if(answer.correct){
 button.dataset.correct = answer.correct;
 
 }
 button.addEventListner("click", selectAnswer);
 
 });
 
 }
 
 function resetState(){
 nextButton.style.display = "none";
 while(answerButtons.firstChild){
 answerButtons.removeChild(answerButtons.firstChild);
 }
 }
 
 function selectAnswer(e){
 const selectedBtn = e.target;
 const isCorrect = selectedBtn.dataset.correct === "true";
 if(isCorrect){
 selectedBtn.classList.add("correct");
 }else{
 selectedBtn.classList.add("incorrect";
 
 }
 Array.from(answerButtons.children).forEach(button => {
 if(button.dataset.correct === "true"){
 button.classList.add("correct");
  }
  button.disabled = true;
  });
  nextButton.style.display = "block";
  
  function showScore(){
  resetState();
  questionElement.innerHTML = 'You scored ${score} out of ${questions.length}!';
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  
  }
  
  
  function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex > questions.lenght){
  showQuestions();
  }else{
  showcore();
  
    }
  
 startQuiz(); 
 