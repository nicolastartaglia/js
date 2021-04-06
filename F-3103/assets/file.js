function maFonction() {
    var tab = [1,2,3,4,5];
    var somme = 0;
    var produit = 1;
    for (i=0; i<tab.length; i++){
        somme += tab[i];
        produit *= tab[i];
    }
    console.log("somme: " + somme + " produit: " + produit);

    for (var elt of tab) {
        console.log(elt);
    }

    tab.push(6);
    console.log(tab);

    // push ajoute un élément
    // pop supprime le dernier élément du tableau
    // shift supprime le premier du tableau
    // unshift ajoute un élément en début de tableau
    // reverse inverse l'ordre des éléemnts du tableau
    // sort trie le tableau
    // splice supprime, ajoute  un élément du tableau suivant la position en paramètre
    // includes retourne true si la valeur passée en paramètre est dans le tableau
    // indexOf retourne la position de l'élément passé en paramètre, -1 sinon
    // slice extrait un sous tableau
    // fill initialise ou modifie les valeurs d'un tableau

    var sports = ["foot","tennis", "rugby", "basket", "volley"];

    // on ajoute les éléments basket et pétanque à la position 2 du tableau sans en supprimer
    var tab = sports.splice(2,0, "Basket", "Pétanque");  
    
    console.log(tab);  // retourne l'élément supprimé -ici on supprime aucun élément

    for (var elt of sports) {  // retourne les éléments de sports (foot, tennis, Pétanque, basket, volley)
        console.log(elt);
    }

    var tab = sports.slice(1, 3); // retourn ['tennis', 'Basket']
    console.log(tab);

    // initialise un tableau de 3 éléments à 0
    var tab = new Array(3).fill(0);
    console.log(tab);

    var tab = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    tab.fill(9, 2, 5); // modifie les valeurs de tab de l'indice 2 à 4 par 9

    // retourne [0, 1, 9, 9, 9, 5, 6, 7, 8]
    console.log(tab);

    tab.unshift(-1);

    // retourne [-1, 0, 1, 9, 9, 9, 5, 6, 7, 8]
    console.log(tab);

    // .forEach parcours un tableau
    // map applique une fonction à un tableau
    // filter filtre les éléments d'un tableau suivant un critère
    // reduce réduit tous les éléments d'un tableau en un seul selon une règle définie ou d'une fonction


    var tab = [2, 3, 5];

    // retourne 3 5
    tab.map(x => x + 3)
       .filter( x => x > 5)
       .forEach( 
           function(a, b) {  // b n'est pas utilisé
               console.log(a - 3);
           }
       );
    
    console.log("ex1:");
    console.log(tab); // [2, 3, 5]
    var somme = tab.map(x => x + 3)
                   .filter(x => x > 5)
                   .reduce( 
                        function(sum,elem){
                            return sum + elem;
                        }
                    );
    console.log(somme); // affiche 14

    function faitLaSomme(a, b){
      return a + b;
    }

    var res = faitLaSomme(1,3);
    console.log(res);

    const addition = (a, b) => a + b;
    var res = addition(1,3);
    console.log(res);

    // autre façon de déclarer une fonction
    // la variable somme existe déjà pour cette raison let somme génère une erreur, pareil pour res
    let somme2 = new Function("a", "b", "return a + b");
    let res2 = somme2(1,3);
    console.log(res2);


    // fonction avec un nombre de paramètres variable
    function somme3() {
        let result = 0;
        for(var i=0; i<arguments.length;i++){
            result += arguments[i];
        }
        return result;
    }

    console.log(somme3(1,3,4,5));

    let tableau = [5, 6, 7];
    let premierElement = x => x[0];

    // affiche 5
    console.log(premierElement(tableau));
    
    let ageJours = x => x * 365;
    console.log(ageJours(41));

    let tempsSecondes = x => x * 60;
    console.log(tempsSecondes(41));

    var tab = [1,2,3,4,5];
    var somme = tab.reduce((sum, elem) => sum += elem);
    var produit = tab.reduce((prod, elem) => prod *= elem);
    
    // affiche somme: 16 produit: 240
    console.log("somme: " + somme + " produit: " + produit);

    let tabNotes = [1.5, 4.5, 18, 19, 15, 0, 11.5, 13.5, 14, 15, 15];
    let afficheNotes = x => console.log(x);
    let notesSup10 = x => console.log(x.filter(note => note >= 10));
    let moyenneNotes = x => console.log(x.reduce((sum,note) => sum += note) / x.length);
    let noteMax = x => console.log(x.sort((a,b) => a - b)[x.length-1]);
    let noteMax2 = x => console.log(Math.max(...x));
    let rechercheNote = (x, note) => console.log(x.includes(note));

    afficheNotes(tabNotes);
    notesSup10(tabNotes);
    moyenneNotes(tabNotes);
    noteMax(tabNotes);
    noteMax2(tabNotes);
    rechercheNote(tabNotes, 11.5);
    rechercheNote(tabNotes, 10);

    
}
maFonction();