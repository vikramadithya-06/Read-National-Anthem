const menuBtns = document.querySelectorAll(".menu-btn");
const sidebar = document.querySelector(".sidebar");

if (menuBtns.length && sidebar) {
  menuBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  });
}
