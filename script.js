

// Criteria functions created using Browser Character set
 // randomLower function: math random will generate a random decimal, math floor is rounding the decimals, multiplying by 26 limits the numbers to the number of letters in the alphabet, + 97 ensures the random number starts from position 97 in the Browser Character set which is where lower case letters start
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}  

// function grabbing random uppercase letter a
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
} 

// function grabbing random number
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

// function grabbing special character
function randomSpecial() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 36)
}

console.log(randomLower());
console.log(randomUpper());
console.log(randomNumber());
console.log(randomSpecial());

// building the generate password function
function generatePassword(){

  
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
