const trickBox = {

    init: function () {
        trickBox.bindFirstTrickBox()
    },

    bindFirstTrickBox: function() {
        const bindFirstTrickBox = document.querySelector(".trick-box");
        bindFirstTrickBox.addEventListener("mouseover", trickBox.handleTrickBox);
    },

    handleTrickBox: function(event) {
        console.log("C'est okkkkkkkkkk !");
        let selectButton = document.querySelector("#button");
        console.log(selectButton);
        selectButton.remove();
        document.querySelector(".trick-box").onmouseout = trickBox.buttonReappear;
    },

    buttonReappear: function () {
        let buttonReappear = document.createElement("button");
        console.log(buttonReappear);
        buttonReappear.textContent = "Allez, clique !";
        buttonReappear.setAttribute("id", "button");
        buttonReappear.setAttribute("class", "button");
        buttonReappear.setAttribute("type", "button");
        document.querySelector(".trick-box").append(buttonReappear);
    },

}

document.addEventListener("DOMContentLoaded", trickBox.init);