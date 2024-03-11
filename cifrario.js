const originalPhrase = "Hello, World!";
const shift = 3;
const cryptedPhrase = cifrarioDiCesare(originalPhrase, shift);

console.log("Testo originale: ", originalPhrase);
console.log("Testo cifrato: ", cryptedPhrase);

function cifrarioDiCesare(phrase, shift) {
    return phrase.toUpperCase().split('').map(char => {
        if (char >= 'A' && char <= 'Z') {
            // 0 - 65 trova il valore ascii, il primo %26 fa in modo di riuscire a gestire shift negativi
            // il rimanente aggiunge 26 prima di fare il modulo di 26 sempre per shift negativi e si aggiunge 65 per ottenere il valore ascii della lettera
            const nuovoCharCode = ((char.charCodeAt(0) - 65 + shift) % 26 + 26) % 26 + 65;
            return String.fromCharCode(nuovoCharCode);
        } else {
            return char;
        }
    }).join('');
}