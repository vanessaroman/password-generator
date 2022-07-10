// This function were created with the help of Traversy Media on youtube. Link here: https://www.youtube.com/watch?v=duNmhKgtcsI
// Grabbing criteria elements in html
const passEl = document.getElementById('password');
const lowerEl = document.getElementById('lowercase');
const upperEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const lengthEl = document.getElementById('length');
const specialEl = document.getElementById('special');
const generateBtn = document.querySelector("#generate");

const randomFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  special: randomSpecial,
}

// adding event listener that tells if criteria is selected or not
generateBtn.addEventListener('click', () => {
  const length = +lengthEl.value; 
  console.log('length: ', length)
  const hasLower = lowerEl.checked;
  const hasUpper = upperEl.checked;
  const hasNumbers = numbersEl.checked;
  const hasSpecial = specialEl.checked;

  passEl.innerText = writePassword(hasLower, hasUpper, hasNumbers, hasSpecial, length);

});

// Write password function
function writePassword(lower, upper, number, special, length) {
  let generatedPassword = '';

  // const that defines the number of checked boxes
  const criteriaCount = lower + upper + number + special;
  // Creates array of password criteria selected and their value
  const criteriaArray = [{lower}, {upper}, {number}, {special}].filter(
    // using the filter method to skip unchecked criteria or false criteria in the array
    item => Object.values(item)[0]
  );
  // console.log('criteriaArray: ', criteriaArray);

  if(criteriaCount === 0) {
    // if no criteria is selected return empty string
    return '';
  }

  // for each loop looping through the criteria array
  for(let i = 0; i < length; i += criteriaCount) {
    criteriaArray.forEach(criteria => {

      const funcName = Object.keys(criteria)[0];
      console.log('funcName: ', funcName);

      generatedPassword += randomFunc[funcName]();

    });

  }

  const password = generatedPassword;

  return password;

}

// Criteria functions created using Browser Character set
 // randomLower function: math random will generate a random decimal, math floor is rounding the decimals, multiplying by 26 limits the numbers to the number of letters in the alphabet, + 97 ensures the random number starts from position 97 in the Browser Character set which is where lower case letters start in the browser Character set

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

// console.log(randomLower());
// console.log(randomUpper());
// console.log(randomNumber());
// console.log(randomSpecial());


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
