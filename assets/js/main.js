//dichiarazione variabili ed input
var nome = prompt("Inserisci il tuo nome:");
var cognome = prompt("Inserisci il tuo cognome:");
var colorePreferito = prompt("Inserisci il tuo colore preferito (Rosso|Verde|Blu|Giallo) Case-sensitive!:");
var annoNascita = prompt("Inserisci anno di nascita:");
var coloreSfondo = null;
var coloreTesto = null;
switch (colorePreferito) {
    case "Rosso":
        coloreSfondo = "red";
        coloreTesto = "yellow";
        break;
    case "Verde":
        coloreSfondo = "green";
        coloreTesto = "lime";
        break;
    case "Blu":
        coloreSfondo = "blue";
        coloreTesto = "cyan";
        break;
    case "Giallo":
        coloreSfondo = "yellow";
        coloreTesto = "red";
        break;
    default:
        coloreSfondo = "black";
        coloreTesto = "white";
}
//messaggi di log per le variabili
console.log(nome + " | " + cognome + " | " + colorePreferito );
console.log("Acquisito i dati dall'utente!");

//cambio lo sfondo in base al colore preferito
var div = document.getElementById("div-p");
div.style.display = "block";
div.style.backgroundColor = coloreSfondo;
div.style.color = coloreTesto;
var div = document.getElementById("div-a");
div.style.display = "block";
div.style.backgroundColor = coloreSfondo;
div.style.color = coloreTesto;

//output sulla pagina della password generata
var utente = document.getElementById("utente");
utente.style.fontStyle = "italic";
utente.innerHTML = "Benvenuto " + nome + " " + cognome;
var output = document.getElementById("output");
output.style.fontWeight = 'bold';
var passwordGenerata = nome + cognome + colorePreferito + "21";
output.innerHTML= passwordGenerata;

//stampo l'anno di nascita e calcolo età
var dataNascita = document.getElementById("data-nascita");
dataNascita.innerHTML = "Sei nato nel " + annoNascita;
var eta = document.getElementById("eta");
var anni = 2021 - annoNascita;
eta.innerHTML = "quindi dovresti compiere " + anni + " anni quest'anno!";

//la scrivo anche in console
console.log("La password generata è: "+ nome + cognome + colorePreferito + "21");