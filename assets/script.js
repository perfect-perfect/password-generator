// Assignment code here
debugger;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Create generatePassword(); function/variable
var generatePassword = function () {
  window.prompt("input here");
};

// Write password to the #password input

var writePassword = function() {
  debugger;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};


// Add event listener to generate button
//when we click the button it runs the function writePassword
generateBtn.addEventListener("click", writePassword);
