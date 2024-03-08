function decifrarioDiCesare(cryptedPhrase, shift) {
    return cifrarioDiCesare(cryptedPhrase, 26 - shift);
}

// Esempio di utilizzo
const cryptedPhrase = "KHOOR, ZRUOG!";
const shift = 3;
const originalPhrase = decifrarioDiCesare(cryptedPhrase, shift);

console.log("Testo cifrato: ", cryptedPhrase);
console.log("Testo decifrato: ", originalPhrase);
