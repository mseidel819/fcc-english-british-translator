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

      //   if (
      //     i <
      //     textArray.length - 2
      //     // americanOnly[
      //     //   word.toLowerCase() +
      //     //     " " +
      //     //     textArray[i + 1].toLowerCase() +
      //     //     " " +
      //     //     textArray[i + 2].toLowerCase()
      //     // ]
      //   ) {
      //     console.log(
      //       word.toLowerCase() +
      //         " " +
      //         textArray[i + 1].toLowerCase() +
      //         " " +
      //         textArray[i + 2].toLowerCase()
      //     );
      //   }

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
        i < textArray.length - 2 &&
        americanOnly[
          word.toLowerCase() +
            " " +
            textArray[i + 1].toLowerCase() +
            " " +
            textArray[i + 2].toLowerCase()
        ]
      ) {
        return `<span class="highlight">${
          americanOnly[
            word.toLowerCase() +
              " " +
              textArray[i + 1].toLowerCase() +
              " " +
              textArray[i + 2].toLowerCase()
          ]
        }</span>${lastCharIsDot ? "." : ""}`;
      } else if (
        i > 1 &&
        i < textArray.length - 1 &&
        americanOnly[
          textArray[i - 2].toLowerCase() +
            " " +
            textArray[i - 1].toLowerCase() +
            " " +
            word.toLowerCase()
        ]
      ) {
        return "";
      } else if (
        i > 0 &&
        i < textArray.length - 1 &&
        americanOnly[
          textArray[i - 1].toLowerCase() +
            " " +
            word.toLowerCase() +
            " " +
            textArray[i + 1].toLowerCase()
        ]
      ) {
        return "";
      } else if (
        i > 1 &&
        i < textArray.length &&
        americanOnly[
          textArray[i - 2].toLowerCase() +
            " " +
            textArray[i - 1].toLowerCase() +
            " " +
            word.toLowerCase()
        ]
      ) {
        return "";
      } else if (
        i > 0 &&
        americanOnly[textArray[i - 1] + " " + word.toLowerCase()]
      ) {
        return "";
      } else {
        return `${word}${lastCharIsDot ? "." : ""}`;
      }
    });
    return translatedText.filter((word) => word !== "").join(" ");
  }

  translateToAmerican(text) {
    const textArray = text.split(" ");

    const timeRegex = /([0-9]|0[0-9]|1[0-9]|2[0-3]).([0-5][0-9])/g;

    const translatedText = textArray.map((word, i) => {
      const lastCharIsDot = word.match(/\.$/);

      //if last character is a dot, remove it
      if (word.match(/\.$/)) {
        word = word.slice(0, -1);
      }
      let wordAfter = textArray[i + 1];

      if (i < textArray.length - 1 && textArray[i + 1].match(/\.$/)) {
        wordAfter = textArray[i + 1].slice(0, -1);
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
        i < textArray.length - 2 &&
        britishOnly[
          word.toLowerCase() +
            " " +
            textArray[i + 1].toLowerCase() +
            " " +
            textArray[i + 2].toLowerCase()
        ]
      ) {
        return `<span class="highlight">${
          britishOnly[
            word.toLowerCase() +
              " " +
              textArray[i + 1].toLowerCase() +
              " " +
              textArray[i + 2].toLowerCase()
          ]
        }</span>${lastCharIsDot ? "." : ""}`;
      } else if (
        i > 1 &&
        i < textArray.length - 1 &&
        britishOnly[
          textArray[i - 2] + " " + textArray[i - 1] + " " + word.toLowerCase()
        ]
      ) {
        return "";
      } else if (
        i > 0 &&
        i < textArray.length - 1 &&
        britishOnly[
          textArray[i - 1] + " " + word.toLowerCase() + " " + textArray[i + 1]
        ]
      ) {
        return "";
      } else if (
        i < textArray.length - 1 &&
        britishOnly[word.toLowerCase() + " " + wordAfter]
      ) {
        return `<span class="highlight">${
          britishOnly[word + " " + wordAfter]
        }</span>${lastCharIsDot ? "." : ""}`;
      } else if (
        //two worded secondword erase
        i > 0 &&
        britishOnly[textArray[i - 1] + " " + word.toLowerCase()]
      ) {
        return "";
      } else {
        return `${word}${lastCharIsDot ? "." : ""}`;
      }
    });

    return translatedText.filter((word) => word !== "").join(" ");
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
