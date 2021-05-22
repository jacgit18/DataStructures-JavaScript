"use strict";

var Sentence = "A man, a plan, a canal: Panama";

var palVaidaor = function palVaidaor(sen) {
  // use a reguar expression remove anything that is not a word
  sen = sen.replace(/\W/g, '').toLowerCase();

  for (var i = 0; i < sen.length / 2; i++) {
    if (sen[i] !== sen[sen.length - i - 1]) {
      return false;
    }
  }

  return true;
};

palVaidaor(Sentence);