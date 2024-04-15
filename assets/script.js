// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericCharacters = "0123456789";
  let specialCharacters = "!@#$%^&*";
  let characterBank = '';
  

  // User inputs
  //// Password length: 8-128 characters
  //// Character types: lowercase, uppercase, numeric, and/or special characters
  /////// Special Characters
  //// Has at least one of each character type user has requested

  let passwordLength = prompt("How long would you like your password to be? (8-128 characters)");
  if(passwordLength < 8 || passwordLength > 128){
    alert("Please enter a number between 8 and 128.");
    return;
  }

  let lowercase = confirm("Would you like to include lowercase characters?");
  let uppercase = confirm("Would you like to include uppercase characters?");
  let numeric = confirm("Would you like to include numeric characters?");
  let special = confirm("Would you like to include special characters?");

  if (special) {
    special = prompt("Please enter the special characters you would like to include.");
  }

  if (lowercase) { characterBank += lowercaseCharacters };
  if (uppercase) { characterBank += uppercaseCharacters };
  if (numeric) { characterBank += numericCharacters };
  if (special) { characterBank += specialCharacters };

  let password = '';
  
  for (let i = 0; i < passwordLength; i++){
    let randomIndex = Math.floor(Math.random() * characterBank.length);
    password += characterBank[randomIndex];
  }
  
  ////////////////// TEST PASSWORD //////////////////////////////////////////////////
  if (lowercase) {
    const pass = password.split('').find(char => lowercaseCharacters.includes(char));
    if (!pass) {
      console.log('Password does not contain lowercase characters. Creating new password');
      generatePassword();
    }
  }
  if (uppercase) {
    const pass = password.split('').find(char => uppercaseCharacters.includes(char));
    if (!pass) {
      console.log('Password does not contain uppercase characters. Creating new password');
      generatePassword();
    }
  }
  if (numeric) {
    const pass = password.split('').find(char => numericCharacters.includes(char));
    if (!pass) {
      console.log('Password does not contain numeric characters. Creating new password');
      generatePassword();
    }
  }
  if (special) {
    const pass = password.split('').find(char => specialCharacters.includes(char));
    if (!pass) {
      console.log('Password does not contain special characters. Creating new password');
      generatePassword();
    }
  }
  ////////////// RETURN PASSWORD ////////////////////////////////////////////////////
  return password;
  
};

// function testPassword () {
//   if (lowercase) {
//     const pass = password.split('').find(char => lowercaseCharacters.includes(char));
//     if (!pass) {
//       console.log('Password does not contain lowercase characters. Creating new password');
//       generatePassword();
//     }
//   }
//   if (uppercase) {
//     const pass = password.split('').find(char => uppercaseCharacters.includes(char));
//     if (!pass) {
//       console.log('Password does not contain uppercase characters. Creating new password');
//       generatePassword();
//     }
//   }
//   if (numeric) {
//     const pass = password.split('').find(char => numericCharacters.includes(char));
//     if (!pass) {
//       console.log('Password does not contain numeric characters. Creating new password');
//       generatePassword();
//     }
//   }
//   if (special) {
//     const pass = password.split('').find(char => specialCharacters.includes(char));
//     if (!pass) {
//       console.log('Password does not contain special characters. Creating new password');
//       generatePassword();
//     }
//   }
// };