// TODO: temp
if (document.location.hash === "#pixel-perfect") {
  console.log(document.location.pathname);
  if (document.location.pathname === "/") {
    if (window.matchMedia("(min-width: 1200px)").matches) {
      document.body.style.background =
        'url("../img/preview/cat-energy-index-desktop.png") no-repeat 50% 0';
    } else if (window.matchMedia("(min-width: 768px)").matches) {
      document.body.style.background =
        'url("../img/preview/cat-energy-index-tablet.png") no-repeat 50% 0';
    } else {
      document.body.style.background =
        'url("../img/preview/cat-energy-index-mobile-menu.png") no-repeat 50% 0';
    }
  }

  if (document.location.pathname === "/catalog.html") {
    if (window.matchMedia("(min-width: 1200px)").matches) {
      document.body.style.background =
        'url("../img/preview/cat-energy-catalog-desktop.png") no-repeat 50% 0';
    } else if (window.matchMedia("(min-width: 768px)").matches) {
      document.body.style.background =
        'url("../img/preview/cat-energy-catalog-tablet.png") no-repeat 50% 0';
    } else {
      document.body.style.background =
        'url("../img/preview/cat-energy-catalog-mobile.png") no-repeat 50% 0';
    }
  }

  if (document.location.pathname === "/form.html") {
    if (window.matchMedia("(min-width: 1200px)").matches) {
      document.body.style.background =
        'url("../img/preview/cat-energy-form-desktop.png") no-repeat 50% 0';
    } else if (window.matchMedia("(min-width: 768px)").matches) {
      document.body.style.background =
        'url("../img/preview/cat-energy-form-tablet.png") no-repeat 50% 0';
    } else {
      document.body.style.background =
        'url("../img/preview/cat-energy-form-mobile.png") no-repeat 50% 0';
    }
  }
}
