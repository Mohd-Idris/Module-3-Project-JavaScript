// // // Pseudo code for the To-Do Application Sign up Page
// // //---------------------------------------------------
// // /*
// // 1. Get the form inputs from the user (Full Name, Email, Password and Confirm Password).
// // 2. Wait the user to click the "Sign Up" button.
// // 3. Read the values that the user entered in the form inputs.
// // 4. Check if the data is valid (not empty).
// //    4.1 Enter a valid name.
// //    4.2 Check the email if the enterted email meets requirements.
// //    4.3 Check the password if the enterted password meets requirements.
// //    4.4 Check the confirm password if matches the password.
// // 5. When the user clicks the "Sign Up" button, get the values from the form inputs.
// // 6. Show a message that the account has been created successfully.
// // 7. Clear all the inputs.
// // 8. Re-direct the user to the Login/Sign In page.
// // */

// // Delcare the Sign-Up form input elements
// const signUpForm = document.querySelector(".sign-up-form");
// const fullNameInput = document.querySelector(".fullname-input");
// const emailInput = document.querySelector(".email-input");
// const passwordInput = document.querySelector(".password-input");
// const confirmPasswordInput = document.querySelector(".confirm-password-input");

// // Valid the pattern of the inputs
// const namePattern = /^[A-Za-z ]{2, }$/;
// const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;

// signUpForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   // Get the values from the Sign Up form inputs
//   const fullnameValue = fullNameInput.value.trim();
//   const emailValue = emailInput.value.trim().toLowerCase();
//   const passwordValue = passwordInput.value.trim();
//   const confirmPasswordValue = confirmPasswordInput.value.trim();

//   // Check all the form empty fields
//   if (
//     !fullnameValue ||
//     !emailValue ||
//     !passwordValue ||
//     !confirmPasswordValue
//   ) {
//     alert("Please Fill in all the Form's Fields ");
//     return;
//   }

//   // Check Full Name is not empty
//   if (!namePattern.test(fullnameValue)) {
//     alert(
//       "Full Name input can only contain letters and spaces with minimum 2 characters ",
//     );
//     return;
//   }

//   // Check Email is not empty
//   if (!emailPattern.test(emailValue)) {
//     alert(
//       "You've entered invalid email, Please enter a valid one e.g. mail@example.com ",
//     );
//     return;
//   }

//   // Check Password length
//   if (!passwordValue.length < 8) {
//     alert("Passsword must have at least 8 characters");
//     return;
//   }

//   // Check Confirm Password is matching the Password input
//   if (confirmPasswordValue !== passwordValue) {
//     alert("The passwords you entered are not matching, Please try again ... ");
//     return;
//   }
// });

// // Pseudo code for the To-Do Application Sign up Page
// //---------------------------------------------------
// /*
// 1. Get the form inputs from the user (Full Name, Email, Password and Confirm Password).
// 2. Wait the user to click the "Sign Up" button.
// 3. Read the values that the user entered in the form inputs.
// 4. Check if the data is valid (not empty).
//    4.1 Enter a valid name.
//    4.2 Check the email if the enterted email meets requirements.
//    4.3 Check the password if the enterted password meets requirements.
//    4.4 Check the confirm password if matches the password.
// 5. When the user clicks the "Sign Up" button, get the values from the form inputs.
// 6. Show a message that the account has been created successfully.
// 7. Clear all the inputs.
// 8. Re-direct the user to the Login/Sign In page.
// */

// Delcare the Sign-Up form input elements
const loginForm = document.querySelector("#login-form");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");

const accountCreated = document.querySelector("#account-created");
const errorMessageForm = document.querySelector("#error-message");

// Valid the pattern of the inputs using Regex Pattern
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d@$!%*#?&]{8,}$/;

// Get the values from the Sign Up form inputs
const emailValue = emailInput.value.trim().toLowerCase();
const passwordValue = passwordInput.value.trim();

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
].filter((input) => input != null);

// Clearing the inputs that have errors
allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.classList.contains("incorrect")) {
      input.classList.remove("incorrect");
      errorMessageForm.innerText = "";
    }
  });
});
