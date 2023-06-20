const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");

const a2b = "american-to-british";
const b2a = "british-to-american";

suite("Unit Tests", () => {
  // Translate Mangoes are my favorite fruit. to British English
  test("Translate Mangoes are my favorite fruit. to British English", (done) => {
    const translator = new Translator();
    const text = "Mangoes are my favorite fruit.";
    const expected =
      'Mangoes are my <span class="highlight">favourite</span> fruit.';
    assert.equal(translator.translate(text, a2b), expected);
    done();
  });
  // Translate I ate yogurt for breakfast. to British English
  test("I ate yogurt for breakfast. to British English", (done) => {
    const translator = new Translator();
    const text = "I ate yogurt for breakfast.";
    const expected =
      'I ate <span class="highlight">yoghurt</span> for breakfast.';
    assert.equal(translator.translate(text, a2b), expected);
    done();
  });

  // Translate We had a party at my friend's condo. to British English
  test("We had a party at my friend's condo. to British English", (done) => {
    const translator = new Translator();
    const text = "We had a party at my friend's condo.";
    const expected =
      'We had a party at my friend\'s <span class="highlight">flat</span>.';
    assert.equal(translator.translate(text, a2b), expected);
    done();
  });

  // Translate Can you toss this in the trashcan for me? to British English
  test("Can you toss this in the trashcan for me? to British English", (done) => {
    const translator = new Translator();
    const text = "Can you toss this in the trashcan for me?";
    const expected =
      'Can you toss this in the <span class="highlight">bin</span> for me?';
    assert.equal(translator.translate(text, a2b), expected);
    done();
  });

  // Translate The parking lot was full. to British English
  test("The parking lot was full. to British English", (done) => {
    const translator = new Translator();
    const text = "The parking lot was full.";
    const expected = 'The <span class="highlight">car park</span> was full.';
    assert.equal(translator.translate(text, a2b), expected);
    done();
  });

  // Translate Like a high tech Rube Goldberg machine. to British English
  test("Like a high tech Rube Goldberg machine. to British English", (done) => {
    const translator = new Translator();
    const text = "Like a high tech Rube Goldberg machine.";
    const expected =
      'Like a high tech <span class="highlight">Heath Robinson device</span>.';
    assert.equal(translator.translate(text, a2b), expected);
    done();
  });

  // Translate To play hooky means to skip class or work. to British English
  test("To play hooky means to skip class or work. to British English", (done) => {
    const translator = new Translator();
    const text = "To play hooky means to skip class or work.";
    const expected =
      'To <span class="highlight">bunk off</span> means to skip class or work.';
    assert.equal(translator.translate(text, a2b), expected);
    done();
  });

  // Translate No Mr. Bond, I expect you to die. to British English
  test("No Mr. Bond, I expect you to die. to British English", (done) => {
    const translator = new Translator();
    const text = "No Mr. Bond, I expect you to die.";
    const expected =
      'No <span class="highlight">Mr</span> Bond, I expect you to die.';
    assert.equal(translator.translate(text, a2b), expected);
    done();
  });

  // Translate Dr. Grosh will see you now. to British English
  test("Dr. Grosh will see you now. to British English", (done) => {
    const translator = new Translator();
    const text = "Dr. Grosh will see you now.";
    const expected =
      '<span class="highlight">Dr</span> Grosh will see you now.';
    assert.equal(translator.translate(text, a2b), expected);
    done();
  });
  // Translate Lunch is at 12:15 today. to British English
  test("Lunch is at 12:15 today. to British English", (done) => {
    const translator = new Translator();
    const text = "Lunch is at 12:15 today.";
    const expected = 'Lunch is at <span class="highlight">12.15</span> today.';
    assert.equal(translator.translate(text, a2b), expected);
    done();
  });

  // Translate We watched the footie match for a while. to American English
  test("We watched the footie match for a while. to American English", (done) => {
    const translator = new Translator();
    const text = "We watched the footie match for a while.";
    const expected =
      'We watched the <span class="highlight">soccer</span> match for a while.';
    assert.equal(translator.translate(text, b2a), expected);
    done();
  });

  // Translate Paracetamol takes up to an hour to work. to American English
  test("Paracetamol takes up to an hour to work. to American English", (done) => {
    const translator = new Translator();
    const text = "Paracetamol takes up to an hour to work.";
    const expected =
      '<span class="highlight">Tylenol</span> takes up to an hour to work.';
    assert.equal(translator.translate(text, b2a), expected);
    done();
  });

  // Translate First, caramelise the onions. to American English
  test("First, caramelise the onions. to American English", (done) => {
    const translator = new Translator();
    const text = "First, caramelise the onions.";
    const expected =
      'First, <span class="highlight">caramelize</span> the onions.';
    assert.equal(translator.translate(text, b2a), expected);
    done();
  });
  // Translate I spent the bank holiday at the funfair. to American English
  test("I spent the bank holiday at the funfair. to American English", (done) => {
    const translator = new Translator();
    const text = "I spent the bank holiday at the funfair.";
    const expected =
      'I spent the <span class="highlight">public holiday</span>  at the <span class="highlight">carnival</span>.';
    assert.equal(translator.translate(text, b2a), expected);
    done();
  });

  // Translate I had a bicky then went to the chippy. to American English
  test("I had a bicky then went to the chippy. to American English", (done) => {
    const translator = new Translator();
    const text = "I had a bicky then went to the chippy.";
    const expected =
      'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
    assert.equal(translator.translate(text, b2a), expected);
    done();
  });

  // Translate I've just got bits and bobs in my bum bag. to American English
  test("I've just got bits and bobs in my bum bag. to American English", (done) => {
    const translator = new Translator();
    const text = "I've just got bits and bobs in my bum bag.";
    const expected =
      'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
    assert.equal(translator.translate(text, b2a), expected);
    done();
  });
  // Translate The car boot sale at Boxted Airfield was called off. to American English
  test("The car boot sale at Boxted Airfield was called off. to American English", (done) => {
    const translator = new Translator();
    const text = "The car boot sale at Boxted Airfield was called off.";
    const expected =
      'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
    assert.equal(translator.translate(text, b2a), expected);
    done();
  });

  // Translate Have you met Mrs Kalyani? to American English
  test("Have you met Mrs Kalyani? to American English", (done) => {
    const translator = new Translator();
    const text = "Have you met Mrs Kalyani?";
    const expected =
      'Have you met <span class="highlight">Mrs.</span> Kalyani?';
    assert.equal(translator.translate(text, b2a), expected);
    done();
  });

  // Translate Prof Joyner of King's College, London. to American English
  test("Prof Joyner of King's College, London. to American English", (done) => {
    const translator = new Translator();
    const text = "Prof Joyner of King's College, London.";
    const expected =
      '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
    assert.equal(translator.translate(text, b2a), expected);
    done();
  });

  // Translate Tea time is usually around 4 or 4.30. to American English
  test("Tea time is usually around 4 or 4.30. to American English", (done) => {
    const translator = new Translator();
    const text = "Tea time is usually around 4 or 4.30.";
    const expected =
      'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
    assert.equal(translator.translate(text, b2a), expected);
    done();
  });
  // Highlight translation in Mangoes are my favorite fruit.
  test("Highlight translation in Mangoes are my favorite fruit.", (done) => {
    const translator = new Translator();
    const text = "Mangoes are my favorite fruit.";
    const expected =
      'Mangoes are my <span class="highlight">favourite</span> fruit.';
    assert.equal(translator.translate(text, a2b), expected);
    done();
  });

  // Highlight translation in I ate yogurt for breakfast.
  test("Highlight translation in I ate yogurt for breakfast.", (done) => {
    const translator = new Translator();
    const text = "I ate yogurt for breakfast.";
    const expected =
      'I ate <span class="highlight">yoghurt</span> for breakfast.';
    assert.equal(translator.translate(text, a2b), expected);
    done();
  });

  // Highlight translation in We watched the footie match for a while.
  test("Highlight translation in We watched the footie match for a while.", (done) => {
    const translator = new Translator();
    const text = "We watched the footie match for a while.";
    const expected =
      'We watched the <span class="highlight">soccer</span> match for a while.';
    assert.equal(translator.translate(text, b2a), expected);
    done();
  });

  // Highlight translation in Paracetamol takes up to an hour to work.
  test("Highlight translation in Paracetamol takes up to an hour to work.", (done) => {
    const translator = new Translator();
    const text = "Paracetamol takes up to an hour to work.";
    const expected =
      '<span class="highlight">Tylenol</span> takes up to an hour to work.';
    assert.equal(translator.translate(text, b2a), expected);
    done();
  });
});
