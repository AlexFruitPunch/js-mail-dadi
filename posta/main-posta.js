let mail = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];

//inserimento email
alert("Benvenuto sulla nostra pagina ;) ");
let Utente = prompt("inserisci la tua email per accedere");

Utente = Utente.toLowerCase();

//controllo della email inserita 
for( let i = 0; i < mail.length; i++){
    if(mail[i] == Utente){
        alert("Benvenuto nella nostra pagina" + Utente);
        Trovato = true; 
        break; //in questo modo si termina il ciclo for proprio come nello switch case                                                                                   
    } else if (mail[i] != Utente && i == mail.length - 1){
        alert("non sei registrato ma ti aggiungiamo noi se vuoi");

        //Chiedo all'utente se vuole veramente registrarsi 
        let scelta = prompt("Vuoi che ti registriamo al nostro sito? (inserisci si o no)");
        scelta = scelta.toLowerCase();

        //controlli sulla risposta si o no
        if(scelta == "si" || scelta == "no"){ 
            if(scelta == "si"){
                mail.push(Utente);
                console.log(mail[mail.length - 1]);
                alert("grazie per esserti registrato" + Utente);
            } else if(scelta == "no"){
                alert("grazie lo stesso per la visita, Arrivederci ;) ");
            }
        } else {
                do {
                alert("devi inserire solo si o no !!! ");
                scelta = prompt("Vuoi registrarti al nostro sito ?");
                scelta = scelta.toLowerCase();
                }
                while(scelta != "si" && scelta != "no");
                if(scelta == "si"){
                    mail.push(Utente);
                    console.log(mail[mail.length - 1]);
                    alert("grazie per esserti registrato");
                } else if(scelta == "no"){
                    alert("grazie lo stesso per la visita, Arrivederci ;) ");
                }
            }
    }    
}

document.getElementById("mel").innerHTML = mail;


        

