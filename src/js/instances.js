import {Chef, Lieu, Ingredients, Panier} from "./classes.js";
import {couteau, poele, bol} from "./outils.js";

// Création Personnage
let chef = new Chef("Chef", "", 100, [], []);

// Création Paniers
let grandPanier = new Panier("grandPanier");
let petitPanier = new Panier ("petitPanier");
let moyenPanier = new Panier("moyenPanier");

// Création ingrédients
let oeuf = new Ingredients("oeuf", "entier", 3.5);
let fromage = new Ingredients("fromages rapé", "coupé", 5);
let basilic = new Ingredients("basilic", "entier", 3);
let sel = new Ingredients("sel", "moulu", 5);
let epices = new Ingredients("épices", "moulu", 12.5);
let mix = new Ingredients("omelette", "entier");

// Création Lieux
let maison = new Lieu("Maison", [], []);
let epicerie = new Lieu("épicerie", [], [grandPanier, petitPanier, moyenPanier], [oeuf, fromage, basilic, sel, epices]);

export {chef, grandPanier, petitPanier, moyenPanier, oeuf, fromage, basilic, sel, epices, mix, maison, epicerie}