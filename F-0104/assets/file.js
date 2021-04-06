function direBonjour(msg, functioname){
    var message = "Bienvenue" + msg;
    functioname(message);
}

function afficheMessage(msg){
    console.log(msg);
}

direBonjour("Tout le monde", afficheMessage);

function somme(a, b) {
    return a + b;
}

function produit(a, b) {
    return a * b;
}

function operation(a, b, callback) {
    console.log(callback(a,b));
}

operation(1,3,somme);
operation(3,3,produit);

function sayHelloAfterXSeconds2(x) {
    setTimeout(function(){
        console.log("hello");
    }, x * 1000);
}

sayHelloAfterXSeconds2(1);

var timeout;
function sayHelloAfterXSeconds3(x) {
    timeout = setTimeout(function(){
        console.log("hello");
    }, x * 1000);
}

sayHelloAfterXSeconds3(2);
clearTimeout(timeout); // hello ne sera jamais affiché

var interval;
function sayHelloAfterXSeconds4(x) {
    interval = setInterval(function(){
        console.log("hello");
    }, x * 1000);
}

sayHelloAfterXSeconds4(2);
clearInterval(interval); // hello ne sera jamais affiché

var obj = {
    nom: "Wick",
    prenom: "John"
};

console.log(obj.nom);
console.log(obj.prenom);

for (var cle in obj){
    console.log(cle + " " + obj[cle]);
}

var obj = new Object();
obj.nom = "Wick";
obj.prenom = "John";

var obj2 = obj;  // obj2 pointe vers obj

obj2.nom = "Coco";
console.log(obj.nom); // affiche Coco - obj et obj2 sont les mêmes objets

var obj2 = {...obj}; // copie d'un objet
obj2.nom = "Toto";
console.log(obj.nom); // affiche Coco et non Toto

var obj2 = Object.assign({}, obj); // même effet que var obj2 = {...obj};
obj2.nom = "Toto";
console.log(obj.nom); // affiche Coco et non Toto

// affichage d'un objet
console.log(obj);

// transformer un objet en chaîne de caractères
var str = JSON.stringify(obj);
console.log(str);

// opération inverse chaîne vers objet
var recupObj = JSON.parse(str);
console.log(recupObj);

var obj = {
    nom: "Wick",
    prenom: "John",
    direBonjour: function() {
        console.log(this.prenom + " " + this.nom);
    }
};

console.log("execute fonction direBonjour");
obj.direBonjour();

// les constructeurs
var Personne = function(nom, prenom){
    this.nom = nom;
    this.prenom = prenom;
    this.afficheNomComplet = function(){
        console.log( "affichage du nom complet : 1ière méthode");
        console.log( this.nom + " " + this.prenom);
    }
};


var me = new Personne("Wick", "John");
console.log( "acteur: " + me.nom + " " + me.prenom);
me.afficheNomComplet();

class Personne2 {
    nom;
    prenom;
    age;

    constructor(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    getNom(){
        return this.nom;
    }

    setNom(nom){
        this.nom = nom;
    }

    afficheNomComplet() {
        return this.nom + " " + this.prenom + " a " + this.age + " ans";
    }
};

var perso = new Personne2("Wick", "John", 41);
console.log("affichage du nom complet");
console.log(perso.afficheNomComplet());
perso.setNom("Toto");
console.log("affichage du nom complet modifié");
console.log(perso.afficheNomComplet());

// ajout d'un attribut à notre objet Personne*
Personne.prototype.rue = 0;
Personne.prototype.getRue = function(){
    return this.rue;
}
Personne.prototype.setRue = function(rue){
    this.rue = rue;
}

console.log("affichage de la propriété rue");
console.log(me.getRue());
me.setRue(1);
console.log("affichage de la propriété rue modifiée");
console.log(me.getRue());


let tab = ['h', 'i', 'j'];
let tab2 = ['e', ...tab, 'k'];
console.log(tab2);

function multiply(){
    var produit=1;
    for (var i=0 ; i < arguments.length ; i++){
        produit *= arguments[i];
    }
    console.log(produit);
}
let numbers = [1, 2, 3, 4];
multiply(...numbers); // affiche 24

console.log(Math.min(...numbers));
