class Chef {
    constructor(nom, lieu, argent, mainDroite, mainGauche){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;
        this.seDeplacer = (depart, arrivee) => {
            arrivee.visiteurs.push(this);
            depart.visiteurs.splice(depart.visiteurs.indexOf(this), 1);
            this.lieu = arrivee.nom;
            console.log(`${this.nom} se déplace de ${depart.nom} à ${arrivee.nom} !`);
        }
        this.payerArticle = (article, lieu, panier) => {
            this.mainDroite[0].contenu.push(article);
            console.log(`${this.nom} prend ${article.nom} dans les rayons de l'${lieu.nom} et le met dans son ${panier.nom} !`);
            this.argent -= article.prix;
        }
        this.couper = (ingredient, outil) => {
            ingredient.etat = "coupé";
        }
    }
};


class Lieu {
    constructor(nom, visiteurs, panier, reserves){
        this.nom = nom,
        this.visiteurs = visiteurs,
        this.panier = panier,
        this.reserves = reserves
    }
};


class Ingredients {
    constructor(nom, etats, prix){
        this.nom = nom,
        this.etats = etats,
        this.prix = prix
    }
};

class Panier {
    constructor(nom){
        this.nom = nom,
        this.type = "panier",
        this.contenu = []
    }
}



export {Chef, Lieu, Ingredients, Panier};