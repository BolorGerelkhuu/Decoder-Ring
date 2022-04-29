const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    const lowerInput = input.toLowerCase();

    if (!encode) {
      shift = -shift;
    }
    let message = "";
    for (let i = 0; i < lowerInput.length; i++) {
      let ciphLetter = lowerInput[i];
      const cipher = "abcdefghijklmnopqrstuvwxyz";
      for (let j = 0; j < cipher.length; j++) {
        if (ciphLetter === cipher[j]) {
          if (j + shift <= 25 && j + shift >= 0) {
            ciphLetter = cipher[j + shift];
            message += ciphLetter;
            break;
          } else if (j + shift < 0) {
            ciphLetter = cipher[26 + (j + shift)];
            message += ciphLetter;
            break;
          } else if (j + shift > 25) {
            ciphLetter = cipher[j + shift - 26];
            message += ciphLetter;
            break;
          }
        } else if (j === cipher.length - 1) {
          message += ciphLetter;
          break;
        }
      }
    }

    return message;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
