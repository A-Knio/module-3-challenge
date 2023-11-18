// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var length = Number(prompt("Choose a password length between 8 and 128 characters"));
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid length. Please enter a number between 8 and 128.");
    return "";
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  if (includeLowercase) allowed += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) allowed += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumeric) allowed += "0123456789";
  if (includeSpecial) allowed += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  for (var i = 0; i < length; i++) {
    password += allowed.charAt(Math.floor(Math.random() * allowed.length));
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
