const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

class Translator {
  translateToBrittish(text) {
    const timeRegex = /([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])/g;

    const textArray = text.split(" ");

    const translatedText = textArray.map((word, i) => {
      const lastCharIsDot = word.match(/\.$/);

      if (i > 0) {
        // console.log(textArray[i - 1] + " " + word.toLowerCase());
        // console.log(americanOnly[textArray[i - 1] + " " + word.toLowerCase()]);
      }

      //if last character is a dot, remove it
      if (word.match(/\.$/) && !americanToBritishTitles[word.toLowerCase()]) {
        word = word.slice(0, -1);
      }

      if (americanOnly[word.toLowerCase()]) {
        return `<span class="highlight">${americanOnly[word]}</span>${
          lastCharIsDot ? "." : ""
        }`;
      } else if (americanToBritishSpelling[word.toLowerCase()]) {
        return `<span class="highlight">${
          americanToBritishSpelling[word]
        }</span>${lastCharIsDot ? "." : ""}`;
      } else if (americanToBritishTitles[word.toLowerCase()]) {
        return `<span class="highlight">${
          americanToBritishTitles[word.toLowerCase()].charAt(0).toUpperCase() +
          americanToBritishTitles[word.toLowerCase()].slice(1)
        }</span>`;
      } else if (word.match(timeRegex)) {
        return `<span class="highlight">${word.replace(":", ".")}</span>${
          lastCharIsDot && !americanToBritishTitles[word.toLowerCase()]
            ? "."
            : ""
        }`;
      } else if (
        i < textArray.length - 1 &&
        americanOnly[word.toLowerCase() + " " + textArray[i + 1].toLowerCase()]
      ) {
        return `<span class="highlight">${
          americanOnly[word + " " + textArray[i + 1]]
        }</span>${lastCharIsDot ? "." : ""}`;
      } else if (
        i > 0 &&
        americanOnly[textArray[i - 1] + " " + word.toLowerCase()]
      ) {
        return "";
      } else {
        return `${word}${lastCharIsDot ? "." : ""}`;
      }
    });

    return translatedText.join(" ");
  }

  translateToAmerican(text) {
    const textArray = text.split(" ");

    const timeRegex = /([0-9]|0[0-9]|1[0-9]|2[0-3]).([0-5][0-9])/g;

    const translatedText = textArray.map((word, i) => {
      const lastCharIsDot = word.match(/\.$/);

      if (i > 0) {
        // console.log(textArray[i - 1] + " " + word.toLowerCase());
        // console.log(americanOnly[textArray[i - 1] + " " + word.toLowerCase()]);
      }

      //if last character is a dot, remove it
      if (word.match(/\.$/)) {
        word = word.slice(0, -1);
      }

      if (britishOnly[word.toLowerCase()]) {
        return `<span class="highlight">${
          britishOnly[word.toLowerCase()]
        }</span>${lastCharIsDot ? "." : ""}`;
      } else if (getKeyByValue(americanToBritishSpelling, word.toLowerCase())) {
        return `<span class="highlight">${getKeyByValue(
          americanToBritishSpelling,
          word.toLowerCase()
        )}</span>${lastCharIsDot ? "." : ""}`;
      } else if (getKeyByValue(americanToBritishTitles, word.toLowerCase())) {
        return `<span class="highlight">${
          getKeyByValue(americanToBritishTitles, word.toLowerCase())
            .charAt(0)
            .toUpperCase() +
          getKeyByValue(americanToBritishTitles, word.toLowerCase()).slice(1)
        }</span>${lastCharIsDot ? "." : ""}`;
      } else if (word.match(timeRegex)) {
        return `<span class="highlight">${word.replace(".", ":")}</span>${
          lastCharIsDot ? "." : ""
        }`;
      } else if (
        i < textArray.length - 1 &&
        britishOnly[word.toLowerCase() + " " + textArray[i + 1].toLowerCase()]
      ) {
        return `<span class="highlight">${
          britishOnly[word + " " + textArray[i + 1]]
        }</span>${lastCharIsDot ? "." : ""}`;
      } else if (
        i > 0 &&
        britishOnly[textArray[i - 1] + " " + word.toLowerCase()]
      ) {
        return "";
      } else {
        return `${word}${lastCharIsDot ? "." : ""}`;
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
