var noms = [];

function ajouterUnNom() {
    var nom = prompt("Saisissez un nouveau nom:");
    noms.push(nom);
}

function tirerUnNomAuSort() {
    if (noms.length > 0){
        alert(noms[Math.floor(Math.random() * noms.length)]);
    }
}


