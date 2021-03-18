// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("Enter desired character length of the password. \nMust be at least 8 characters and no more than 128 characters.");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var lowerCase = ("Do you want Lowercase Characters?");
  var upperCase = ("Do you want Uppercase Characters?");
  var numeric = ("Do you want Number Characters?");
  var special = ("Do you want Special Characters?");

  passwordText.value = password;

  if (passwordLength > 7 && passwordLength < 129) {
    var lower = confirm(lowerCase);
    var uppper = confirm(upperCase);
    var number = confirm(numeric);
    var symbol = confirm(special);
    if (low || up || num || sep ) {
      var length = passwordLength.value;
      var hasLower = lower.value;
      var hasUpper = upper.value;
      var hasSymbol = symbol.value;
      generatePassword()
    }
    else {
    alert("Try again! You must chosse at least one Criteria!");
    }
  }
  else {
    alert("Try again! Password must be at least 8 characters and no more than 128 characters!")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function getRandomLower() {
// 	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
// 	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber() {
// 	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
// 	const symbols = '!@#$%^&*(){}[]=<>/,.'
// 	return symbols[Math.floor(Math.random() * symbols.length)];
// }