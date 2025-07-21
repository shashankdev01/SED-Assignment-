// Defining function for processing Data....node 

function processData(data) {
  let validCodes = [];
  let invalidCodes = [];

  for (let code of data) {
    if (isValidCode(code)) {
      const normalized = code.toUpperCase();
      validCodes.push(normalized);
    } else {
      invalidCodes.push(code);
    }
  }

  // Sort the valid codes alphabetically
  validCodes.sort();

  return {
    totalCodes: data.length,
    validCodes: validCodes.length,
    invalidCodes: invalidCodes.length,
    normalizedValidCodes: validCodes
  };
}

//function that check the input code is valid or not 
function isValidCode(code) {
  if (code.length !== 7) return false;

  // First 3 characters must be letters (A-Z, case-insensitive).....


  for (let i = 0; i < 3; i++) {
    const char = code[i];
    if (!isLetter(char)) return false;
  }

  // Last 4 characters must be digits...


  for (let i = 3; i < 7; i++) {
    const char = code[i];
    if (!isDigit(char)) return false;
  }

  return true;
}

// Check the character is letter or not  (case-insensitive)


function isLetter(char) {
  const upper = char.toUpperCase();
  return upper >= 'A' && upper <= 'Z';
}

// Check if character is a digit
function isDigit(char) {
  return char >= '0' && char <= '9';
}

module.exports = { processData };