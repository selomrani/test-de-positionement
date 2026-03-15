const matchs = [
    {
        id: 1, equipe1: "FC GenV", equipe2: "OC Youssoufia",
        date: "15/03/2025", heure: "20:00", stade: "Stade Mohammed V",
        prix: { tribune: 200, virage: 100, pelouse: 50 }
    },
    {
        id: 2, equipe1: "FC GenV", equipe2: "FC Bayern",
        date: "22/03/2025", heure: "18:00", stade: "Stade Mohammed V",
        prix: { tribune: 250, virage: 120, pelouse: 60 }
    },
    {
        id: 3, equipe1: "FC GenV", equipe2: "Madrid CF",
        date: "05/04/2025", heure: "21:00", stade: "Stade Mohammed V",
        prix: { tribune: 300, virage: 150, pelouse: 80 }
    }
];
// let parentElt = document.getElementById("nextmatch");
let cardmatch = document.getElementById("cardmatch")
let cardsHTML = '';
matchs.forEach(match => {
    cardsHTML += `
    <div class="card mb-3 w-100">
        <div class="card-header">Prochaine match</div>
        <div class="card-body">
            <h5 class="card-title">${match.equipe1} VS ${match.equipe2}</h5>
            <p class="card-text">date : ${match.date}</p>
            <p class = "card-text"> prix pelouse : ${match.prix.pelouse} </p>
            <p class = "card-text"> prix virage : ${match.prix.virage} </p>
            <p class = "card-text"> prix tribune : ${match.prix.tribune} </p>
            <button class = "card-btn"> Réserver </button>
        </div>
    </div>`;
});
cardmatch.innerHTML = cardsHTML;