var menu = $(".fullscreen");
var btn = $(".js-menu-button");

function toggleState(el) {
  if (el.hasClass("is-active")) {
    el.removeClass("is-active");
  } else {
    el.addClass("is-active");
  }
}

btn.click(function() {
  toggleState(menu);
  toggleState(btn);
});
