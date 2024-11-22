let i = 0;
let dateAjd = new Date(). toLocaleDateString()
//console.log(dateAjd)
let tableauDate = splitDate(dateAjd)
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
    return true
}

// récupérer l'index du mois
const index = numDuMois.indexOf(tableauDate[1])

//verifier si le jour de la date est >0
if (tableauDate[0]>0){
    return true
}

//vérifier si le jour est inférieur ou égale à nd de jour max dans le mois
if (tableauDate[0]<=nbJourParMois[index]){
    return true
    // console.log(nbJourParMois[index])
}

//format pour le mois
if (tableauDate[1].length!=2){
    return false
    //console.log("le format du mois doit être sur 2 caractères")
}

//verifier si le mois est compris entre 1 et 12
if (0<tableauDate[1] && tableauDate[1]<13){
    return true
}else {
        //console.log("le mois doit être compris entre 1 et 12")
}

//Format pour l'année
if (tableauDate[2].length!=4){
    //console.log("le format de l'année doit être sur 4 caractères")
    return false
}

}

function isPalindrome(tableauDate){
    // On formate la date pour avoir le format ddmmyyyy
    let formattedDate = tableauDate.map(num => num.toString().padStart(2, '0')).join('');
    
    // On crée la version inversée sans modifier l'original
    let reversedDate = formattedDate.split('').reverse().join('');
    
    // On compare la date formatée avec sa version inversée
    if (formattedDate === reversedDate) {
        console.log(formattedDate + " : cette date est un palindrome");
        return true;
    } else {
        // console.log("Cette date n'est pas un palindrome");
        return false;
    }
}


function getNextPalindrome(tableauDate){
    // Vérifier si la date est valide avant de commencer
    if (!IsValiDate(tableauDate)) {
        return null; // ou gérer l'erreur
    }
    
    while (!isPalindrome(tableauDate)) {
        incrementDate(tableauDate);
    }
    console.log("result : " + tableauDate)
    incrementDate(tableauDate);
    if (i<7){
        i++
        getNextPalindrome(tableauDate)
    }
    
    return tableauDate;
    
}

function incrementDate(date) {
    // Convertir les éléments en nombres
    let jour = parseInt(date[0]);
    let mois = parseInt(date[1]);
    let annee = parseInt(date[2]);

    // Formatage du mois pour la recherche dans jourParMois
    let moisFormate = mois.toString().padStart(2, '0');
    
    // Récupérer le nombre de jours du mois actuel
    const maxJours = jourParMois[moisFormate];

    // Incrémenter le jour
    jour++;

    // Si on dépasse le nombre de jours du mois
    if (jour > maxJours) {
        jour = 1;
        mois++;
        
        // Si on dépasse décembre
        if (mois > 12) {
            mois = 1;
            annee++;
        }
    }

    // Mettre à jour le tableau avec les nouvelles valeurs (formatées)
    date[0] = jour.toString().padStart(2, '0');
    date[1] = mois.toString().padStart(2, '0');
    date[2] = annee.toString();
}
// IsValiDate(splitDate("25/02/2052"))
// isPalindrome(splitDate("25/02/2052"))
getNextPalindrome(tableauDate)
