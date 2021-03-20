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
    var generatePassword = [];
    function addCharacters(characters) {
      pool+= characters;
      const addCharacter = Math.floor(Math.random() * characters.length);
      const added = (characters.charAt(addCharacter));
      generatePassword = generatePassword + added;
    }
    if (lower || upper || number || symbol) {
      if (lower) {
        addCharacters(getLower);
      }
      if (upper) {
       addCharacters(getUpper);
      }
      if (number) {
        addCharacters(getNumber);
      }
      if (symbol) {
        addCharacters(getSymbol);
      }
      // Password characters selector
      var length = passwordLength - generatePassword.length;
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