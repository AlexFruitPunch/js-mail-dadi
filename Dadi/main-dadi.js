alert("Benvenuto nel gioco dei dadi");
alert("cominciamo . . .");
alert("il vincitore tra me e te sarà quello con il numero più alto");

let SceltaPC;
let SceltaGiocatore;

//Lancio del dado del PC
SceltaPC = Math.floor(Math.random() * 6) + 1;
document.getElementById("MioLancio").innerHTML = SceltaPC;

//Lancio del dado del giocatore
SceltaGiocatore = Math.floor(Math.random() * 6) + 1;
document.getElementById("TuoLancio").innerHTML = SceltaGiocatore;

//Controllo del risultato
if(SceltaGiocatore > SceltaPC){
    document.getElementById("winner").innerHTML = "il vincitore sei tu";

} else if(SceltaPC > SceltaGiocatore){
    document.getElementById("winner").innerHTML = "il vincitore sono io";
} else{
    document.getElementById("winner").innerHTML = "Stavolta abbiamo pareggiato";
}