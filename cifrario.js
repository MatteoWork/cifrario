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
const originalPhrase = "Hello, World!";
const shift = 3;
const cryptedPhrase = cifrarioDiCesare(originalPhrase, shift);

console.log("Testo originale: ", originalPhrase);
console.log("Testo cifrato: ", cryptedPhrase);
