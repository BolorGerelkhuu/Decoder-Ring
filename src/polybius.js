// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const coordinates = [
      "11",
      "21",
      "31",
      "41",
      "51",
      "12",
      "22",
      "32",
      "42",
      "52",
      "13",
      "23",
      "33",
      "43",
      "53",
      "14",
      "24",
      "34",
      "44",
      "54",
      "15",
      "25",
      "35",
      "45",
      "55",
    ];
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i/j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const lowerInput = input.toLowerCase();
    let splitInput = lowerInput.split(" ");
    let cipherArray = [];
    if (encode) {
      for (let i = 0; i < splitInput.length; i++) {
        let word = splitInput[i];
        let message = "";
        let cipherLetter = "";
        for (let j = 0; j < word.length; j++) {
          let letter = word[j];
          for (let k = 0; k < alphabet.length; k++) {
            if (alphabet[k].includes(letter)) {
              cipherLetter = coordinates[k];
              message += cipherLetter;
              break;
            }
          }
          if (j === word.length - 1) {
            cipherArray.push(message);
          }
        }
      }
    }
    if (!encode) {
      for (let i = 0; i < splitInput.length; i++) {
        let coords = splitInput[i];
        if (coords.length % 2 !== 0) {
          return false;
        }
        let message = "";
        let cipherLetter = "";
        for (let j = 0; j < coords.length; j += 2) {
          let coordinate = coords[j].concat(coords[j + 1]);
          for (let k = 0; k < coordinates.length; k++) {
            if (coordinates[k] === coordinate) {
              cipherLetter = alphabet[k];
              message += cipherLetter;
              break;
            }
          }
          if (j === coords.length - 2) {
            cipherArray.push(message);
            console.log(cipherArray);
          }
        }
      }
    }
    return cipherArray.join(" ");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
