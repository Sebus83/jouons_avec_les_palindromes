let i = 0;
const dateAjd = new Date(). toLocaleDateString()
//console.log(dateAjd)
const tableauDate = splitDate(dateAjd)
//console.log(tableauDate);
const jourParMois = {
    '01': 31,
    '02': 28,
    '03': 31,
    '04': 30,
    '05': 31,
    '06': 30,
    '07': 31,
    '08': 31,
    '09': 30,
    '10': 31,
    '11': 30,
    '12': 31
}
let numDuMois = Object.keys(jourParMois);
let nbJourParMois = Object.values(jourParMois);
// console.log(nbJourParMois)
// console.log(numDuMois)

//fonction pour séparer le jour le mois et l'année
function splitDate(date){
    let tableauDate = date.split('/')
    date = tableauDate[0]
    mois = tableauDate[1]
    annee = tableauDate[2]
    // console.log(date)
    // console.log(mois)
    // console.log(annee)
    // console.log(tableauDate)

    return(tableauDate)
}


//Fonction pour vérifier que le jour est au bon format
function IsValiDate(tableauDate){
// console.log(tableauDate[0])
// console.log(tableauDate[1])

// le nombre de caractère de ma date
if (tableauDate[0].length!=2){
    console.log("le format du jour doit être sur 2 caractères")
}else {
    console.log("true")
}

// récupérer l'index du mois
const index = numDuMois.indexOf(tableauDate[1])

//verifier si le jour de la date est >0
if (tableauDate[0]>0){
    console.log("true")
}else{
console.log("le jour est inférieur à 0")
}

//vérifier si le jour est inférieur ou égale à nd de jour max dans le mois
if (tableauDate[0]<=nbJourParMois[index]){
    console.log("true")
    console.log(nbJourParMois[index])
}else{
console.log("le jour est supérieur à 0")
}

//format pour le mois
if (tableauDate[1].length!=2){
    console.log("le format du mois doit être sur 2 caractères")
}else {
    console.log("true")
}
//verifier si le mois est compris entre 1 et 12
if (0<tableauDate[1] && tableauDate[1]<13){
    console.log("true")
}else {
    console.log("le mois doit être compris entre 1 et 12")
}

//Format pour l'année
if (tableauDate[2].length!=4){
    console.log("le format de l'année doit être sur 4 caractères")
}else {
    console.log("true")
}

}

function isPalindrome(tableauDate){

//créer une chaine de caractères sans les /
const stringDate = tableauDate.join("")
//console.log(stringDate)

// inverser la chaine de caractères
const reverseStringDate = stringDate.split('').reverse().join('');
//console.log(reverseStringDate)

// comparer les deux chaines de caractères
if (stringDate == reverseStringDate){
    //console.log("cette date est un palindrome")
    return true
}else {
    //console.log("Cette date n'est pas un palindrome")
    return false
}

}

function getNextPalindrome(tableauDate){
    
    
    while (!isPalindrome(tableauDate)) {
        dateSuivante(tableauDate);
    }
    console.log("result : " + tableauDate)
    dateSuivante(tableauDate);
    if (i<7){
        i++
        getNextPalindrome(tableauDate)
    }
    
    return tableauDate;
    
}

function dateSuivante(date) {
    date[0]++;
    if (date[0] > "31") {
        date[0] = "01";
        date[1]++;
        if (date[1] > "12") {
            date[1] = "01";
            date[2]++;
        }
    }
}


// IsValiDate(splitDate("25/02/2052"))
// isPalindrome(splitDate("25/02/2052"))
getNextPalindrome(tableauDate)
