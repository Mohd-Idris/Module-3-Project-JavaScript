const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const errorMessageForm = document.getElementById("error-message");
const messageDelivered = document.getElementById("message-delivered");

// Valid the pattern of the inputs using Regex Pattern
const namePattern = /^[a-zA-Z '.-]{2,}$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  // Get the values from the Contact form inputs
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim().toLowerCase();
  const subjectValue = subjectInput.value.trim();
  const messageValue = messageInput.value.trim();

  // Defined an array to put all the errors messages into it
  let errorMessages = [];

  errorMessages = getContactFormErrors(
    nameValue,
    emailValue,
    subjectValue,
    messageValue,
  );

  if (errorMessages.length > 0) {
    event.preventDefault();
    errorMessageForm.innerText = errorMessages.join(".\n");
    return;
  }

  // get all trimmed values into inputs
  nameInput.value = nameValue;
  emailInput.value = emailValue;
  subjectInput.value = subjectValue;
  messageInput.value = messageValue;

  errorMessageForm.innerText = "";
  messageDelivered.innerText = `✅ The message has been sent successfully !`;
  messageDelivered.style.display = "inline-block";

  setTimeout(() => {
    contactForm.submit();
  }, 10);

  setTimeout(() => {
    contactForm.reset();
    messageDelivered.innerText = "";
  }, 3000);
});

// Defined a function to get all error messages of the Contact me form
function getContactFormErrors(name, email, subject, message) {
  // Defined an array to put all the errors messages into it
  let errorMessages = [];

  // Phase 1: Check if the inputs are empty or not
  //----------------------------------------------

  // Check Name input if it is empty or not
  if (!name) {
    errorMessages.push("❌ Your Full Name is required");
    nameInput.classList.add("incorrect");
  }

  // Check Email input if it is empty or not
  if (!email) {
    errorMessages.push("❌ Your Email address is required");
    emailInput.classList.add("incorrect");
  }

  // Check Password input if it is empty or not
  if (!subject) {
    errorMessages.push("❌ Your Subject is required");
    subjectInput.classList.add("incorrect");
  }

  // Check Confirm Password input if it is empty or not
  if (!message) {
    errorMessages.push("❌ Please write your message");
    messageInput.classList.add("incorrect");
  }

  // Phase 2: Check if the inputs are following the Regex patterns that we set for them
  //-----------------------------------------------------------------------------
  if (errorMessages.length === 0) {
    // Validate the Full name input with the pattern that we set
    if (!namePattern.test(name)) {
      errorMessages.push(
        "❌ Sorry your name should have at least 2 characters",
      );
      nameInput.classList.add("incorrect");
    }

    // Validate the Email input with the pattern that we set
    if (!emailPattern.test(email)) {
      errorMessages.push(
        "❌ Please make sure your email is correct e.g example@domain.com",
      );
      emailInput.classList.add("incorrect");
    }
  }
  return errorMessages;
}

// Defines an array contains all the inputs
const formInputs = [nameInput, emailInput, subjectInput, messageInput].filter(
  (input) => input != null,
);

// Clearing the inputs that have errors
formInputs.forEach((input) => {
  input.addEventListener("input", () => {
    // if (input.classList.contains("incorrect")) {
    input.classList.remove("incorrect");
    errorMessageForm.innerText = "";
    // }
  });
});
