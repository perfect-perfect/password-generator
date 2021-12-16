// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//var passWordFunction = function () {

var selectCharacter = function () {
  character
}

// Create generatePassword(); function/variable
var generatePassword = function () {

  for (i = 0; i > passwordInfo.length; i++) {

    selectCharacter();

    console.log(i)
  }


  //I am having the same issue i was having eariler i cannot get anything from inside this function to go into the other functions.
  //var passwordFunction = window.prompt("input here");
  //return passwordFunction;
};



// Write password to the #password input

var writePassword = function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};


var getPasswordLength = function() {
  var length = "";

  while (length === "" || length === null || length < 8 || length > 128 ) {
    length = prompt("Choose a length between 8 and 128")

    // convert answer into an interger, because prompts are automatically strings
    length = parseInt(length);
  }
  
  // convert answer into an interger, because prompts are automatically strings
  return length;
};

var passwordInfo = {
  length: getPasswordLength (),
  //window.prompt("Choose a length between 8 - 128 characters."),
  //lowercase: window.confirm("Include lowercase letters?"),
  //uppercase: window.confirm("include uppercase letters?"),
  //numeric: window.confirm("include numeric values?"),
  //special: window.confirm("include special characters?")
}



// Add event listener to generate button
//when we click the button it runs the function writePassword
generateBtn.addEventListener("click", writePassword);
