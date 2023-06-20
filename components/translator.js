const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

class Translator {
  translateToBrittish(text) {
    const textArray = text.split(" ");
    const translatedText = textArray.map((word) => {
      if (americanOnly[word.toLowerCase()]) {
        return `<span class="highlight">${americanOnly[word]}</span>`;
      } else if (americanToBritishSpelling[word.toLowerCase()]) {
        return `<span class="highlight">${americanToBritishSpelling[word]}</span>`;
      } else if (americanToBritishTitles[word.toLowerCase()]) {
        return `<span class="highlight">${americanToBritishTitles[word]}</span>`;
      } else {
        return word;
      }
    });

    return translatedText.join(" ");
  }

  translateToAmerican(text) {
    // const formattedText = text.toLowerCase();
    const textArray = text.split(" ");

    const translatedText = textArray.map((word) => {
      if (britishOnly[word]) {
        return `<span class="highlight">${
          britishOnly[word.toLowerCase()]
        }</span>`;
      } else if (getKeyByValue(americanToBritishSpelling, word.toLowerCase())) {
        return `<span class="highlight">${getKeyByValue(
          americanToBritishSpelling,
          word.toLowerCase()
        )}</span>`;
      } else if (getKeyByValue(americanToBritishTitles, word.toLowerCase())) {
        return `<span class="highlight">${getKeyByValue(
          americanToBritishTitles,
          word.toLowerCase()
        )}</span>`;
      } else {
        return word;
      }
    });

    return translatedText.join(" ");
  }

  translate(text, locale) {
    let translatedText = text;
    if (locale === "american-to-british") {
      translatedText = this.translateToBrittish(text);
    } else if (locale === "british-to-american") {
      translatedText = this.translateToAmerican(text);
    }
    return translatedText;
  }
}

module.exports = Translator;
