// DATI UTENTE
// nome utente
const userName = prompt ('Il tuo nome');
// cognome utente
const userLastName = prompt ('Il tuo cognome');
// colore preferito utente
const userFavouriteColor = prompt ('Il tuo colore preferito');

// LOGICA
// somma di nome cognome e colore preferito per creare password
const result = userName + userLastName + userFavouriteColor +21;

// RISULTATO IN PAGINA
document.getElementById('password').innerHTML = result;