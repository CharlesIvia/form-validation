//Fetch dom elements and set variables
const form = document.getElementById("form"),
  username = document.getElementById("username"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  passwordTwo = document.getElementById("password2");

//Show input error message

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = "message";
}

//Show success outline

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//Check if email is valid using regex

function checkEmail(input) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

//Check required fields

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

