// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = window.prompt ("Please choose a password length of 8-128 characters. Please enter a number between 8 and 128");
  var passwordCase = window.prompt ("Please choose the password case of upper or lower characters.");
  var passwordSpecialchar = window.prompt ("Please choose what special characters to include in your password.");
  // action for password length selection // 

  passwordText.value = password;
}

function generatePassword () {
  var length = (8,128);
      charset= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
