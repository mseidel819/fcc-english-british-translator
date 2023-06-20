"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    //locale will be 'american-to-british' or 'british-to-american'
    // ex. { text: 'dgeg', locale: 'american-to-british' }
    console.log(req.body);
    const { text, locale } = req.body;

    if (text === "") {
      return res.json({ error: "No text to translate" });
    }
    if (!text || !locale) {
      return res.json({ error: "Required field(s) missing" });
    }

    if (locale !== "american-to-british" && locale !== "british-to-american") {
      return res.json({ error: "Invalid value for locale field" });
    }

    if (text === translator.translate(text, locale)) {
      return res.json({
        text: text,
        translation: "Everything looks good to me!",
      });
    }

    res.json({
      text: text,
      translation: translator.translate(text, locale),
    });
  });
};
