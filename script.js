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


