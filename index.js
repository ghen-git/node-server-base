var questions;
var askedQuestionsIds;
var currQuestion;

window.onload = function()
{
    questions = JSON.parse(window.localStorage.getItem("questions"));
    if(questions == undefined)
        questions = [];
    askedQuestionsIds = [];

    LoadAnswer();
}

function InsertNew()
{
    questions = JSON.parse(window.localStorage.getItem("questions"));
    if(questions == undefined)
        questions = [];

    questions.push({question: $("#getQuestion").val(), answer: $("#getAnswer").val().split(',')});
    console.log(questions);
    window.localStorage.setItem("questions", JSON.stringify(questions));
}

function Answer()
{

    if(currQuestion.answer.includes($("#answer").val()))
    {
        console.log(`Correct! Answer ${$("#answer").val()}`);
        console.log(currQuestion.answer);
        LoadAnswer();
    }
}

function LoadAnswer()
{
    if(askedQuestionsIds.length != questions.length)
    {
        let questionId;
        do
            questionId = Math.floor(Math.random() * questions.length);
        while(askedQuestionsIds.includes(questionId));
    
        currQuestion = questions[questionId];
    
        $("#question").text(currQuestion.question);
    
        askedQuestionsIds.push(questionId);
    }
}

function Delete()
{
    questions = JSON.parse(window.localStorage.getItem("questions"));
    if(questions == undefined)
        questions = [];

    questions = questions.filter((v, i, a) => { return v.question != $("#questionToDelete").val()});
    console.log(questions);
    window.localStorage.setItem("questions", JSON.stringify(questions));
}