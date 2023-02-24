// let saveFile = () => {
//     const name = document.getElementById("Name");
//     const pass = document.getElementById('Password')

//     let data = 
//             '\r Name: ' + name.value + ' \r\n ' + 
//             'pass: ' + pass.value;
        
//         const textToBLOB = new Blob([data], { type: 'text/plain' });
//         const sFileName = 'formData.txt';

//         let newLink = document.createElement("a");
//         newLink.download = sFileName;

//         if (window.webkitURL != null) {
//             newLink.href = window.webkitURL.createObjectURL(textToBLOB);
//         }
//         else {
//             newLink.href = window.URL.createObjectURL(textToBLOB);
//             newLink.style.display = "none";
//             document.body.appendChild(newLink);
//         }

//         newLink.click(); 
// }

let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});


function comptFunc(){
    f1 = window.confirm("Are you ready for the Quiz!")
    if(f1){
        window.location.replace("questions.html")
    }
}
function jeeAlert(){
    f1 = window.confirm("Are you ready for the Quiz!")
    if(f1){
        window.location.replace("jee_ques.html")
    }
}
function neetAlert(){
    f1 = window.confirm("Are you ready for the Quiz!")
    if(f1){
        window.location.replace("neet_ques.html")
    }
}
function upscAlert(){
    f1 = window.confirm("Are you ready for the Quiz!")
    if(f1){
        window.location.replace("upsc_ques.html")
    }
}
