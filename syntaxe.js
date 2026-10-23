//exercice 1
let nom = 'Nathan';
console.log(nom);
//exercice 2
let ville = 'Montreal';
console.log(ville);
ville = 'victoriaville';
console.log(ville);
//exercice 3
let age = 2;
let name = 'Glazer';
let estConnecte = true;
console.table({age:2, name:"Glazer", estConnecte:true});
//exercice 4
const PI = 3.1416;
let rayon = 4;
circonference = 2*PI*rayon;
console.log('La circonference dun cercle ayant u nrayon de 4cm est :', circonference);
//exercice 5
let nomEleve = 'Nathan';
let prenomEleve = 'glazer';
let ageEleve = 18;
console.log("Je m'appelle" + prenomEleve +nomEleve +"et j'ai" +ageEleve + "ans" );
console.log('Je mappelle'+ prenomEleve +nomEleve +'et jai' +ageEleve + 'ans' );

//exercice 4 fonction

    const monBouton = document.getElementById('btn');
monBouton.addEventListener('click', () => {
    const prenom = prompt("Quel est ton prénom ?");
    const nom = prompt("Quel est ton nom ?");
    alert(`Bonjour ${prenom} ${nom}`);
});
