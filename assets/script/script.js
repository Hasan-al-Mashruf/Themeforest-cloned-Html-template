const mobileMenu = document.querySelector(".mobile-menu");

function showHideMenu() {
  const menuCheck = mobileMenu.getAttribute("class");
  if (menuCheck.includes("left-[-100%]")) {
    mobileMenu.setAttribute(
      "class",
      "fixed left-0 top-0 md:w-2/5 w-3/5 h-screen z-50 bg-primary text-white p-3 mobile-menu lg:hidden block"
    );
    mobileMenu.classList.add("dark");
    console.log("done");
  } else {
    mobileMenu.setAttribute(
      "class",
      "fixed left-[-100%] top-0 md:w-2/5 w-3/5 h-screen z-50 bg-primary text-white p-3 mobile-menu lg:hidden block"
    );
    console.log("not done");
  }
}
