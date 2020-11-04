// Assignment Code
var generateBtn = document.querySelector("#generate");

// generatePassword definition
function generatePassword() {

  const lower = 'abcdefghijklmnopqrstuvwxyz'
  const upper = lower.toUpperCase()
  const numeric = '1234567890'
  const special = "!#$%&'()*+,-./:;><?=@[]^_`{|}~" // <-- ???????????? " and \
  let chars = ''
  let pass = ''

  passLength = parseInt(
    prompt("How long should your password be?\nEnter a whole number between 8 and 128 inclusive:")
  )
  console.log(passLength);

  if (passLength < 8 || passLength > 128 || passLength === NaN) { // <-- ??????????????
    alert("That isn't a whole number between 8 and 128");
    return;
  }
  var includeLower = confirm("Select ok to include lowercase characters:")
  if (includeLower) {
    chars += lower;
  }
  var includeUpper = confirm("Select ok to include uppercase characters:")
  if (includeUpper) {
    chars += upper;
  }
  var includeNumeric = confirm("Select ok to include numeric characters:")
  if (includeNumeric) {
    chars += numeric;
  }
  var includeSpecial = confirm("Select ok to include special characters:")
  if (includeSpecial) {
    chars += special;
  }
  if (!includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
    alert("You must include at least one type of character");
    return;
  }
  for (i = 0; i < passLength; i++) {
    pass += chars[Math.floor(Math.random() * chars.length)]
  }
  // console.log(pass);
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
