// Pseudo code for the To-Do Application Sign up Page
//---------------------------------------------------
/*
1. Get the form inputs from the user (Full Name, Email, Password and Confirm Password).
2. Wait the user to click the "Sign Up" button.
3. Read the values that the user entered in the form inputs.
4. Check if the data is valid (not empty).
   4.1 Enter a valid name.
   4.2 Check the email if the enterted email meets requirements.
   4.3 Check the password if the enterted password meets requirements.
   4.4 Check the confirm password if matches the password.
5. When the user clicks the "Sign Up" button, get the values from the form inputs.
6. Show a message that the account has been created successfully.
7. Clear all the inputs.
8. Re-direct the user to the Login/Sign In page.
*/

// Delcare the Sign-Up & Login forms input elements
const signUpForm = document.querySelector("#sign-up-form");
const loginForm = document.querySelector("#login-form");

const fullNameInput = document.querySelector("#fullname-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#confirm-password-input");

const accountCreated = document.querySelector("#account-created");
const errorMessageForm = document.querySelector("#error-message");

// Valid the pattern of the inputs using Regex Pattern
const namePattern = /^[a-zA-Z .'-]{2,}$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d@$!%*#?&]{8,}$/;

// Get the values from the Sign Up form inputs
const fullnameValue = fullNameInput.value.trim();
const emailValue = emailInput.value.trim().toLowerCase();
const passwordValue = passwordInput.value.trim();
const confirmPasswordValue = confirmPasswordInput.value.trim();

// Sign up Event handler
signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Defined an array to put all the errors messages into it
  let errorMessages = [];

  // This condition is to check where we are
  // if (fullNameInput) {
  /* if we have a fullname input that means we are a Sign up form, 
       else we are inside a Login form */

  errorMessages = getSignUpFormErrors(
    fullNameInput.value,
    emailInput.value,
    passwordInput.value,
    confirmPasswordInput.value,
  );
  // }

  // else {
  // errorMessages = getLoginFormErrors(emailInput.value, passwordInput.value);
  // }
  if (errorMessages.length > 0) {
    // event.preventDefault();
    errorMessageForm.innerText = errorMessages.join(".\n");
  }

  // else if (fullNameInput) {
  else {
    accountCreated.innerText = `✅ The account has created successfully !`;
    // This will make the message disappeared after 5 seconds
    setTimeout(() => accountCreated.remove(), 5000);
  }
});

// Login Event handler
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Defined an array to put all the errors messages into it
  let errorMessages = [];

  errorMessages = getLoginFormErrors(emailInput.value, passwordInput.value);

  if (errorMessages.length > 0) {
    // event.preventDefault();
    errorMessageForm.innerText = errorMessages.join(".\n");
  } else {
    errorMessageForm.innerText = "";
  }
});

// Defined a function to get all error messages of the Sign up form
function getSignUpFormErrors(fullName, email, password, confirmPassword) {
  // Defined an array to put all the errors messages into it
  let errorMessages = [];

  // Check the Full name input if it is empty or not
  if (!fullName) {
    errorMessages.push("⚠️ Your Full Name is required");
    fullNameInput.classList.add("incorrect");
  }

  // Check the Email input if it is empty or not
  if (!email) {
    errorMessages.push("⚠️ Your Email address is required");
    emailInput.classList.add("incorrect");
  }

  // Check the Password input if it is empty or not
  if (!password) {
    errorMessages.push("⚠️ Your Password is required");
    passwordInput.classList.add("incorrect");
  }

  // Check the Confirm Password input if it is empty or not
  if (!confirmPassword) {
    errorMessages.push("⚠️ Please write your password to confirm it");
    confirmPasswordInput.classList.add("incorrect");
  }

  if (errorMessages.length === 0) {
    // Validate the Full name input with the pattern that we set
    if (!namePattern.test(fullName)) {
      errorMessages.push("⚠️ Sorry your name should at least be 2 characters");
      fullNameInput.classList.add("incorrect");
    }

    // Validate the Email input with the pattern that we set
    if (!emailPattern.test(email)) {
      errorMessages.push("⚠️ Please make sure you write your email correctly");
      emailInput.classList.add("incorrect");
    }
    // Validate the Password input with the pattern that we set
    if (!passwordPattern.test(password)) {
      errorMessages.push(
        `⚠️ The password must have at least 1 letter, 1 number, and 8 or more characters, carefull no spaces allowed`,
      );
      passwordInput.classList.add("incorrect");
    }

    // Validate the Confirm Password input with the Password input if they match each others
    if (password !== confirmPassword) {
      errorMessages.push("⚠️ The Password does not match Confirm Password");
      passwordInput.classList.add("incorrect");
      confirmPasswordInput.classList.add("incorrect");
    }
  }
  return errorMessages;
}

// Defined a function to get all error messages of the Login form
function getLoginFormErrors(email, password) {
  let errorMessages = [];

  // Check the Email input if it is empty or not
  if (!email) {
    errorMessages.push("⚠️ Your Email address is required");
    emailInput.classList.add("incorrect");
  }
  // Validate the Email input with the pattern that we set
  else if (emailPattern.test(email)) {
    errorMessages.push("⚠️ Please make sure you write your email correctly");
    emailInput.classList.add("incorrect");
  }
  // Check the Password input if it is empty or not
  if (!password) {
    errorMessages.push("⚠️ Your Password is required");
    passwordInput.classList.add("incorrect");
  }
  // Validate the Password input with the pattern that we set
  else if (!passwordPattern.test(password)) {
    errorMessages.push(`⚠️ The password must contain at least 1 letter,
    1 number, and 8 or more characters, carefull no spaces allowed`);
    passwordInput.classList.add("incorrect");
  }

  return errorMessages;
}

// Defines an array contains all the inputs
const allInputs = [
  fullNameInput,
  emailInput,
  passwordInput,
  confirmPasswordInput,
];
// ].filter((input) => input != null);

// Clearing the inputs that have errors
allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.classList.contains("incorrect")) {
      input.classList.remove("incorrect");
      errorMessageForm.innerText = "";
    }
  });
});
