const openMenu = () => {
  const menu = document.querySelector(".header-menu");
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    document.querySelector("header .material-symbols-outlined").innerHTML =
      "close";
  } else {
    document.querySelector("header .material-symbols-outlined").innerHTML =
      "menu";
  }
};

document.querySelectorAll(".skill").forEach((skill) => {
  skill.addEventListener("click", function () {
    const detailsBox = document.getElementById("details");
    detailsBox.textContent = this.getAttribute("data-detail");
    detailsBox.style.display = "block";
  });
});

