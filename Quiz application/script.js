const questionList = [];
let currentQuestionIndex = 0;
let currentQuestion = {};
let correctAnswer = 0;
let count = 0;

let box = document.getElementById("circleBox");

const nextBtn = document.getElementById("nextBtn");
const totalElement = document.getElementById("total");
const submitBtn = document.getElementById("submitBtn");

const quizQuestionElement = document.querySelector(".quizContent");
const resultElement = document.getElementById("resultSection");
const correctElement = document.getElementById("correct");
const wrongElement = document.getElementById("wrong");
const passOrFail = document.getElementById("message");
let qNumber = document.getElementById("questionDetails");
let quizDetails = document.getElementById("quizDetails");


// for loader 
let spinner = document.getElementById("spinner");
let mainBox = document.querySelector(".uiContent");
let circleLength=0;

function displayNoneFunc() {
    spinner.style.display = "none";
}

function displayBlockFunc() {
    mainBox.style.display = "block";
}
function getQuestions() {

    fetch("https://opentdb.com/api.php?amount=5&category=18&type=multiple")
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            questionList.push(...data.results);
            circleLength=questionList.length;
            totalElement.innerHTML = questionList.length;
            currentQuestion = questionList[0];
            setTimeout(displayBlockFunc, 2000);
            setTimeout(displayNoneFunc, 2000);
            displayQuestion();
            displayCircle();


        })



}
getQuestions();



// for the display the data on UI
function replaceSingleQuote(str) {
    return str.replace(/'/g, "\\'");
}
function displayQuestion() {
    // console.log(currentQuestion.question);



    const questionElement = document.getElementById("question");
    const optionsElement = document.querySelector(".options .option-group");
    let qNo = document.getElementById("slNo");
    // console.log(questionElement, optionsElement);
    questionElement.innerHTML =
        ` <h6 > 
         ${currentQuestion.question}
          </h6>` ;
    qNo.innerHTML = `${currentQuestionIndex + 1}`
    const options = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
        .sort(() => Math.random() - 0.5);

    optionsElement.innerHTML = "";

    options.forEach((option, index) => {
        sendOption = replaceSingleQuote(option);
        optionsElement.innerHTML +=
            `<p  id="option"
        onclick="checkAnswer(this , '${sendOption}')">${option}
        </p>`;
        qNumber.innerText = `${currentQuestionIndex + 1}`
    });

    // console.log(options);
};
let isSelected = false;
function checkAnswer(element, answer) {
    console.log(element,answer);
    
    if (answer) {
        nextBtn.disabled = false;
        const optionsElement = document.querySelector(".options .option-group").children;

        Array.from(optionsElement).forEach((option) => {
            if (option === element) {

                element.classList.add("bg-secondary");
            }
            else {
                option.classList.remove("bg-secondary");
            }
        });

        if (answer == currentQuestion.correct_answer && !isSelected) {
            isSelected = true;
            correctAnswer++;
            // console.log(correctAnswer);
        }
        if (answer != currentQuestion.correct_answer && isSelected) {
            isSelected = false;
            correctAnswer--;
            // console.log("incorrect", correctAnswer);
        }

        let attemptQuestion = currentQuestionIndex + 1;

        if (attemptQuestion == questionList.length) {
            nextBtn.classList.add("d-none");
            
            submitBtn.classList.remove("d-none");
           
        }
    }


}

// for next question 
function nextQuestion(nextBtnElement) {
    isSelected = false;
    ++currentQuestionIndex;
    nextBtnElement.disabled = true;


    currentQuestion = questionList[currentQuestionIndex];
    // console.log(currentQuestion);
    // console.log("hello",nextBtnElement, currentQuestionIndex);



    displayQuestion();

    count++;
    displayCircle();
}
function previewElement(prevBtnElement) {
    if (currentQuestionIndex >= 1) {
        count--;
        currentQuestionIndex--;

        currentQuestion = questionList[currentQuestionIndex];
        displayQuestion();
        displayCircle();
    }
   else{
    alert("No Question for Preview");

   }   
}


function submitResult(btn) {
    // console.log(correctAnswer);
    resultElement.classList.remove("d-none");
    quizQuestionElement.classList.add("d-none");
    btn.classList.add("d-none");
    quizDetails.classList.add("d-none");
    if (correctAnswer >= 5) {
        passOrFail.innerHTML = `<span class="text-success fs-2 ">Pass</span>`;
    }
    else {
        passOrFail.innerHTML = `<span class="text-danger fs-2 ">Fail</span>`;
    }
    correctElement.innerHTML = correctAnswer;
    wrongElement.innerHTML = questionList.length - correctAnswer;

}


function displayCircle() {
    box.innerHTML = "";
    for (let i = 0; i < circleLength; i++) {
        let div = document.createElement('div');
        div.classList.add('circle');
        if (i < count) {
            div.classList.add('visitedQ');
        }
        if (i == count) {
            div.classList.add('currentQ');

        }
        div.innerText = i + 1;
        box.appendChild(div);
    }

}


