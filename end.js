var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];


var maxHighScore = 10
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup" , () =>{
   
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked the save butto!");
    e.preventDefault();

    var score = {
        score: Math.floor(Math.random()*100),
        name: username.value
    };
    console.log(score);
    highScores.push(score);

    highScores.sort( (a,b) => b.score - a.score)

    highScores.splice(10);

    localStorage.setItem("highScores" , JSON.stringify(highScores));
    window.location.assign("index.html")
    console.log(highScores);
};