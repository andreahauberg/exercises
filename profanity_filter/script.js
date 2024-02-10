// Hent reference til HTML-elementet med id 'text'
const text = document.getElementById("text");

// Hent reference til HTML-elementet med id 'replaceButton'
const replaceButton = document.getElementById("replaceButton");

// Hent reference til HTML-dialogelementet med id 'infoDialog'
const infoDialog = document.getElementById("infoDialog");

// Hent reference til HTML-elementet inden i dialogen med id 'info'
const info = document.getElementById("info");

// Variabel til at opbevare det sidste ord, der blev forsøgt udskiftet
let ord;

// Array af objekter, der indeholder dårlige og gode ordpar
const curseWords = [
    { bad: "var", good: "const" },
    { bad: "float", good: "grid" },
    { bad: "marquee", good: "just don't" },
];

// Funktion til at tjekke, om alle dårlige ord er blevet udskiftet
function checkReplacementWords() {
    // Hvis teksten indeholder det seneste forsøgte udskiftede ord
    if (text.textContent.includes(ord)) {
        // Opdater tekst i dialog-elementet med en fejlmeddelelse
        info.textContent = "Noget gik galt";
    } else {
        // Ellers opdater tekst i dialog-elementet med en succesmeddelelse
        info.textContent = "Alle ord er udskiftet";
    }

    // Åbn dialogen
    infoDialog.showModal();

    // Udskriv det seneste forsøgte udskiftede ord til konsollen
    console.log(ord);
}

// Funktion til at erstatte dårlige ord med gode ord
function replaceBadWords() {
    // Gennemgå hvert dårlige og gode ordpar i curseWords-arrayet
    curseWords.forEach((word) => {
        // Hvis både dårligt og godt ord eksisterer
        if (word.bad && word.good) {
            // Opret en regulær udtryk for at finde alle forekomster af det dårlige ord
            const regex = new RegExp(word.bad, "g");

            // Erstat alle forekomster af det dårlige ord med det gode ord i teksten
            text.innerHTML = text.innerHTML.replace(regex, `<span class="highlight">${word.good}</span>`);
        } else {
            // Hvis enten dårligt eller godt ord mangler, gem det dårlige ord i variablen 'ord'
            ord = word.bad.substring();
        }

        // Efter hver udskiftning, tjek om alle ord er blevet udskiftet
        checkReplacementWords();
    });
}

// Tilføj en event listener til knappen, så replaceWords-funktionen kaldes ved klik
replaceButton.addEventListener("click", replaceBadWords);

// Tilføj en event listener til luk-knappen i dialogen
document.getElementById("closeDialog").addEventListener("click", () => {
    // Luk dialogen
    infoDialog.close();
});

