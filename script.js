// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn)



function generatePassword(){
    
  //TBD3a: User wants to include lowercaase characters, include them into the possible character variable string
  //TBD4: Ask the same thing as TBD3, TBD3a, for uppercase, numerals and special characters
  //TBD5: Generate random password as user prescribed length and return from the function

  //TBD1: Add many variables as needed. Examples uppercase variables, lower class variable, numerals and special characters as needed
  var lower = "abcdefghijklmnopqrstuvwxyz"; 
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialcharacters = "!@#$%^&*<>{}[]-_+=/|"; 
  var possiblecharacters = "";
  var password = "";
  var includelower;
  var includeupper;
  var includenumber;
  var includespecialcharacter;

  //TBD2: Ask the user for password length and store it in variable password length. Make sure you convert string into number format
  passwordLength=parseInt(window.prompt("give a password length between 8 and 128"));
  
  //TBD2a: If the user gives a length value of less than 8 or more than 128, ask the user to reinput values between 8 and 128
  if (passwordLength > 128 || passwordLength < 8 || isNaN(parseInt(passwordLength))){
    window.alert ("Password length must be between 8 and 128 please re-enter");
    return("Password not generated, please re-enter");
  } 
   //TBD3: Ask the user to confirm if they want to include lower case characters into password creation
  else {
    let lower = confirm ("Would you like to use lowercase letters?");
    if(lower){
      possiblecharacters += lower
    };
  //TBD3a: Ask the user to confirm if they want to include upper case characters into password creation
    let upper = confirm ("Would you like to use uppercase letters?");
    if(upper){
      possiblecharacters += upper
    };
  //TBD3b: Ask the user to confirm if they want to include numbers into password creation
    let numbers = confirm ("Would you like to use numbers?");
    if(numbers){
      possiblecharacters += numbers
    };
  //TBD3c: Ask the user to confirm if they want to include special characters into password creation
    let specialcharacters = confirm ("Would you like to use special characters");
    if(specialcharacters){
      specialcharacters += specialcharacters
    };
    if (
      lower === false && upper === false && numbers === false && specialcharacters === false
      ){
      window.alert("Please select at least one character type to create a password.");
      return("Password not generated, please re-enter");
    }
  }
  let pwd = "";
  for (let i=0; i<passwordLength; i++){
    pwd += possiblecharacters.charAt(Math.floor(Math.random() * possiblecharacters.passwordLength))
  }
  return pwd
}

// Write password to the #password input
function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
};





