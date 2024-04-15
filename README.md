# Module 3 Challenge 

## Technology Used 

| Technology Used | Resource URL | 

| HTML | [https://developer.mozilla.org/en-US/docs/Web/HTML]| 
| CSS  | [https://developer.mozilla.org/en-US/docs/Web/CSS]|   
| Git | [https://github.com/]|    

## Description 

[Visit the Deployed Site](https://youtu.be/BFyeuLhjcPY)

A non-functioning password generator was fixed, and it is now fully functional! 


## Code Refactor Example

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 
}

Prior to this update, the generatePassword function did nothing, which left the program utterly useless. It now provides the user with a unique, randomly generated password with a set of custom preferences!

## Usage 

Provide instructions and examples for use. Include screenshots as needed. 

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:


![alt text](assets/images/screenshot1.jpg)


## Learning Points 

I learned a lot of new techniques while completing this challenge. I learned how to generate a unique, randomized password on javascript using strings, arrays, loops and conditionals. I also learned how to use methods to turn strings into arrays, and arrays into strings... how to concatenate strings and how to use the .find method... I also learned how to select HTML elements in javascript, and how to make changes to those elements via dot notation and methods, also through javascript. 


## Author Info


### Justin Choi 


* [Portfolio](TBA)
* [LinkedIn](https://linkedin.com/in/justinschoi93)
* [Github](https://github.com/justinschoi93)



