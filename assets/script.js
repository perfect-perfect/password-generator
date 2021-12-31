// Creates the arrays I will be pulling from
var upperArr = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","Z"
]

var numericArr = [
  "1","2","3","4","5","6","7","8","9","0"
]

var specialArr = [
  "!","#","$","%","*","+","/",":",";","?","@","^","_","`","~","&","(",")","-",".","<","=",">","{","}","|"
]

// This creates a DOM representation of the html element with id="generate". In this case the <button> element
var generateBtn = document.querySelector("#generate");
// console.log(generateBtn);

var promptUser = function() {
  var passwordLength = window.prompt("Choose a length between 8 - 128 characters.");
  parseInt(passwordLength);
  // console.log(length)
  if (passwordLength < 8 || passwordLength >128 || passwordLength === "" || passwordLength === null) {
    window.alert("You must provide a number value between 8 and 128")

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
    passwordLength,
    lowercase,
    uppercase,
    numeric,
    special
  }

  return passwordInfo;
}

var randomizer = function(array) {
  //function random(array){
  //if (!array.isArray()) {
  //  alert("There was an error with random generator")
  //}
  var randomIndex = Math.floor(Math.random() * array.length);

  var randomEl = array[randomIndex];

  return randomEl;

  // use math.floor and math.random to geta random index 
  // use random index to pick element out of array[randomeindex]
}


// create generatePassword() function here
function generatePassword() {
  var passwordObj = promptUser();
  // console.log(passwordObj);
  var possibleChars = [];
  var finalPass = []

  // LOWERCASE
  if(passwordObj.lowercase === true){
  //             upperArr.map(function(upperChar){upperChar.toLowerCase()})
    var lowerArr = upperArr.map(upperChar => upperChar.toLowerCase())

    possibleChars = possibleChars.concat(lowerArr)
  }
  console.log(possibleChars);

  // UPPERCARE
  if(passwordObj.uppercase === true){
    possibleChars = possibleChars.concat(upperArr)
  }
  console.log(possibleChars);


  // NUMERIC
  if (passwordObj.numeric === true) {
    possibleChars = possibleChars.concat(numericArr)
    
  }
  console.log(possibleChars);


  // SPECIAL CHARACTERS
  if (passwordObj.special === true) {
    possibleChars = possibleChars.concat(specialArr)

  }
  console.log(possibleChars);
  console.log(passwordObj);
  // PASSWORD LENGTH
  for (let i = 0; i < passwordObj.passwordLength; i++) {
    var randomChar = randomizer(possibleChars);
    finalPass.push(randomChar);
    console.log(finalPass);
  }
  

  return finalPass.join("")
  
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








// This event listener listens for clicks in the generateBtn area, which is the <button> element
generateBtn.addEventListener("click", writePassword);
