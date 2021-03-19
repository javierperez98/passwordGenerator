// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("Enter desired character length of the password. \nMust be at least 8 characters and no more than 128 characters.");
  var passwordText = document.querySelector("#password");
  // Checks for password length
  if (passwordLength > 7 && passwordLength < 129) {
    var lower = confirm("Do you want Lowercase Characters?");
    var upper = confirm("Do you want Uppercase Characters?");
    var number = confirm("Do you want Number Characters?");
    var symbol = confirm("Do you want Special Characters?");
    var pool = "";
    var getLower = "abcdefghijklmnopqrstuvwxyz";
    var getUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var getNumber = "1234567890";
    var getSymbol = "`~!@#$%^&*()-_=+<>?";
    var generatePassword = "";
    var filter = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    var length = passwordLength - filter.length;
	// Checks if at least 1 criteria is selected
    if (lower || upper || number || symbol) {
      if (lower) {
        pool+= getLower;
        const addLower = Math.floor(Math.random() * getLower.length);
        const added = (getLower.charAt(addLower));
        generatePassword = generatePassword + added;
      }
      if (upper) {
        pool+= getUpper;
        const addUpper = Math.floor(Math.random() * getUpper.length);
        const added = (getUpper.charAt(addUpper));
        generatePassword = generatePassword + added;
      }
      if (number) {
        pool+= getNumber;
        const addNumber = Math.floor(Math.random() * getNumber.length);
        const added = (getNumber.charAt(addNumber));
        generatePassword = generatePassword + added;
      }
      if (symbol) {
        pool+= getSymbol;
        const addSymbol = Math.floor(Math.random() * getSymbol.length);
        const added = (getSymbol.charAt(addSymbol));
        generatePassword = generatePassword + added;
      }
      // Password characters selector
      for (i = 0; i < length; i++) {
        var random = (Math.floor(Math.random() * pool.length));
        var result = (pool.charAt(random));
        generatePassword = generatePassword + result;
      }
      passwordText.textContent = generatePassword;

    } else {
    alert("Try again! You must pick at least one Criteria!");
    }
  } else {
    alert("Try again! Password must be at least 8 characters and no more than 128 characters!")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);