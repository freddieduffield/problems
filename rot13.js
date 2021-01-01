function rot13(message) {
  const encryptedDictionary = createEncryptedDictionary(13);
  return message
    .split('')
    .map((letter) => {
      if (/[a-zA-Z]/.test(letter)) {
        
        if (letter === letter.toUpperCase()) {
          return encryptedDictionary[letter.toLowerCase()].toUpperCase();
        }

        return encryptedDictionary[letter];
      }

      return letter;
    })
    .join('');
}

function createEncryptedDictionary(num = 13) {
  const alpha = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  return alpha.reduce((acc, curr) => {
    const currIndex = alpha.indexOf(curr);

    if (currIndex <= 12) {
      acc[curr] = alpha[currIndex + num];
    } else if (currIndex >= 13) {
      acc[curr] = alpha[currIndex - num];
    }

    return acc;
  }, {});
}

function checkUpperCase(letter) {
  return letter === letter.toUpperCase();
}

function isCharNotLetter(char) {
  return !/[a-zA-Z]/.test(char);
}

module.exports = { rot13, createEncryptedDictionary, checkUpperCase };

// Todo
// handle uppercase
// handle special character, just return character as is


// solution
// function rot13(message) {
//   var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
//   return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
// }