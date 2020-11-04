// Assignment Code
var generateBtn = document.querySelector("#generate");

// generatePassword definition
function generatePassword() {
  // variable declarations
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = lower.toUpperCase();
  const numeric = "1234567890";
  const special = "!#$%&\"'()*+,-./\\:;><?=@[]^_`{|}~";
  let chars = "";
  let pass = "";

          // const passLength = parseInt(
          //   prompt("How long should your password be?\nEnter a whole number between 8 and 128 inclusive:")
          // )
          //console.log(passLength)
  // get password length from user
  const passLength = document.getElementById("myRange").value;

          // if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
          //   alert("That isn't a whole number between 8 and 128");
          //   return;
          // }
  // get desired char types from user (special thanks to Sergey)
  const includeLower = document.getElementById("lower");
  const includeUpper = document.getElementById("upper");
  const includeNumeric = document.getElementById("numeric");
  const includeSpecial = document.getElementById("special");

  // build desired char type string
  if (includeLower.checked) {
    chars += lower;
  }
  if (includeUpper.checked) {
    chars += upper;
  }
  if (includeNumeric.checked) {
    chars += numeric;
  }
  if (includeSpecial.checked) {
    chars += special;
  }

  // return nothing if no char are included
  if (
    includeLower.checked == false &&
    includeUpper.checked == false &&
    includeNumeric.checked == false &&
    includeSpecial.checked == false
  ) {
    return "";
  }

  
          // if (!includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
          //   alert("You must include at least one type of character");
          //   return;
          // }

  // build and return pseudo-random password
  for (i = 0; i < passLength; i++) {
    pass += chars[Math.floor(Math.random() * chars.length)];
  }
  return pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
