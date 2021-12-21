// Assignment code here


// This creates a DOM representation of the html element with id="generate". In this case the <button> element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

function promptUser() {
  var length = window.prompt("Choose a length between 8 - 128 characters.");
  if (length < 8 || length >128 || length === "" || length === null) {
    window.alert("You must provide a number value betwwen 8 and 128")

    return null;
  }
  var lowercase = confirm("Include lowercase letters?");
  var uppercase = confirm("include uppercase letters?");
  var numeric = window.confirm("include numeric values?");
  var special = window.confirm("include special characters?");

  if (lowercase === false && uppercase === false && numeric === false && special === false) {
    alert("The password must contain at least one type of character")
    return null;
  }
  var passwordInfo = {
    //I have to convert the string value that results from the prompt into a numeric value
    length,
    lowercase,
    uppercase,
    numeric,
    special
  }

  return passwordInfo;
}
function random(array){
  // use math.floor and math.random to geta random index 
  // use random index to pick element out of array[randomeindex]
}
// create generatePassword() function here
function generatePassword() {
  var passwordObj = promptUser();
  console.log(passwordObj);
  var possibleChar = [];
  var finalPass = []

  if(passwordObj.uppercase === true){
   possibleChar = possibleChar.concat(upperArr)
  }
  for (let i = 0; i < passwordObj.length; i++) {
    var randomChar = random(possibleChar)
    finalPass.push(randomChar)
  }
  return finalPass.join("")
  // What i create here will ultimately be sent to writePassword and set equal to the variable password
  //for (var i = 0; i < passwordInfo.length; i++)
    // this needs to go in the object maybe
    //if (passwordInfo.length < 8 || passwordInfo.length >128 || passwordInfo.length = "" || passwordInfo.length = null) {
    //  window.alert("You must provide a number value betwwen 8 and 128")

    

    //}
    // (passwordInfo.lowercase) {
      //code to select a lower case letter from an array
    //}
  // Do I need to do a return here?
  // having some issue understaning what we do at the end of functions. seems lots of different options. struggling to understand the end of function conceptually.
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // creates a DOM object of the html element with an id="password". in this case <textarea> element
  var passwordText = document.querySelector("#password");
  // this sets the DOM object's .value method to the password we just created
  passwordText.value = password;

}

// create array of characters here

var upperArr = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","Z"
]






// This event listener listens for clicks in the generateBtn area, which is the <button> element
generateBtn.addEventListener("click", writePassword);
