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
const signUpForm = document.querySelector("#sign-up-form");
const fullNameInput = document.querySelector("#fullname-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#confirm-password-input");
const errorMessageSignUp = document.querySelector("#sign-up-error-message");

// Valid the pattern of the inputs
const namePattern = /^[A-Za-z ]{2, }$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;

// Get the values from the Sign Up form inputs
const fullnameValue = fullNameInput.value.trim();
const emailValue = emailInput.value.trim().toLowerCase();
const passwordValue = passwordInput.value.trim();
const confirmPasswordValue = confirmPasswordInput.value.trim();

signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let errorMessages = [];

  if (fullNameInput) {
    errorMessages = getSignUpErrors(
      fullNameInput.value,
      emailInput.value,
      passwordInput.value,
      confirmPasswordInput.value,
    );
  } else {
    errorMessages = getLoginErrors(emailInput.value, passwordInput.value);
  }
  if (errorMessages.length > 0) {
    event.preventDefault();
    errorMessageSignUp.innerText = errorMessages.join(".\n");
  }
});

function getSignUpErrors(fullName, email, password, confirmPassword) {
  let errorMessages = [];
  if (fullName === "" || fullName == null) {
    errorMessages.push("Your Full Name is required !");
    fullNameInput.parentElement.classList.add("incorrect");
  }
  if (email === "" || email == null) {
    errorMessages.push("Your Email address is required !");
    emailInput.parentElement.classList.add("incorrect");
  }
  if (password === "" || password == null) {
    errorMessages.push("Your Password is required !");
    passwordInput.parentElement.classList.add("incorrect");
  }
  if (password.length < 8) {
    errorMessages.push("The password must be at least 8 characters !");
    passwordInput.parentElement.classList.add("incorrect");
  }
  if (password !== confirmPassword) {
    errorMessages.push("The Password does not match Confirm Password !");
    passwordInput.parentElement.classList.add("incorrect");
    confirmPasswordInput.parentElement.classList.add("incorrect");
  }
  return errorMessages;
}

const allInputs = [
  fullNameInput,
  emailInput,
  passwordInput,
  confirmPasswordInput,
];
allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.parentElement.classList.contains("incorrect")) {
      input.parentElement.classList.remove("incorrect");
      errorMessageSignUp.innerHTML = "";
    }
  });
});
