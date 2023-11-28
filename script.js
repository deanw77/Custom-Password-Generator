// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let passwordLength;
let uppercaseLetters;
let lowercaseLetters;
let numbers;
let specialCharacter;
let randomPassword = '';
let CCA = [];

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = document.getElementById('passwordlength').value;
  passwordBoolean = false;
  if (passwordLength < 8 || passwordLength > 128 || typeof passwordLength === "number") {
      passwordLengthBox.value = '';
      passwordBoolean = false;
  } else {
      passwordBoolean = true;
  }

  uppercaseLetters = false;
  lowercaseLetters = false;
  numbers = false;
  specialCharacter = false;

  uppercaseLetters = upperCasedCharacter.checked;
  lowercaseLetters = lowerCasedCharacter.checked;
  numbers = numberCharacter.checked;
  specialCharacter = specialCharacterElement.checked;

  if ((uppercaseLetters || lowercaseLetters || numbers || specialCharacter) && passwordBoolean) {
      modal.style.display = 'none';
      overlay.style.display = 'none';
      getRandom();
      generatePassword();
  } else {
      alert('You must select at least One character type for your password & Choose a Password Length between 8 & 128');
      randomPassword = ''
  }
}

// Function for getting a random element from an array
function getRandom() {
  CCA = [];
    if (uppercaseLetters) {
        CCA =  CCA.concat(upperCasedCharacters);
    }
    if (lowercaseLetters) {
        CCA =  CCA.concat(lowerCasedCharacters);
    }
    if (numbers) {
        CCA =  CCA.concat(numericCharacters);
    }
    if (specialCharacter) {
        CCA =  CCA.concat(specialCharacters);
    }
}

// Function to generate password with user input
function generatePassword() {
  randomPassword = '';
    for (i = 0; i < passwordLength; i++) {
        randomNumber = Math.floor(Math.random() * CCA.length);
        randomPassword += CCA[randomNumber];
    }

    passwordDisplay.innerHTML = randomPassword;
}

// Get references to the #generate element
const generateModalBtn = document.querySelector('#generateModal');
const generateButton = document.querySelector('#generate');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close');
const modalGenerate = document.querySelector('#modalGenerate');
const passwordLengthBox = document.querySelector('#passwordlength');
const passwordDisplay = document.querySelector('#password');
const upperCasedCharacter =document.querySelector('#uppercaseLetters');
const lowerCasedCharacter =document.querySelector('#lowercaseLetters');
const numberCharacter =document.querySelector('#numbers');
const specialCharacterElement =document.querySelector('#specialCharacters');
const overlay = document.querySelector('.overlay');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateModalBtn.addEventListener('click',function() {
  modal.style.display = 'block';
  overlay.style.display = 'block';
});

closeModal.addEventListener('click',function() {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

overlay.addEventListener('click',function() {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

modalGenerate.addEventListener('click',function() {
  getPasswordOptions(); 
});