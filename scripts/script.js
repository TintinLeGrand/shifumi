console.log("Le fichier HTML accède bien au script");

const boutons = document.querySelectorAll("button");
var resultatDiv= document.getElementsByClassName("resultat");
var resultat;
var scoreJ1, scoreBot = 0;

boutons.forEach(function (bouton) {
    bouton.addEventListener('click', () => {
        // alert(bouton.textContent);
        jeu= jouer(bouton.textContent, aleatoire())
        resultatDiv.innerHTML += "J'ai choisi ... "+ jeu[1]+ "<br>Le bot a choisi..."+ jeu[2]+ "<br>J'ai "+ jeu[0];
    })
}
)

// for (cons bouton in boutons) {
//     bouton.addEventListener('click', ()=> {
//         alert(bouton.textContent);
//     })
// }
// ---> structure qui ne fonctionne pas

function aleatoire() {
    var choix = Math.floor(Math.random() * 3);
    return boutons[choix].textContent;
}

function jouer(choixJ1, choixBot) {
    if (choixJ1 == choixBot) {
        resultat = "fait une égalité";
    } else if ((choixJ1 == "Pierre" && choixBot == "Ciseaux") || (choixJ1 == "Feuille" && choixBot == "Pierre") || (choixJ1 == "Ciseaux" && choixBot == "Feuille")) {
        resultat = "gagné";
        scoreJ1 += 1;
    }
    else {
        resultat = "perdu";
        scoreBot += 1;
    }

    return (resultat, choixJ1, choixBot)
}



