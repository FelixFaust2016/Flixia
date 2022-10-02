const hamburger = document.getElementById("hamburger");
const buttonContainer = document.querySelector(".navigation_btn_container");

const toggleLogin = document.querySelector("#login_btn");
const toggleRegister = document.querySelector("#register_btn");
const backDrop = document.querySelector(".backdrop");
const loginModal = document.querySelector(".login_modal");
const registerModal = document.querySelector(".register_modal");
const closeModalLogin = document.querySelectorAll(".close_btn");

hamburger.addEventListener("click", () => {
  buttonContainer.classList.toggle("navigation_btn_container_display");
});

toggleLogin.addEventListener("click", () => {
  backDrop.classList.toggle("show");
  loginModal.classList.toggle("show");
});

toggleRegister.addEventListener("click", () => {
  backDrop.classList.toggle("show");
  registerModal.classList.toggle("show");
});

closeModalLogin.forEach((closeModalLogin) => {
  closeModalLogin.addEventListener("click", () => {
    backDrop.classList.remove("show");
    loginModal.classList.remove("show");
    registerModal.classList.remove("show");
  });
});

backDrop.addEventListener("click", () => {
  backDrop.classList.remove("show");
  loginModal.classList.remove("show");
  registerModal.classList.remove("show");
});
