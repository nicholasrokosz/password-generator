// Assignment Code
var generateBtn = document.querySelector("#generate");

// generatePassword definition
function generatePassword() {

  // variable declarations
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  const upper = lower.toUpperCase()
  const numeric = '1234567890'
  const special = "!#$%&'()*+,-./:;><?=@[]^_`{|}~" // <-- ???????????? " and \
  let chars = ''
  let pass = ''

  // get password length from user
  passLength = parseInt(
    prompt("How long should your password be?\nEnter a whole number between 8 and 128 inclusive:")
  )
  // test for invalid input
  if (passLength < 8 || passLength > 128 || passLength === NaN) { // <-- ??????????????
    alert("That isn't a whole number between 8 and 128");
    return;
  }
  // get desired char types from user
  const includeLower = confirm("Select ok to include lowercase characters:")
  const includeUpper = confirm("Select ok to include uppercase characters:")
  const includeNumeric = confirm("Select ok to include numeric characters:")
  const includeSpecial = confirm("Select ok to include special characters:")

  // build desired char type string
  if (includeLower) {
    chars += lower;
  }
  if (includeUpper) {
    chars += upper;
  }
  if (includeNumeric) {
    chars += numeric;
  }
  if (includeSpecial) {
    chars += special;
  }

  // test for invalid input
  if (!includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
    alert("You must include at least one type of character");
    return;
  }

  // build and return pseudo-random password
  for (i = 0; i < passLength; i++) {
    pass += chars[Math.floor(Math.random() * chars.length)]
  }
  return pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
