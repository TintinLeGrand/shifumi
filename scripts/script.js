console.log("Le fichier HTML accède bien au script");

const boutons = document.querySelectorAll("button");
const resultatDiv = document.getElementsByClassName("resultat");
let resultat;
let scoreJ1 = 0, scoreBot = 0;

boutons.forEach(function (bouton) {
    bouton.addEventListener('click', () => {
        jouer(bouton.textContent, aleatoire())
    })
}
)

function aleatoire() {
    let choix = Math.floor(Math.random() * 3);
    return boutons[choix].textContent;
}

function jouer(choixJ1, choixBot) {
    if (choixJ1 === choixBot) {
        resultat = "fait une égalité";
    } else if ((choixJ1 === "Pierre" && choixBot === "Ciseaux") || (choixJ1 === "Feuille" && choixBot === "Pierre") || (choixJ1 === "Ciseaux" && choixBot === "Feuille")) {
        resultat = "gagné";
        scoreJ1 += 1;
    }
    else {
        resultat = "perdu";
        scoreBot += 1;
    }
    resultatDiv[0].innerHTML = "J'ai choisi <b>" + choixJ1 + "</b><br>Le bot a choisi...<b>" + choixBot + "</b><br>J'ai <b>" + resultat + "</b>";
}



