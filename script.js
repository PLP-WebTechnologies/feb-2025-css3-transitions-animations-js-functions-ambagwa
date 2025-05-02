const fullName = document.getElementById("fullname");
const age = document.getElementById("age");
const successMsg = document.querySelector(".success");
const userForm = document.getElementById("user-form");

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (fullName.value !== "" || age.value !== "") {
    localStorage.setItem("Name", fullName.value);
    localStorage.setItem("Age", age.value);
  }

  // Trigger animation by re-adding the class
  successMsg.classList.remove("show");
  void successMsg.offsetWidth; // force reflow to restart animation
  successMsg.classList.add("show");

  setTimeout(() => {
    successMsg.classList.remove("show");
  }, 3000);
});
//Pre-load data on page load
if (localStorage.getItem("Name") && localStorage.getItem("Age")) {
  fullName.value = localStorage.getItem("Name");
  age.value = localStorage.getItem("Age");
}
