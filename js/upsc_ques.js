const questions = [
    {
        question: "Gilbert Houngbo is elected the new director-general of which of the following organization?",
        optionA: "United Nations Children's Fund (UNICEF)",
        optionB: "The International Labour Organization (ILO)",
        optionC: "World Health Organization (WHO)",
        optionD: "United Nations Education Scientific & Cultural Organization (UNESCO)",
        correctOption: "optionB"
    },

    {
        question: "According to _______  and _______  stratification exists in every known human society.",
        optionA: "Talcott and Parson",
        optionB: "Fisher and Eugene",
        optionC: "Kingsley Davis and Moore",
        optionD: "None of these",
        correctOption: "optionC"
    },

    {
        question: "Who selects the officers of the Indian Administrative Service working in Rajasthan?",
        optionA: "University Grant Commission",
        optionB: "Home Ministry",
        optionC: "Rajasthan Public Service Commission",
        optionD: "Union Public Service Commission",
        correctOption: "optionD"
    },

    {
        question: "The power of appoint members of the Union Public Service Commission rests with the",
        optionA: "President",
        optionB: "Prime Minister",
        optionC: "Parliament",
        optionD: "Ministers of Home Affairs",
        correctOption: "optionA"
    },

    {
        question: "The chairman and the members of the Union Public Service Commission hold office for a term of",
        optionA: "4 years",
        optionB: "5 years",
        optionC: "6 years",
        optionD: "7years",
        correctOption: "optionC"
    },

    {
        question: "The Operation “NARCOS”, recently in news, is a month long pan India drive against smuggling of narcotics initiated by:",
        optionA: "Central Reserve Police Force",
        optionB: "Railway Protection Force",
        optionC: "Indo-Tibetan Border Police",
        optionD: "Sashastra Seema Bal",
        correctOption: "optionB"
    },

    {
        question: "Which one of the following seas is associated with ‘Snake Island’ which has been in the news recently?",
        optionA: "Black Sea",
        optionB: "Caspian Sea",
        optionC: "Aral Sea",
        optionD: "Mediterranean Sea",
        correctOption: "optionA"
    },

    {
        question: "India's only active volcano is located at which among the following places?",
        optionA: "Car Nicobar",
        optionB: "Barren island",
        optionC: "Maya Bunder",
        optionD: "Lakshdweep",
        correctOption: "optionB"
    },

    {
        question: "Which among the following South Indian states shared its boundary with the maximum number of other states?",
        optionA: "Tamil Nadu",
        optionB: "Kerala",
        optionC: "Andhra Pradesh",
        optionD: "Karnataka",
        correctOption: "optionD"
    },

    {
        question: "Which of the following series of Dharwar system is also known as Delhi Series?",
        optionA: "Chilpi Series",
        optionB: "Rialo Series",
        optionC: "Champion Series",
        optionD: "Khondolite Series",
        correctOption: "optionB"
    },

    {
        question: "Which one of the following regions of India has the characteristic features of Deserts, fertile plains and moderately forested mountains? ",
        optionA: "outh-Western border along Arabian Sea",
        optionB: "North-Western India",
        optionC: "North-Eastern Frontier",
        optionD: "Coromandel Coast",
        correctOption: "optionB"
    },

    {
        question: "Which of the following glaciers is located in the Lahul Spiti region?",
        optionA: "Diamir",
        optionB: "Rupal",
        optionC: "Sonapani",
        optionD: "Zemu",
        correctOption: "optionC"
    },


    {
        question: "Veliconda group of low hills is a structural part of which of the following?",
        optionA: "Nilgiri Hills",
        optionB: "Western Ghats",
        optionC: "Eastern Ghats",
        optionD: "Cardamom Hills",
        correctOption: "optionC"
    },

    {
        question: "Penganga is a tributary of which of the following rivers in India?",
        optionA: "Kaveri",
        optionB: "Godavari",
        optionC: "Narmada",
        optionD: "Krishna",
        correctOption: "optionB"
    },



]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 8) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"
    
    
}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    window.alert("Thanks for choosing Golden Future. Take time to explore more features!")
    window.location.replace("index.html")
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}

function confirmUser(){
    f1=window.confirm("Are your sure you want to Cancel Quiz?")
    if (f1){
        window.location.replace("index.html")
    }
}