const timeToHideAll = 500;
const timeToShowLogin = 400;
const timeToHideLogin = 200;
const timeToShowSignUp = 100;
const timeToHideSignUp = 400;

function change_to_login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
  document.querySelector('.cont_form_login').style.display = "block";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";

  setTimeout(() => {
    document.querySelector('.cont_form_login').style.opacity = "1";
  }, timeToShowLogin);

  setTimeout(() => {
    document.querySelector('.cont_form_sign_up').style.display = "none";
  }, timeToHideLogin);
}

function change_to_sign_up() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(() => {
    document.querySelector('.cont_form_sign_up').style.opacity = "1";
  }, timeToShowSignUp);

  setTimeout(() => {
    document.querySelector('.cont_form_login').style.display = "none";
  }, timeToHideSignUp);
}

function hidden_login_and_sign_up() {
  document.querySelector('.cont_forms').className = "cont_forms";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(() => {
    document.querySelector('.cont_form_sign_up').style.display = "none";
    document.querySelector('.cont_form_login').style.display = "none";
  }, timeToHideAll);
}

function verif() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "") {
    alert("Please write your email");
    return false;
  } else if (!validateEmail(email)) {
    alert("Invalid email address");
    return false;
  } else if (password === "") {
    alert("Please write your password");
    return false;
  } else if (password.length !== 8) {
    alert("Password length must be 8 characters");
    return false;
  } else if (password.indexOf(" ") !== -1) {
    alert("Spaces are prohibited in password");
    return false;
  }
  return true;
}

function verif1() {
  const email = document.getElementById("email1").value;
  const user = document.getElementById("user").value;
  const password = document.getElementById("password1").value;
  const confirm = document.getElementById("confirm").value;

  if (email === "") {
    alert("Please write your email");
    return false;
  } else if (!validateEmail(email)) {
    alert("Invalid email address");
    return false;
  } else if (user === "") {
    alert("Please write your username");
    return false;
  } else if (password === "") {
    alert("Please write your password");
    return false;
  } else if (password.length !== 8) {
    alert("Password length must be 8 characters");
    return false;
  } else if (password.indexOf(" ") !== -1) {
    alert("Spaces are prohibited in password");
    return false;
  } else if (password !== confirm) {
    alert("Passwords do not match");
    return false;
  }
  return true;
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

