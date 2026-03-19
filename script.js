const menuBtns = document.querySelectorAll(".menu-button");
const sidebar = document.querySelector(".sidebars");

if (menuBtns.length && sidebars) {
  menuBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  });
}
