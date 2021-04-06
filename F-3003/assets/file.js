function maFonction() {
    // bôite de confirmation
    //var bin = confirm("Press a button");

    // boîte avec une zone de saisie
    //var str = prompt("votre nom", "Nicolas");

    // affichage de la valeur saisie str
    //alert(str);

    console.log("coucou");
    var i = 2;
    var j = i++;
    var x = ++i;
    console.log(j);
    console.log(x);
    var str = "2 + 5 + 3";
    console.log(eval(str)); // 10

    // length
    // toUppercase()
    // toLowercase()
    // trim() supprime les espaces au début et à la fin 
    // substr()
    // indexOf() : retourne la positon d'une chaîne 

    var str = "  bon  jour  ";
    console.log(str.length); // 13
    console.log(str.trim().length);  // 9

    var str2 = "bonjour";
    console.log(str2.substr(3));  // jour
    console.log(str2.substr(3, 2)); // jo
    console.log(str2.substr(-3));  // our
    console.log(str2.substr(1, 3)); // onj
    console.log(str2.indexOf("jour")); // 3
    console.log(str2.indexOf("soir")); // -1
    console.log(str2[2]); // n

    var d = new Date(Date.now());
    console.log(d.toLocaleDateString('fr-FR') + " " + d.toLocaleTimeString());

    var today = new Date();
    var day = today.getDay();
    // var month = today.getMonth() + 1;
    // console.log(month);
    var daylist = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var prepand = (hour >= 12) ? " PM " : " AM ";
    console.log("Aujourd'hui, nous sommes " + daylist[day] + ", et il est " + hour + "h" + minute
        + "m" + second + "s" + prepand);

    switch (new Date().getDay()) {
        case 0:
            console.log("dimanche");
            break;
        case 1:
            console.log("lundi");
            break;
        case 2:
            console.log("mardi");
            break;
        case 3:
            console.log("mercredi");
            break;
        case 4:
            console.log("jeudi");
            break;
        case 5:
            console.log("vendredi");
            break;
        case 6:
            console.log("samedi");
            break;
    }

    // var nbr = prompt("siaisr un nombre");
    //  if(nbr % 2 == 0) {
    //     alert("pair");
    // } else {
    //     alert("impair");
    // }

    // nbr % 2 == 0 ? alert("pair") : alert("impair");
    // alert(nbr % 2 == 0 ? "pair" : "impair");
    for (var i=0 ; i<= 10 ; i++) {
        if (i % 2 == 0) console.log(i);
    }
    // var a = prompt("saisissez une entier:");
    // var b = prompt("saisissez un autre entier:");
    // b < a ? alert(a):alert(b);


    for (var i=0; i<=100 ; i++){
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzbuzz");
        } else if (i % 3 == 0){
            console.log("fizz");
        } else if (i % 5 == 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }

    var tab = [1,2,3,4,5];
    var somme = 0;
    var produit = 1;
    for (i=0; i<tab.length; i++){
        somme += tab[i];
        produit *= tab[i];
    }
    console.log("somme: " + somme + " produit: " + produit);

    var chaine;
    for (i=0; i<5 ; i++){
        chaine="";
        for(var j=0; j<i+1 ; j++){
            chaine += "*";
        }
        console.log(chaine);
    }


    var chaine;
    for (i=0; i<5 ; i++){
        chaine="";
        for (var k=(5-i); k>0;k--){
            chaine += " ";
        }
        for(var j=2*i+1; j>0 ; j--){
            chaine += "*";
        }
        console.log(chaine);
    }
}
maFonction();