var questionArray = [
    "What does CSS stand for",
    "Where does a js script tag go in an HTML file"
] 

var answerArrayA = [
    "Cats Still Sit",
    "In the head tag"
]
var answerArrayB= [
    "Cascading Style Sheets",
    "At the top of the 'body' tag"
]

var answerArrayC = [
    "Cancel Script Slide",
    "At the bottom of the 'body' tag"
]

var answerArrayD = [
    "Call Script Sheet",
    "After the last 'HTML' tag"
]

var startQuiz = document.querySelector("#start");
var q = document.getElementById("question").textContent;
var answered = document.getElementById("possibleAnswers");


startQuiz.addEventListener("click", function(){
    event.preventDefault();
    console.log("Start Quiz");
    document.getElementById("questionDiv").classList.remove("hide");
    document.getElementById("startDiv").classList.add("hide");
    document.getElementById("clock").classList.remove("hide");
    question();
});

answered.addEventListener("click", function(){
    question();
})

function question(){
    var i = -1;
    i++;
    document.getElementById("question").innerHTML=questionArray[i];
    document.getElementById("a").textContent=" "+answerArrayA[i];
    document.getElementById("b").textContent=" "+answerArrayB[i];
    document.getElementById("c").textContent=" "+answerArrayC[i];
    document.getElementById("d").textContent=" "+answerArrayD[i];
}
