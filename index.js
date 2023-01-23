function Utente(nome, cognome, dataNascita) {
  this.nome = nome;
  this.cognome = cognome;
  this.dataNascita = dataNascita;
}

function aggiungiUtente() {
  let nome = document.getElementById("nome").value;
  let cognome = document.getElementById("cognome").value;
  let dataNascita = document.getElementById("dataNascita").value;

  let utente = new Utente(nome, cognome, dataNascita);

  let tabella = document.getElementById("tabella").getElementsByTagName("tbody")[0];
  let nuovaRiga = tabella.insertRow();
  let cella1 = nuovaRiga.insertCell(0);
  let cella2 = nuovaRiga.insertCell(1);
  let cella3 = nuovaRiga.insertCell(2);
  cella1.innerHTML = utente.nome;
  cella2.innerHTML = utente.cognome;
  cella3.innerHTML = utente.dataNascita;
}
