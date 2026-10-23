//exercice 1
function log(yo){
    console.log("yo");
}
log();
//exercice 2
let mois = "octobre";
function saison(mois){
    
    
    switch(mois){
        case "decembre":
        case "janvier":
        case "fevrier":
            console.log("Hiver");
            break;
        case "mars":
        case "avril":
        case "mai":
            console.log("Printemps");
            break;
        case "juin":
        case "juillet":
        case "aout":
            console.log("ete");
            break;
        case "septembre":
        case "octobre":
        case "novembre":
            console.log("automne");
            break;

        default:
            console.log("non valide");
    
    
    }
    return mois;
}
saison(mois);
//exercice 3
let age = 16;
const estMajeur = (age)=>{
    if(age >=18){
        return true;
    }else{
        return false;
    }

}
if(estMajeur(age)){
    console.log("Vous pouvez entrer");
}else{
    console.log("non");
}
//exercice 4

    const monBouton = document.getElementById('btn');
monBouton.addEventListener('click', () => {
    const prenom = prompt("Quel est ton prénom ?");
    const nom = prompt("Quel est ton nom ?");
    alert(`Bonjour ${prenom} ${nom}`);
});