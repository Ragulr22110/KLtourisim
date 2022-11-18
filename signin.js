const form = document.querySelector("form"),
  userField = form.querySelector(".user-field"),
  userInput = userField.querySelector(".user"),
  mobileField = form.querySelector(".mobile-field"),
  mobileInput = mobileField.querySelector(".mobile"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");

  // user Validtion
function checkUser() {
    const userPattern = /^[A-Za-z]+$/;
    if (!userInput.value.match(userPattern)) {
      return userField.classList.add("invalid"); //adding invalid class if username value do not mathced with username pattern
    }
    userField.classList.remove("invalid"); //removing invalid class if username value matched with username Pattern
  }

   // user Validtion
function checkMobile() {
    const mobilePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (!mobileInput.value.match(mobilePattern)) {
      return mobileField.classList.add("invalid"); //adding invalid class if username value do not mathced with username pattern
    }
    mobileField.classList.remove("invalid"); //removing invalid class if username value matched with username Pattern
  }

// Email Validtion
function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
  }
  emailField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
}

// Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return (pInput.type = "text");
    }
    eyeIcon.classList.replace("bx-show", "bx-hide");
    pInput.type = "password";
  });
});

// Password Validation
function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
  }
  passField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
}

// Confirm Password Validtion
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}

// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submitting
  checkUser();
  checkMobile();
  checkEmail();
  createPass();
  confirmPass();

  //calling function on key up
  userInput.addEventListener("keyup", checkUser);
  mobileInput.addEventListener("keyup", checkMobile);
  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  if (
    !userField.classList.contains("invalid") &&
    !mobileField.classList.contains("invalid") &&
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});
