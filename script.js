// Assignment Code
var generateBtn = document.querySelector("#generate");

//Create array for lowercase letters
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
"y", "z"]

//Create array for uppercase letters
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
"Y", "Z"]

//Create array for numerals
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

//Create array for special characters
var special = ["!", "#", "$", "%", "&","'", "(", ")", "*", "+", ",",
"-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", 
"|", "}","~",]

// This function will actually write the password into the HTML.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //This is the last step. Once password has a value. This value will be expressed
  //in the index.HTML at passwordText.value between lines 20-25.
  passwordText.value = password;
}

//This function will create the password.
function generatePassword(){
//When button is pressed, user is prompted with this question.
 var characterLength = prompt("Please enter desired password's length.")
 //If the prompt does not meet criteria, then the entire function will stop, forcing
 //the user to begin again by clicking the button.
  if (characterLength < 8 || characterLength > 128 || isNaN(characterLength)) {
    alert("Please enter a numueral more than 8 and less than 128.");
    return;
  } 
  //Once characterLength criteria is met, user receieves a series of confirm questions
  //about type of character.
  var confirmLower = confirm("Do you want lowercase characters in password?")
  
  var confirmUpper = confirm("Do you want uppercase characters in password?")
 
  var confirmNumeric = confirm("Do you want numerical characters in password?")
  
  var confirmSpecial = confirm("Do you want special characters in password?")
  
  //Password must be made up of atleast one type of character. If user did not
  //choose character type, then user will recieve alert and function will end.
  if (!confirmLower && !confirmUpper && !confirmNumeric && !confirmSpecial) {
    alert("Please choose atleast 1: lowercase, uppercase, numeric, special")
    return; 
  }
  
  //A masterList is created to house items from multiple arrays.
  
  var masterList = [];
  
  // Once the array has been confirmed (through the confirm questions), it is added to the masterList.
  if (confirmLower) {
    masterList = masterList.concat (lower)
  }
  if (confirmUpper) {
    masterList = masterList.concat (upper)
  }
  if (confirmNumeric) {
    masterList = masterList.concat (numeric)
  }
  if (confirmSpecial) {
    masterList = masterList.concat (special)
  }

  //Once the password has been generated, it will come out as a "string".
  var password = ""

  //This loop represents the process of chooseing random indexes from the masterList. 
  //It continues until the number (characterLength, chosen by the user) is reached.
  for (var i =0; i < characterLength; i++) {
    //characterlength = 9
    //i = 9 passord = a*
    //This shows that password should be a series of string concatenation with every time that it loops.
    //For example, if it chose "b" from the masterList first and then "7". Instead of replacing b, it will add 7 next to it, "b7"
    password = password+ masterList[Math.floor(Math.random()*masterList.length)]

  }
  //Finally the info goes back to password up above.
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
