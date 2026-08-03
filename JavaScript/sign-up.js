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
// document.addEventListener("DOMContentLoaded", function () {
// Delcare the Sign-Up form input elements
const signUpForm = document.querySelector("#sign-up-form");
const fullNameInput = document.querySelector("#fullname-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#confirm-password-input");
const accountCreated = document.querySelector("#account-created");
const errorMessageForm = document.querySelector("#error-message");

// Valid the pattern of the inputs using Regex Pattern
const namePattern = /^[a-zA-Z '.-]{2,}$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d@$!%*#?&]{8,}$/;

signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the values from the Sign Up form inputs
  const fullnameValue = fullNameInput.value.trim();
  const emailValue = emailInput.value.trim().toLowerCase();
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();

  // Defined an array to put all the errors messages into it
  let errorMessages = []; // we can pass the values of the inputs to a function
  //  that will check the errors and return an array of errors messages directly to this variable

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
  // } else {
  // errorMessages = getLoginFormErrors(emailInput.value, passwordInput.value);
  // }
  if (errorMessages.length > 0) {
    // event.preventDefault();
    errorMessageForm.innerText = errorMessages.join(".\n");
  } else {
    // Save the data to the local storage
    // Get the existing user data from local storage or initialize an empty array
    let userData = JSON.parse(localStorage.getItem("appUsers")) || [];

    // Check if the email already exists in the local storage
    const existEmail = userData.find((user) => user.email === emailValue);
    if (existEmail) {
      errorMessageForm.innerText = "⚠️ This email is already registered";
      emailInput.classList.add("incorrect");
      return;
    }
    // Save the user data to the local storage
    userData.push({
      fullname: fullnameValue,
      email: emailValue,
      password: passwordValue,
    });
    // Store the updated user data back to local storage
    localStorage.setItem("appUsers", JSON.stringify(userData));

    errorMessageForm.innerText = "";
    accountCreated.innerText = `✅ The account has created successfully !`;
    // This will make the message disappeared after 5 seconds
    setTimeout(() => accountCreated.remove(), 5000);
    clearInputs();

    // Redirect the user to the Login page after 3 seconds after the account has been created successfully
    setTimeout(() => {
      window.location.href = "login.html";
    }, 3000);
  }
});

// Defined a function to get all error messages of the Sign up form
function getSignUpFormErrors(fullName, email, password, confirmPassword) {
  // Defined an array to put all the errors messages into it
  let errorMessages = [];

  // Phase 1: Check if the inputs are empty or not
  //----------------------------------------------

  // Check the Full name input if it is empty or not
  if (!fullName) {
    errorMessages.push("⚠️ Your Full Name is required");
    fullNameInput.classList.add("incorrect");
  }
  // Validate the Full name input with the pattern that we set
  // else if (!namePattern.test(fullName)) {
  //   errorMessages.push("⚠️ Sorry your name should at least be 2 characters");
  //   fullNameInput.classList.add("incorrect");
  // }
  // Check the Email input if it is empty or not
  if (!email) {
    errorMessages.push("⚠️ Your Email address is required");
    emailInput.classList.add("incorrect");
  }
  // Validate the Email input with the pattern that we set
  // else if (!emailPattern.test(email)) {
  //   errorMessages.push("⚠️ Please make sure you write your email correctly");
  //   emailInput.classList.add("incorrect");
  // }
  // Check the Password input if it is empty or not
  if (!password) {
    errorMessages.push("⚠️ Your Password is required");
    passwordInput.classList.add("incorrect");
  }
  // Validate the Password input with the pattern that we set
  // else if (!passwordPattern.test(password)) {
  //   errorMessages.push(
  //     `⚠️ The password must have at least 1 letter, 1 number, and 8 or more characters, carefull no spaces allowed`,
  //   );
  //   passwordInput.classList.add("incorrect");
  // }
  // Check the Confirm Password input if it is empty or not
  if (!confirmPassword) {
    errorMessages.push("⚠️ Please write your password to confirm it");
    confirmPasswordInput.classList.add("incorrect");
  }
  // Validate the Confirm Password input with the Password input if they match each others
  // else if (password !== confirmPassword) {
  //   errorMessages.push("⚠️ The Password does not match Confirm Password");
  //   passwordInput.classList.add("incorrect");
  //   confirmPasswordInput.classList.add("incorrect");
  // }

  // Phase 2: Check if the inputs are following the patterns that we set for them
  //-----------------------------------------------------------------------------
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

// Defines an array contains all the inputs
const formInputs = [
  fullNameInput,
  emailInput,
  passwordInput,
  confirmPasswordInput,
].filter((input) => input != null);

// Clearing the inputs that have errors
formInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.classList.contains("incorrect")) {
      input.classList.remove("incorrect");
      errorMessageForm.innerText = "";
    }
  });
});

// Function to clear all the inputs of the Sign Up form
function clearInputs() {
  signUpForm.reset();
}
// });
