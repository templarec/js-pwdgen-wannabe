//dichiarazione variabili ed input
var nome = prompt("Inserisci il tuo nome:");
var cognome = prompt("Inserisci il tuo cognome:");
var colorePreferito = prompt("Inserisci il tuo colore preferito:");

//messaggi di log per le variabili
console.log(nome + " | " + cognome + " | " + colorePreferito );
console.log("Acquisito i dati dall'utente!");

//output sulla pagina della password generata
document.getElementById("output").innerHTML = "La tua password è: " + nome + cognome + colorePreferito + "21";

//la scrivo anche in console
console.log("La password generata è: "+ nome + cognome + colorePreferito + "21");