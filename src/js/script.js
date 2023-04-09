const btn = document.querySelector(".header-page_burger-menu_btn"),
      menu = document.querySelector(".header-page_list");
const toggleBurgerMenu = () => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("_close");
        menu.classList.toggle("header-page_list_hidden");
      });
}
toggleBurgerMenu()