const form = document.querySelector("#form");

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const showError = (element, text) => {
  const parentElement = element.closest(".input-field");
  const errorElement = parentElement.querySelector("span");
  element.classList.add("input-field__input--error");

  errorElement.innerHTML = text;
};

const hideError = (element) => {
  const parentElement = element.closest(".input-field");
  const errorElement = parentElement.querySelector("span");
  element.classList.remove("input-field__input--error");

  errorElement.innerHTML = "";
};

email.addEventListener("blur", function (event) {
  const emailInput = event.target;
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    showError(emailInput, "Email is required.");
  } else if (!emailRegex.test(email)) {
    showError(emailInput, "Invalid email address.");
  } else {
    hideError(emailInput);
  }

  if (email) {
    emailInput.nextElementSibling.classList.add("input-field__filled");
  }
});

password.addEventListener("blur", function (event) {
  const passwordInput = event.target;
  const password = passwordInput.value.trim();
  if (password === "") {
    showError(passwordInput, "Password is required.");
  } else if (password.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters.");
  } else {
    hideError(passwordInput);
  }

  if (password) {
    passwordInput.nextElementSibling.classList.add("input-field__filled");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = form.querySelector('[name="email"]');
  const passwordInput = form.querySelector('[name="password"]');
  const rememberChb = form.querySelector('[name="remember"]');

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const isRemembered = !!rememberChb.checked;

  event.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    showError(emailInput, "Email is required.");
  } else if (!emailRegex.test(email)) {
    showError(emailInput, "Invalid email address.");
  } else {
    hideError(emailInput);
  }

  if (password === "") {
    showError(passwordInput, "Password is required.");
  } else if (password.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters.");
  } else {
    hideError(passwordInput);
  }

  if (emailRegex.test(email) && password.length >= 6) {
    console.log({
      email,
      password,
      isRemembered,
    });
  }
});
