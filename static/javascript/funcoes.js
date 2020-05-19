// Função para deixar o menu mobile //
document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
// fim da função do menu




const menuItems = document.querySelectorAll('a[href^="#"]');

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
     window.scroll({
        top: to,
        behavior: "smooth",
     })
  smoothScrollTo(800, to);
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.currentTarget)- 20;
    scrollToPosition(to);
}

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});

function hideMenuMobile(event){
    var navBar = document.getElementsByClassName("navbar-menu");
    for (var navB of navBar) {
        navB.classList.remove("is-active");
    }
}

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', hideMenuMobile)
});