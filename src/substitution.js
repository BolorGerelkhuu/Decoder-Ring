// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i])) {
        return false;
      }
    }
    cipher = "abcdefghijklmnopqrstuvwxyz";
    const lowerInput = input.toLowerCase();
    let splitInput = lowerInput.split(" ");
    let cipherArray = [];
    for (let i = 0; i < splitInput.length; i++) {
      let word = splitInput[i];
      let message = "";
      let cipherLetter = "";
      for (let j = 0; j < word.length; j++) {
        let letter = word[j];
        if (encode) {
          for (let k = 0; k < cipher.length; k++) {
            if (cipher[k] === letter) {
              cipherLetter = alphabet[k];
              message += cipherLetter;
              break;
            }
          }
        }
        if (!encode) {
          for (let k = 0; k < alphabet.length; k++) {
            if (alphabet[k] === letter) {
              cipherLetter = cipher[k];
              message += cipherLetter;
              break;
            }
          }
        }
        if (j === word.length - 1) {
          cipherArray.push(message);
        }
      }
    }
    return cipherArray.join(" ");
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
