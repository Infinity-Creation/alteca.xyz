const mobileLinks = document.getElementById("mobile-links");
const sandWichMenu = document.getElementById("sandwich");

function toggleSandwichMenu() {
    if (mobileLinks.style.display === "flex") {
      mobileLinks.style.display = "none";
    } else {
      mobileLinks.style.display = "flex";
      mobileLinks.style.flexDirection = "column";
      mobileLinks.style.alignItems = "flex-end";
    }
}


/ Hide the mobile-navbar on window resize /
addEventListener("resize", (event) => {
  if (window.innerWidth > 767) {
    mobileLinks.style.display = "none";
  } else {

  }
});