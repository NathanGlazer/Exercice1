//exercice 1
let age = 17;
if(age >=18){
    console.log('Tu est majeur');

}else{
    console.log('Tu es mineur');
}
//exercice 2
let nombre = 2;
nombre %2 ===0?console.log("Le nombre" + nombre+"est pair") : console.log("Le nombre " +nombre + "est impair");
//exercice 3
let note = 77;
if(note >=90){
    console.log("Excellent");
}else if(note >=75){
    console.log("Tres bien");
}else if(note >=60){
    console.log("bien");
}else{
    console,log("echec");
}
//exercice 4
let temp =25 ;
if(temp < 0){
    console.log("il gele");
}else if( temp<= 15){
    console.log("il fait frais");
}else if( temp <=25){
    console.log("temp agreable");
}else{
    console.log("il fait chaud");
}
//exercice 5
let connecte = true;
let role = 'admin';
if(connecte == true && role == 'admin'){
    console.log("Bienvenue utilisateur");
}else if(connecte ==true && role =="user"){
    console.log("bienvenue role inconnu");
}else if(connecte = false){
    console.log("acces refuse");
}
//exercice 6
