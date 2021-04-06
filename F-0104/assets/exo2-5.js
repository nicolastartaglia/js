var student = {
    name: "David Rayy",
    class: "VI",
    rollno: 12
};

console.log(student);
delete student.rollno;
console.log(student);

class Recipe {
    nom;
    servies;
    ingredients;

    constructor(nom, servies, ingredients) {
        this.nom = nom;
        this.servies = servies;
        this.ingredients = ingredients;
    }

    afficheRecipe(){
        console.log("Nom de la recette: "+this.nom);
        console.log("Nombre de parts: "+this.servies);
        console.log("Ingrédients:");
        for (var elt of this.ingredients){
            console.log("       "+elt);
        }
    }

}

var recipe = new Recipe("Socca", 2, ["pois-chiche", "soleil", "poivre"]);
recipe.afficheRecipe();


var library = [
    {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
    },
    {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
    },
    {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
}];

function afficheLibrairie(lib) {
    for (livre in lib){
        console.log("Titre: "+lib[livre].title);
        console.log("Auteur: "+lib[livre].author);
        console.log("Id de librairie: "+lib[livre].libraryID);
    }
}

afficheLibrairie(library);

class Guerrier {
    nom;
    attaque;
    defense;
    sante;

    constructor(nom, attaque, defense, sante){
        this.nom = nom;
        this.attaque = attaque;
        this.defense = defense;
        this.sante = sante;
    }

    attack(guerrier) {
        if ((guerrier.sante - this.attaque) >= 0) {
            guerrier.sante -= this.attaque;
            console.log("Le guerrier "+this.nom+" attaque le guerrier "+guerrier.nom);
            if (guerrier.sante == 0) {
                console.log("Le guerrier " + guerrier.nom + " est mort");
            } else {
                console.log("Le guerrier "+guerrier.nom+" n'a plus que "+guerrier.sante+" de vie");
            }
        }
    }
}

var guerrier1 = new Guerrier("Nicolas", 1, 10, 10);
var guerrier2 = new Guerrier("Fabrice", 1, 20, 2);
guerrier1.attack(guerrier2);
guerrier1.attack(guerrier2);

class Magicien extends Guerrier {

    mana;

    constructor(nom, attaque, defense, sante, mana) {
        super(nom, attaque, defense, sante); 
        this.mana = mana;
    }

    soin() {
        if (this.mana >= 10){
            this.sante += this.mana;
            this.mana = 0;
            console.log("Le magicien "+this.nom+" se soigne");
            console.log("Son niveau de vie est maintenant de valeur "+this.sante);
        } else {
            console.log("Pouvoir de guérison du magicien insuffisant !");
        }
    }
  }

  var magicien = new Magicien("Merlin", 1, 15, 3, 10);
  guerrier1.attack(magicien);
  guerrier2.attack(magicien);
  magicien.soin();
  magicien.attack(guerrier1);
  guerrier1.attack(magicien);
  magicien.soin();



