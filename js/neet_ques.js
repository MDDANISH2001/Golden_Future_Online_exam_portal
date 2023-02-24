const questions = [
    {
        question: "The escape velocity from the Earth's surface is v.The escape velocity from the surface of another planet having a radius, four times that of Earth and same mass density is",
        optionA: "4v",
        optionB: "2v",
        optionC: "3v",
        optionD: "v",
        correctOption: "optionA"
    },

    {
        question: "The electron concentration in an n-type semiconductor is the same as hole concentration in a p-type semiconductor. An external field (electric) is applied across each of them. Compare the currents in them.",
        optionA: "No current will flow in p-type, current will only flow in n-type",
        optionB: "Current in n-type = current in p-type",
        optionC: "Current in p-type > current in n-type",
        optionD: "Current in n-type > current in p-type.",
        correctOption: "optionD"
    },

    {
        question: "In a potentiometer circuit a cell of EMF 1.5 V gives balance point at 36 cm length of wire. If another cell of EMF 2.5 V replaces the first cell, then at what length of the wire, the balance point occurs?",
        optionA: "62 cm",
        optionB: "60 cm",
        optionC: "21.6 cm",
        optionD: "64 cm",
        correctOption: "optionB"
    },

    {
        question: "From a circular ring of mass 'M' and radius 'R' an arc corresponding to a 90° sector is removed. The moment of inertia of the remaining part of the ring about an axis passing through the centre of the ring and perpendicular to the plane of the ring is 'K' times 'MR2'. Then the value of 'K' is",
        optionA: "1 / 8",
        optionB: "3 / 4",
        optionC: "7 / 8",
        optionD: "1 / 4",
        correctOption: "optionB"
    },

    {
        question: "The effective resistance of a parallel connection that consists of four wires of equal length, equal area of cross-section and same material is 0.25 . What will be the effective resistance if they are connected in series?",
        optionA: "4 ohm",
        optionB: "0.25 ohm",
        optionC: "0.5 ohm",
        optionD: "1 ohm",
        correctOption: "optionA"
    },

    {
        question: "A lens of large focal length and large aperture is best suited as an objective of an astronomical telescope since",
        optionA: "A large aperture contributes to the quality and visibility of the images.",
        optionB: "A large area of the objective ensures better light gathering power.",
        optionC: "A large aperture provides a better resolution.",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "The velocity of a small ball of mass M and density d, when dropped in a container filled with glycerine becomes constant after some time. If the density of glycerine is 2/d, then the viscous force acting on the ball will be",
        optionA: "2Mg",
        optionB: "Mg/2",
        optionC: "Mg",
        optionD: "(3/2)Mg",
        correctOption: "optionB"
    },

    {
        question: "Dihedral angle of least stable conformer of ethane is :",
        optionA: "0°",
        optionB: "120°",
        optionC: "180°",
        optionD: "60°",
        correctOption: "optionA"
    },

    {
        question: "The structures of beryllium chloride in solid state and vapour phase, are :",
        optionA: "Chain in both",
        optionB: "Chain and dimmer, respectively",
        optionC: "Linear in both",
        optionD: "Dimmer and Linear, respectively",
        correctOption: "optionB"
    },

    {
        question: "Right option for the number of tetrahedral and octahedral voids in hexagonal primitive unit cell are :",
        optionA: "12, 6",
        optionB: "8, 4",
        optionC: "6, 12",
        optionD: "2, 1",
        correctOption: "optionA"
    },

    {
        question: "The maximum temperature that can be achieved in blast furnace is :",
        optionA: "Upto 5000 K",
        optionB: "Upto 1200 K",
        optionC: "Upto 1900 K",
        optionD: "Upto 2200 K",
        correctOption: "optionD"
    },

    {
        question: "The correct option for the number of body centred unit cells in all 14 types of Bravais lattice unit cells is :",
        optionA: "3",
        optionB: "7",
        optionC: "5",
        optionD: "2",
        correctOption: "optionA"
    },


    {
        question: "The major product formed in dehydrohalogenation reaction of 2-Bromo pentane is Pent-2-ene. This product formation is based on?",
        optionA: "Huckel's Rule",
        optionB: "Saytzeff's Rule",
        optionC: "Hund's Rule",
        optionD: "Hofmann Rule",
        correctOption: "optionB"
    },

    {
        question: "Reduction of nitrobenzene in the presence of Zn /NH4 Cl gives",
        optionA: "azobenzene",
        optionB: "hydrazobenzene",
        optionC: "N-phenyl hydroxylamine",
        optionD: "aniline",
        correctOption: "optionC"
    },

    {
        question: "When gene targetting involving gene amplification is attempted in an individual's tissue to treat disease, it is known as :",
        optionA: "Safety Testing",
        optionB: "Biopiracy",
        optionC: "Gene Therapy",
        optionD: "Molecular Diagnosis",
        correctOption: "optionC"
    },

    {
        question: "During the purification process for recombinant DNA technology, addition of chilled ethanol precipitates out :",
        optionA: "Polysaccharides",
        optionB: "RNA",
        optionC: "DNA",
        optionD: "Histrones",
        correctOption: "optionC"
    },

    {
        question: "When the centromere is situated in the middle of two equal arms of chromosomes, the chromosome is referred as :",
        optionA: "Acrocentric",
        optionB: "Metacentric",
        optionC: "Telocentric",
        optionD: "Sub-metacentric",
        correctOption: "optionB"
    },

    {
        question: "The term used for transfer of pollen grains from anthers of one plant to stigma of a different plant which, during pollination, brings genetically different types of pollen grains to stigma, is :",
        optionA: "Cleistogamy",
        optionB: "Xenogamy",
        optionC: "Geitonogamy",
        optionD: "Chasmogamy",
        correctOption: "optionB"
    },

    {
        question: "In the equation GPP - R = NPP, R represents :",
        optionA: "Respiration losses",
        optionB: "Radiant energy",
        optionC: "Retardation factor",
        optionD: "Environmental factor",
        correctOption: "optionA"
    },

    {
        question: "Dobson units are used to measure thickness of:",
        optionA: "Troposphere",
        optionB: "CFCs",
        optionC: "Stratosphere",
        optionD: "Ozone",
        correctOption: "optionD"
    },

    {
        question: `Persons with 'AB' blood group are called as "Universal recipients". This is due to :`,
        optionA: "Absence of antibodies, anti-A and anti-B, in plasma",
        optionB: "Absence of antigens A and B on the surface of RBCs",
        optionC: "Absence of antigens A and B in plasma",
        optionD: "Presence of antibodies, anti-A and anti-B, on RBCs",
        correctOption: "optionA"
    },

    {
        question: "Which of the following statements wrongly represents the nature of smooth muscle?",
        optionA: "These muscles are present in the wall of blood vessels",
        optionB: "These muscle have no striations",
        optionC: "They are involuntary muscles",
        optionD: "Communication among the cells is performed by intercalated discs",
        correctOption: "optionD"
    },

    {
        question: "Which enzyme is responsible for the conversion of inactive fibrinogens to fibrins?",
        optionA: "Thrombokinase",
        optionB: "Thrombin",
        optionC: "Renin",
        optionD: "Epinephrine",
        correctOption: "optionB"
    },

    {
        question: "Erythropoietin hormone which stimulates R.B.C. formation is produced by:",
        optionA: "Juxtaglomerular cells of the kidney",
        optionB: "Alpha cells of pancreas",
        optionC: "The cells of rostral adenohypophysis",
        optionD: "The cells of bone marrow",
        correctOption: "optionA"
    },

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 11) {
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
        if (indexNumber <= 11) {
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
    if (playerScore <= 4) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 5 && playerScore < 9) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 10) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 12) * 100

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