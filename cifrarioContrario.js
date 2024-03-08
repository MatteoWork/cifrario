function decifrarioDiCesare(cryptedPhrase, shift) {
    return cifrarioDiCesare(cryptedPhrase, 26 - shift);
}

function cifrarioDiCesare(phrase, shift) {
    return phrase.toUpperCase().split('').map(char => {
            if (char >= 'A' && char <= 'Z') {
                const nuovoCharCode = ((char.charCodeAt(0) - 65 + shift) % 26) + 65;
                return String.fromCharCode(nuovoCharCode);
            } else {
                return char;
            }
        })
        .join('');
}

// Esempio di utilizzo
const cryptedPhrase = "KHOOR, ZRUOG!";
const shift = 3;
const originalPhrase = decifrarioDiCesare(cryptedPhrase, shift);

console.log("Testo cifrato: ", cryptedPhrase);
console.log("Testo decifrato: ", originalPhrase);
