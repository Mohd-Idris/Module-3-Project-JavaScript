const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const subjectError = document.getElementById("subject-error");
const messageError = document.getElementById("message-error");

// Valid the pattern of the inputs using Regex Pattern
const namePattern = /^[a-zA-Z '.-]{2,}$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;

function ShowError(inputElement, message) {
  inputElement.textContent = "❌ " + message;
}

function clearError(inputElement) {
  inputElement.textContent = "";
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  // Get the values from the Contact form inputs
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim().toLowerCase();
  const subjectValue = subjectInput.value.trim();
  const messageValue = messageInput.value.trim();

  // Validate the Name input
  if (!nameValue) {
    ShowError(nameError, "Name is required");
    isValid = false;
  } else if (!namePattern.test(nameValue)) {
    ShowError(nameError, "Please enter a valid name");
    isValid = false;
  } else {
    clearError(nameError);
  }

  // Validate the Email input
  if (!emailValue) {
    ShowError(emailError, "Email is required");
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    ShowError(emailError, "Please enter a valid email address");
    isValid = false;
  } else {
    clearError(emailError);
  }

  // Validate the Subject input
  if (!subjectValue) {
    ShowError(subjectError, "Subject is required");
    isValid = false;
  } else {
    clearError(subjectError);
  }

  // Validate the Message input
  if (!messageValue) {
    ShowError(messageError, "Message is required");
    isValid = false;
  } else {
    clearError(messageError);
  }

  if (isValid) {
    // decalare the email address to send the message to
    const mymail = "moidriz91@gmail.com";

    // Create the mailto link with the form data
    const mailtoLink = `mailto:${mymail}?subject=${encodeURIComponent(
      subjectValue,
    )}&body=${encodeURIComponent(
      `Name: ${nameValue}\nEmail: ${emailValue}\n\nMessage:\n${messageValue}`,
    )}`;

    // success message
    alert("✅ Your message has been sent successfully!");

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
    // If all inputs are valid, you can proceed with form submission or further processing
    console.log("Form submitted successfully!");
    // You can also reset the form if needed
    contactForm.reset();
  }
});
