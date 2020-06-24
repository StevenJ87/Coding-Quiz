var questionArray = [
    "What does CSS stand for",
    "Where does a js script tag go in an HTML file",
    "How much will 'i' increase by with ++",
    "The CSS attribute 'color' changes what in a tag",
    "How are 'id' tags presented in CSS"
] 

var answerArrayA = [
    "Cats Still Sit",
    "In the head tag",
    "2",
    "text color",
    "With a ' . '"
]
var answerArrayB= [
    "Cascading Style Sheets",
    "At the top of the 'body' tag",
    "1",
    "background color",
    "With ' id '"
]

var answerArrayC = [
    "Cancel Script Slide",
    "At the bottom of the 'body' tag",
    "0",
    "border color",
    "Nothing"
]

var answerArrayD = [
    "Call Script Sheet",
    "After the last 'HTML' tag",
    "It doubles",
    "highlight color",
    "With ' # '"
]

var correct = [
    "Cascading Style Sheets",
    "At the bottom of the 'body' tag",
    "1",
    "text color",
    "With ' # '"
]


var startQuiz = document.querySelector("#start");
var q = document.getElementById("question").textContent;
var answered = document.getElementById("possibleAnswers");
var seconds = document.getElementById("countdown")


//Start quiz button
startQuiz.addEventListener("click", function(){
    event.preventDefault();
    document.getElementById("questionDiv").classList.remove("hide");
    document.getElementById("startDiv").classList.add("hide");
    document.getElementById("clock").classList.remove("hide");
    question();
    time();
});

answered.addEventListener("click", function(){
    // console.log("clicked")
    // console.log(event.target.textContent);
    // console.log(correct[i]);
    if(i=== (questionArray.length-1)){

        document.getElementById("questionDiv").classList.add("hide");
        document.getElementById("clock").classList.add("hide");
        //Pause Time
        //Enter High Score
        document.getElementById("scoreDiv").classList.remove("hide");

    } else{

    if (event.target.textContent === correct[i]){
        document.getElementById("numberQuestion").classList.add("right");
        document.getElementById("clock").classList.add("right1");
        secondsElapsed= secondsElapsed - 5;

        setTimeout(function(){
            document.getElementById("numberQuestion").classList.remove("right");
            document.getElementById("clock").classList.remove("right1");
            question();
        },500)
    } else {
        document.getElementById("numberQuestion").classList.add("wrong");
        document.getElementById("clock").classList.add("wrong1");
        secondsElapsed= secondsElapsed + 10;
        
        
        setTimeout(function(){
            document.getElementById("numberQuestion").classList.remove("wrong");
            document.getElementById("clock").classList.remove("wrong1");
            question();
        },500);
    }
    
}})

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

var secondsElapsed = 0
var left = 60

function time(){
var time = setInterval(function(){
    left = 60 - secondsElapsed;
    secondsElapsed++;
    renderTime();
},1000);
return left
}; 

function renderTime(){
seconds.textContent = left;
}