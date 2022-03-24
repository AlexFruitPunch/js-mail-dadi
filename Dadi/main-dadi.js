alert("Benvenuto nel gioco dei dadi");
alert("cominciamo . . .");
alert("il vincitore tra me e te sarà quello con il numero più alto");

let SceltaPC ;
let SceltaGiocatore ;

SceltaPC = Math.floor(Math.random() * 6) + 1;
SceltaGiocatore = Math.floor(Math.random() * 6) + 1;

if(SceltaGiocatore > SceltaPC){
    document.getElementById("winner").innerHTML = "il vincitore sei tu";

} else if(SceltaPC > SceltaGiocatore){
    document.getElementById("winner").innerHTML = "il vincitore sono io";
} else{
    document.getElementById("winner").innerHTML = "Stavolta abbiamo pareggiato";
}