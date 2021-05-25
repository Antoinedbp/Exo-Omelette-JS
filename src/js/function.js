import {chef, grandPanier, petitPanier, moyenPanier, oeuf, fromage, basilic, sel, epices, mix, maison, epicerie} from "./instances.js";
import {Chef, Lieu, Panier, Ingredients} from "./classes.js";
import {couteau, poele, bol} from "./outils.js";

export let histoire = () => {

    // Chef est à la maison 
    maison.visiteurs.push(chef);
    chef.lieu = "maison";
    console.log(`${chef.nom} est actuellement à la ${maison.nom} !`);

    // Chef va à l'épicerie
    chef.seDeplacer(maison, epicerie);
    console.log(maison.visiteurs);
    console.log(`Chef est bien à l'${epicerie.nom} !`, epicerie.visiteurs);

    // Chef saisit un panier
    chef.mainDroite.push(epicerie.panier[0]);
    epicerie.panier.splice(epicerie.panier[0], 1);
    console.log(`${chef.nom} a pris le ${chef.mainDroite[0].nom}`);
    console.log(chef.mainDroite[0]);

    // Boucle pour prendre chaque ingrédient 
    epicerie.reserves.forEach(elem => {
        chef.payerArticle(elem, epicerie, chef.mainDroite[0])
    });
    console.log(`Le ${chef.mainDroite[0].nom} de ${chef.nom} est maintenant plein ! En revanche ${chef.nom} est maintenant un peu appauvri..`);
    console.log(chef.argent);

    // Chef rentre à la maison
    chef.seDeplacer(epicerie, maison);
    console.log(`La ${maison.nom} est à nouveau occupé !`, maison.visiteurs);
    console.log(`L'${epicerie.nom} n'a donc plus de clients..`, epicerie.visiteurs);

    // Mise en bol des ingrédients
    while (chef.mainDroite[0].contenu.lenght > 0) {

        console.log(`${chef.nom} met ${chef.mainDroite[0].contenu[0].nom} dans le ${bol.nom}.`);
        bol.contenu.push(chef.mainDroite[0].contenu[0]);
        chef.mainDroite[0].contenu.shift();

    }
    console.log(`Le ${chef.mainDroite[0].nom} du ${chef.nom} est maintenant bien vide !`, chef.mainDroite[0].contenu);
    console.log(`Le ${bol.nom} est désormais rempli !`, bol.contenu);

    // Oubli du panier
    console.log(`${chef.nom} a oublié de rendre son panier...`);
    chef.seDeplacer(maison, epicerie);

    console.log(`${chef.nom} s'excuse sincèrement et rend son panier au responsable de l'${epicerie.nom} !`);
    epicerie.panier.unshift(chef.mainDroite[0]);
    chef.mainDroite.splice(0, 1);
    console.log(`La main droite du ${chef.nom} est maintenant à nouveau libre !`, chef.mainDroite);
    console.log(`L'${epicerie.nom} a pris bonne réception de son panier !`, epicerie.panier);

    // Chef rentre terminer son omelette
    chef.seDeplacer(epicerie, maison);
    console.log(`Le ${chef.nom} peux enfin continuer son omelette !`);

    // Chef vérifie ses ingrédients dans son bol et les coupe si nécessaire
    bol.contenu.forEach(ingredient => {
        if(ingredient.etat == "entier"){
            chef.couper(ingredient, couteau);
        }
    });

    // Il mélange pour transformer en omelette
    bol.melanger(`omelette`);
    console.log(`${chef.nom} mélange bien tous les ingrédients et obtient un liquide uniforme`);

    // Le Chef verse le tout dans la poele
    console.log(`${chef.nom} verse son mélange dans la poele !`);
    poele.contenu.push(bol.contenu);
    bol.contenu.splice();
    console.log(`Le ${bol.nom} est bien vide !`, bol.contenu);
    console.log(`La ${poele.nom} est donc remplie !`, poele.contenu);

    // Il lance donc la cuisson
    console.log(`${chef.nom} lance la cuisson et met en route son timer !`);
    poele.cuire(bol.newMelange);


}

export default {histoire};