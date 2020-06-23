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

var correct = [
    "Cascading Style Sheets",
    "At the bottom of the 'body' tag"
]


var startQuiz = document.querySelector("#start");
var q = document.getElementById("question").textContent;
var answered = document.getElementById("possibleAnswers");

//Start quiz button
startQuiz.addEventListener("click", function(){
    event.preventDefault();
    console.log("Start Quiz");
    document.getElementById("questionDiv").classList.remove("hide");
    document.getElementById("startDiv").classList.add("hide");
    document.getElementById("clock").classList.remove("hide");
    question();
    timer();
});

answered.addEventListener("click", function(){
    // console.log("clicked")
    // console.log(event.target.textContent);
    // console.log(correct[i]);
    if (event.target.textContent === correct[i]){
        document.getElementById("numberQuestion").classList.add("right");
        document.getElementById("clock").classList.add("right1");

        setTimeout(function(){
            document.getElementById("numberQuestion").classList.remove("right");
            document.getElementById("clock").classList.remove("right1");
        },500)
    } else {
        document.getElementById("numberQuestion").classList.add("wrong");
        document.getElementById("clock").classList.add("wrong1");

        setTimeout(function(){
            document.getElementById("numberQuestion").classList.remove("wrong");
            document.getElementById("clock").classList.remove("wrong1");
        },500)
    }
    question();
})

var i = -1;

function question(){
    i++;
    document.getElementById("question").innerHTML=questionArray[i];
    document.getElementById("a").textContent=""+answerArrayA[i];
    document.getElementById("b").textContent=""+answerArrayB[i];
    document.getElementById("c").textContent=""+answerArrayC[i];
    document.getElementById("d").textContent=""+answerArrayD[i];
    document.getElementById("numberQuestion").textContent="Question # "+(i+1);
    return i;
}



function timer(){
console.log("Start timer");
}
