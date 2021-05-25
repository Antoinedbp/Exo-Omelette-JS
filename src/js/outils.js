// Création Couteau
let couteau = {
    nom : "couteau",
    couper (ingredient) {
        this.etat = "coupé";
    }
}

// Création Poele
let poele = {
    nom : "poele",
    contenu : [],
    cuire (ingredient){
            ingredient.etat = "cuit";
            setTimeout(function(){
                console.log(`L'${ingredient.nom} est cuite !`);
            }, 4000)
    }
};
// let poele={
//     contenu:[],
//     cuire(produit){
//         let p = contenu.indexOf(produit)

//         let r = this.contenu[p]
//         r.etat="cuit"
//         setTimeout(function(){console.log(${produit.nom} a été cuit);}, 4000);
//     }
// }
// poele.contenu.push()


// Création Bol
let bol = {
    nom : "bol",
    contenu : [],
    melanger (omelette) {
        this.newMelange = {
            nom : omelette,
        };
        bol.contenu.unshift();
        bol.contenu.splice(1);
    }
};

export {couteau, poele, bol};