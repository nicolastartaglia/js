console.log(Math.round(2.1)); // affiche 2
console.log(Math.pow(2,3)); // affiche 8
console.log(Math.min(2,3)); // affiche 2
console.log(Math.max(2,3)); //affiche 3
console.log(Math.floor(Math.random()*10)); // retourne un entier aléatoire entre 0 et 9
console.log(Math.sqrt(4)); 
console.log(Math.abs(-2)); 

var perso = { 
    nom: 'Wick', 
    prenom: 'John'
};

if ("nom" in perso) console.log("oui");

Object.keys(perso).forEach(function(key) {
    if (perso[key] == 'Wick'){
        console.log('exist');
    }
});

// intanceof retourne true si l'objet donné est de type spécifié

var jour = new Date(2021,04,02);
if (jour instanceof Date) console.log("oui");


function produit(a, b) {
    return a * b;
}

console.log(produit(2, "a")); // affiche NaN ( Not a Number)

// gestion des erreurs
function produitCorrect(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw "paramètre non numérique";
     } 
     return a * b;
}

try {
    console.log(produitCorrect(2, "a"));
} catch (e){
    console.error(e);
}

// Gerer la division par 0 en lancant une exception si le parametre n'est pas divisible par 0 

function division(a, b) {
    if (isNaN(a) || isNaN(b) || b == 0) {
        throw "paramètre non numérique ou division par 0";
     } 
     return a / b;
}

try {
    console.log(division(2, 0));
} catch (e){
    console.error(e);
}

var str = "Bonjour tout le monde";
var pos = str.search(/Tout/i); // regex avec i pour insensibilité à la casse
console.log(pos);  // affiche la position 8

pos = str.search(/c/i);
console.log(pos); // affiche -1 : la chaine via regex n'est pas dans str

var regle = /AB/i;
console.log(typeof(regle)); // une regex est de type object
var result = regle.test("abab");
console.log(result); // affiche true : "ab" se trouve dans la chaîne "abab" 


var chaine = "abab";
var txt = chaine.replace(/ab/g, "c"); // toutes les occurrences de "ab" seront remplacées par "c"
console.log(txt); // affiche "cc"

var str = /AB/gi;
var resultat = str.exec(chaine);
console.log(resultat);
console.log("chaîne trouvée: " +resultat[0]);
console.log("indice de la première occurence: "+resultat.index);
console.log("texte complet: "+resultat.input);

var str = /AB/gi;
var resultat = chaine.match(str);
console.log(resultat); // affiche ['ab', 'ab']


var str = /ba?c/i; // a? = 0 ou 1 a
console.log(str.test("bac")); // affiche true
console.log(str.test("bc")); // affiche true
console.log(str.test("baac")); // affiche false

var p = "2345";
var str = /^([0-9]){4}$/; // demande une chaine avec 4 digits
if(p.match(str)){
    console.log("yes");
}
p= "234565";
if(p.match(str)){
    console.log("yes");
} else {
    console.log("no");
}

var p = "Jean_Baton06";
var str = /^([0-9a-zA-Z_]){6,20}$/; // 6 caractères minimum et 20 max
if(p.match(str)){
    console.log("yes");
} else {
    console.log("no");
}

var  number1="2", number2="2", resultat;
resultat = number1+number2;
console.log(resultat);