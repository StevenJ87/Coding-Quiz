var questionArray = [
    "What does CSS stand for",
    "Where does a js script tag go in an HTML file",
    "How much will 'i' increase by with ++",
    "The CSS attribute 'color' changes what in a tag",
    "How are 'id' tags presented in CSS",
    "What does 'px' stand for when sizing",
    "What is bootstrap"
] 

var answerArrayA = [
    "Cats Still Sit",
    "In the head tag",
    "2",
    "text color",
    "With a ' . '",
    "Pixels",
    "A website for javascript"
]
var answerArrayB= [
    "Cascading Style Sheets",
    "At the top of the 'body' tag",
    "1",
    "background color",
    "With ' id '",
    "Pictures",
    "A website for designer boots"
]

var answerArrayC = [
    "Cancel Script Slide",
    "At the bottom of the 'body' tag",
    "0",
    "border color",
    "Nothing",
    "Per X-axis",
    "designer boots"
]

var answerArrayD = [
    "Call Script Sheet",
    "After the last 'HTML' tag",
    "It doubles",
    "highlight color",
    "With ' # '",
    "pixies",
    "A website for CSS"
]

var correct = [
    "Cascading Style Sheets",
    "At the bottom of the 'body' tag",
    "1",
    "text color",
    "With ' # '",
    "Pixels",
    "A website for CSS"
]

var highScores = {
    initials:[],
    score:[]
};

var startQuiz = document.querySelector("#start");
var q = document.getElementById("question").textContent;
var answered = document.getElementById("possibleAnswers");
var seconds = document.getElementById("countdown");
var points = document.getElementById("score");
var submit = document.getElementById("submit");
var name1 = document.getElementById("name1");
var name2 = document.getElementById("name2");
var name3 = document.getElementById("name3");
var name4 = document.getElementById("name4");
var name5 = document.getElementById("name5");
var name6 = document.getElementById("name6");
var name7 = document.getElementById("name7");
var name8 = document.getElementById("name8");
var name9 = document.getElementById("name9");
var name10 = document.getElementById("score10");
var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var score3 = document.getElementById("score3");
var score4 = document.getElementById("score4");
var score5 = document.getElementById("score5");
var score6 = document.getElementById("score6");
var score7 = document.getElementById("score7");
var score8 = document.getElementById("score8");
var score9 = document.getElementById("score9");
var score10 = document.getElementById("score10");

//renderScores();

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
        setHighScore();

    } else{

    if (event.target.textContent === correct[i]){
        document.getElementById("numberQuestion").classList.add("right");
        document.getElementById("clock").classList.add("right1");
        document.getElementById("secondsRight").classList.add("right1");
        document.getElementById("secondsRight").classList.remove("hide");
        secondsElapsed= secondsElapsed - 5;

        setTimeout(function(){
            document.getElementById("numberQuestion").classList.remove("right");
            document.getElementById("clock").classList.remove("right1");
            document.getElementById("secondsRight").classList.remove("right1");
            document.getElementById("secondsRight").classList.add("hide");
            question();
        },500)
    } else {
        document.getElementById("numberQuestion").classList.add("wrong");
        document.getElementById("clock").classList.add("wrong1");
        document.getElementById("secondsWrong").classList.add("wrong1");
        document.getElementById("secondsWrong").classList.remove("hide");
        secondsElapsed= secondsElapsed + 10;
        
        
        setTimeout(function(){
            document.getElementById("numberQuestion").classList.remove("wrong");
            document.getElementById("clock").classList.remove("wrong1");
            document.getElementById("secondsWrong").classList.remove("wrong1");
        document.getElementById("secondsWrong").classList.add("hide");
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

function setHighScore(){
points.textContent = " " +left
console.log(points.textContent);
return points.textContent
}


submit.addEventListener("click",function(){
    var finalScore = points.textContent;
     var user = JSON.parse(localStorage.getItem('user'));
     var highScores = user;
//     var name = document.getElementById("initials").value;
     highScores.score.push(finalScore);
     highScores.initials.push(name);
     localStorage.setItem('user',JSON.stringify(highScores));
//     console.log(highScores);
//     //renderScores();
//     return highScores
 })