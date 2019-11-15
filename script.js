var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("answer-text"));
var questionCounterText = document.getElementById("questionCounter");
var scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
{

    question: "Who killed uncle Ben from Spiderman?",
    choice1: "Norman Osbourne aka Green Goblin",
    choice2: "Dr. Otto Octavius",
    choice3: "Flink Marko aka The Sandman",
    choice4: "Kraven The Hunter",
    answer: 3


},

{

    question: "What superhero was born with the Curse of Kordax?",
    choice1: "Hawkman",
    choice2: "Spiderman",
    choice3: "Aquaman",
    choice4: "Ghost Rider",
    answer: 3


},

{

    question: "What super villain was created when Emil Blonsky accidentally exposed himself to a concentrated burst of gamma rays?",
    choice1: "Mr.Fixit",
    choice2: "Abomination",
    choice3: "The Leader",
    choice4: "Doc Samson",
    answer: 2


},

{

    question: "What superhero grew up on the planet Tamaran?",
    choice1: "The Silver Surfer",
    choice2: "Starfire",
    choice3: "Beast Boy",
    choice4: "HawkGirl",
    answer: 2


},

{

    question: "Who is Skaar?",
    choice1: "Son of Tarzan",
    choice2: "Son of Wolverine",
    choice3: "Son of Hulk",
    choice4: "Son of Thor",
    answer: 3


},

{

    question: "Which of the following heroes was NOT a member of the magically powered Sentinels of Magic?",
    choice1: "Raven",
    choice2: "Doctor Fate",
    choice3: "Zatana",
    choice4: "Doctor Strange",
    answer: 4


},

{

    question: "Which Green Lantern came first?",
    choice1: "Alan Scott",
    choice2: "Hal Jordan",
    choice3: "John Stewart",
    choice4: "Guy Gardner",
    answer: 1


},

{

    question: "Who is the Scarlet Witch's twin brother?",
    choice1: "Doctor Strange",
    choice2: "Magneto",
    choice3: "Quicksilver",
    choice4: "Wonder Man",
    answer: 3


},
{

    question: "What is the name of Doctor Strange's home in Greenwich Village?",
    choice1: "Sanctum Santorum",
    choice2: "The Bowery",
    choice3: "Salem Center",
    choice4: "Darkmoor",
    answer: 1


},

{

    question: "Which of the following heroes was NOT a founding member of the X-Men?",
    choice1: "Iceman",
    choice2: "Beast",
    choice3: "Marvel Girl",
    choice4: "Wolverine",
    answer: 4


},
]

var correctBonus = 10;
var maxQuestions = 10;


startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion ();
};

getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem("mostRecentScore" , score);
        return window.location.assign("end.html")
    }

    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + maxQuestions;

    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
     currentQuestion = availableQuestions[questionIndex];
     question.innerText = currentQuestion.question;

     choices.forEach( choice => {
         var number = choice.dataset ["number"];
         choice.innerText = currentQuestion ["choice" + number]
     });

     availableQuestions.splice(questionIndex, 1);

     acceptAnswer = true;

};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        
        if(!acceptAnswer) return;
        
        acceptAnswer = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];
       
       var classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

       if(classToApply === "correct") {
           incrementScore(correctBonus);
       }

       selectedChoice.parentElement.classList.add(classToApply);

       setTimeout ( () =>{
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
       }, 1000);
       
       
       


    });
    


});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}



startQuiz();

