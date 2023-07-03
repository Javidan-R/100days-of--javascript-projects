const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
document.getElementById("signUpForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateSignUpForm()) {
    return;
  }
  // Formu gönder
  e.target.submit();
});

document.getElementById("signInForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateSignInForm()) {
    return;
  }
  // Formu gönder
  e.target.submit();
});

function validateSignUpForm() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  if (nameInput.value.trim() === "") {
    showError("Name is required");
    return false;
  }
  if (emailInput.value.trim() === "") {
    showError("Email is required");
    return false;
  }
  if (passwordInput.value.trim() === "") {
    showError("Password is required");
    return false;
  }

  return true;
}

function validateSignInForm() {
  const signInEmailInput = document.getElementById("signInEmail");
  const signInPasswordInput = document.getElementById("signInPassword");

  if (signInEmailInput.value.trim() === "") {
    showError("Email is required");
    return false;
  }
  if (signInPasswordInput.value.trim() === "") {
    showError("Password is required");
    return false;
  }

  return true;
}

function showError(message) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "error";
  errorDiv.textContent = message;

  const container = document.querySelector(".container");
  container.insertBefore(errorDiv, container.firstChild);

  setTimeout(() => {
    errorDiv.remove();
  }, 3000);
}