// Reference to dom elements
const emailInput = document.getElementById('email');
const errorElement = document.getElementById('errorText');
const formButton = document.getElementById('submitBtn');

formButton.addEventListener('click', function (event) {
  event.preventDefault();

  // email regex
  const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  // evaluate email pattern 
  if (!emailInput.value.match(emailRegEx) || emailInput.value === "") {
    // set input border color and display error message
    emailInput.style.borderColor = "#ff5263"
    errorElement.innerHTML = "Please provide a valid email address";
  } else {
    emailInput.style.borderColor = "#ddd";
    errorElement.innerHTML = "";
  }
  // reset input value
  emailInput.value = "";
});
