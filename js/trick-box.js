const trickBox = {

    init: function () {
        trickBox.bindFirstTrickBox()
    },

    bindFirstTrickBox: function() {
        const bindFirstTrickBox = document.querySelector(".trick-box");
        // On pose l'écouteur sur la bonne div
        bindFirstTrickBox.addEventListener("mouseover", trickBox.handleTrickBox);
    },

    handleTrickBox: function(event) {
        // Petit test pour voir si la console affiche le message quand la souris arrive dans la div .trick-box
        console.log("Quand on passe dans .trick-box, ce message s'affiche dans la console !");
        // On sélectionne le bouton
        let selectButton = document.querySelector("#button");
        console.log(selectButton);
        // On supprime le bouton
        selectButton.remove();
        // Quand la souris sort de la div .trick-box, on fait réapparaître le bouton
        document.querySelector(".trick-box").onmouseout = trickBox.buttonReappear;
    },

    buttonReappear: function () {
        // On créé un élément
        let buttonReappear = document.createElement("button");
        // On lui assigne un texte
        buttonReappear.textContent = "Allez, clique !";
        // On lui donne une id
        buttonReappear.setAttribute("id", "button");
        // On lui donne une class
        buttonReappear.setAttribute("class", "button");
        // On lui donne un type
        buttonReappear.setAttribute("type", "button");
        // On le place dans la div . trick-box
        document.querySelector(".trick-box").append(buttonReappear);
    },

}

// On charge les fonctions de la méthode init
document.addEventListener("DOMContentLoaded", trickBox.init);