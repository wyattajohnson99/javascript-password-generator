var generateBtn = document.querySelector("#generate");

// Arrays for the various characters that can be used for the password generator
var specialCharacters = ['@', '%', '+', '\', '/'', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '{', '}', '[', ']', '~', '-', '_', '.'];
var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Function that gets the user's input regarding how they want their password to be configured
function getPasswordConfiguration () {
  // This variable will store how many characters the user wants the length to be
  var length = parseInt(
    prompt('Enter desired character amount'),
    10
  );
  // Checks if the entry from above is a number, and tells the user if not
  if (Number.isNaN(length)) {
    alert('Password character length must be input as a number');
    return null;
  }
  // Checks if the minimum character amount entered is less than 8 and alerts if true
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }
  // Checks if the number entered is greater than 128 and alerts if so
  if (length > 128) {
    alert('Password length must be less than 128 characters');
    return null;
  }
  // Variables that store if the user wants any of the specified character groups used or not
  var hasSpecialCharacters = confirm(
    'Click OK to confirm that you want special characters.'
  );
  var hasNumberCharacters = confirm(
    'Click OK to confirm that you want number characters.'
  );
  var hasLowerCaseCharacters = confirm(
    'Click OK to confirm that you want lower case characters.'
  );
  var hasUpperCaseCharacters = confirm(
    'Click OK to confirm that you want upper case characters.'
  );
  // This conditional statement checks if no character groups were selected, and alerts if so
  if (hasSpecialCharacters) {}
  else if (hasNumberCharacters) {}
  else if (hasLowerCaseCharacters) {}
  else if (hasUpperCaseCharacters) {}
  else {
    alert('Password must include at least one character type.');
  }
  // This is an object that stores all the options chosen by the user
  var passwordConfiguration = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumberCharacters: hasNumberCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters
  };
  return passwordConfiguration;
}
// This function allows for retrieving a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}
// This function generates the password with the given user configuration
function generatePassword() {
  var configuration = getPasswordConfiguration();
  // Makes a new array
  var currentArr = new Array()
  // This is a conditional statement that strings together the various pieces to form a password
  if (configuration.hasSpecialCharacters) {
    currentArr= currentArr.concat(specialCharacters)
  }
  if (configuration.hasNumberCharacters) {
    currentArr= currentArr.concat(numberCharacters)
  }
  if (configuration.hasLowerCaseCharacters) {
    currentArr= currentArr.concat(lowerCaseCharacters)
  }
  if (configuration.hasUpperCaseCharacters) {
    currentArr= currentArr.concat(upperCaseCharacters)
  }
  console.log(currentArr)
  // This generates a random password from the content above
  let pass = ""
  let i = 0
  while (i < configuration.length) {
    pass += getRandom(currentArr);
    i++
  }
  return pass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
