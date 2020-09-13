    /* VARIABLES */
// Prénom
let casePrenom = document.getElementById('prenom');
let aidePrenom = document.getElementById('aidePrenom');
let userPrenom = "";
// Nom
let caseNom = document.getElementById('nom');
let aideNom = document.getElementById('aideNom');
let userNom = "";
// Email
let caseEmail = document.getElementById('email');
let aideEmail = document.getElementById('aideEmail');
let userEmail = "";
// Tel
let caseTel = document.getElementById('tel');
let aideTel = document.getElementById('aideTel');
let userTel = "";
// Message
let caseMessage = document.getElementById('message');
let aideMessage = document.getElementById('aideMessage');
let userMessage = "";


// VERIFICATION PRENOM
casePrenom.addEventListener('blur', function(e) {
    userPrenom = e.target.value;
    if (userPrenom.length < 3) {
        aidePrenom.style.color = "#EA2027";
        aidePrenom.textContent = "Prénom trop court !";
    } else {
        aidePrenom.style.color = "#009432";
        aidePrenom.textContent = "Prénom correct !";
    }
    console.log(userPrenom);
})