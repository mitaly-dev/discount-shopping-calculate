document.getElementById("login").addEventListener("click", function () {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  if (
    email.value.includes("@gmail.com") === true &&
    password.value === "secret"
  ) {
    window.location.href = "./shopping.html";
  } else {
    return alert("Please fill up your login information correctly");
  }
  email.value = "";
  password.value = "";
});
