"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

let locale = "da";

// console.log(texts[locale].texts[0].text);

// texts[locale].texts.forEach(each =>{
//   console.log(each.location);
//   document.querySelector(each.location).textContent = "hej";
//   console.log(document.querySelector(each.location));
// })

function updateTexts() {
  const languageTexts = texts[locale].texts;
  languageTexts.forEach(each => {
    document.querySelector(each.location).textContent = each.text;
  });
}

function changeLanguage(newLocale) {
  locale = newLocale;
  updateTexts();
}

document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('language-selector');
  selector.addEventListener('change', (event) => {
    changeLanguage(event.target.value);
  });

  updateTexts();
});