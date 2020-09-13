// VARIABLES
let casePrenom = document.getElementById('prenom');
let aidePrenom = document.getElementById('aidePrenom');
let userPrenom = "";

// VERIFICATION PRENOM
casePrenom.addEventListener('blur', function(e) {
    userPrenom = e.target.value;
    if (e.target.value.length < 3) {
        aidePrenom.style.color = "#EA2027";
        aidePrenom.textContent = "Prénom trop court !";
    } else {
        aidePrenom.style.color = "#009432";
        aidePrenom.textContent = "Prénom correct !";
    }
    console.log(userPrenom);
})