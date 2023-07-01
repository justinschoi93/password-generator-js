// Assignment code here
function generatePassword (){
        //we initialize the necessary strings and arrays
        let result = [];
        let lowerCase='abcdefghijklmnopqrstuvwxyz';
        let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let numbers = '0123456789';
        let specialChar = '!@#$%^&*()-_=+<>?:;~`';
        let allInclusive = '';
        let n = window.prompt("How many characters would you like your password to be? Choose a number between 8 and 124.");
        //we check to see if the user input is valid
        if (n < 8 || n > 124) {
                //if it isn't, we alert them. 
                window.alert("You must choose a number between 8 and 124.");
        } else {
                //if it is, we ask them a series of questions. 
                //we then make sure that each of the desired character types are accounted for. 
                if (window.confirm("Would you like lower case letters in your password?")) {
                        result.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
                        allInclusive += lowerCase;
                        n--;
                }
        
                if (window.confirm("Would you like upper case letters in your password?")) {
                        result.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
                        allInclusive += upperCase;
                        n--;
                }
        
                if (window.confirm("Would you like numbers in your password?")) {
                        result.push(numbers[Math.floor(Math.random() * numbers.length)]);
                        allInclusive += numbers;
                        n--;
                }
        
                if (window.confirm("Would you like special characers in your password?")) {
                        result.push(specialChar[Math.floor(Math.random() * specialChar.length)]);
                        allInclusive += specialChar;
                        n--;
                } 
                //we also make sure that at least 1 of the character types are selected. 
                if (allInclusive === '') {window.alert("You must select at least 1 of the above.")}
                //we then make sure that the password is the desired length. 
                for (let i = 0; i < n; i++){
                        result.push(allInclusive[Math.floor(Math.random() * allInclusive.length)]);
        
                }     
        }
        

        
        // console.log(result);
        result = result.join("");
        // console.log(result);
       //we then convert the result array into a string, and return the newly generated password. 
        return result;

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
