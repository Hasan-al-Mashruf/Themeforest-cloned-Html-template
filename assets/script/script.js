const mobileMenu = document.querySelector(".mobile-menu");

function showHideMenu() {
  const abc = mobileMenu.getAttribute("class");
  if (abc.includes("left-[-100%]")) {
    mobileMenu.setAttribute(
      "class",
      "fixed left-0 top-0 w-2/5 h-screen z-50 bg-primary text-white p-3 mobile-menu"
    );
    mobileMenu.classList.add("dark");
  } else {
    mobileMenu.setAttribute(
      "class",
      "fixed left-[-100%] top-0 w-2/5 h-screen z-50 bg-primary text-white p-3 mobile-menu"
    );
  }
}
