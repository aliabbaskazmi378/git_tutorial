$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      $("#back-to-top").fadeIn(800);
    } else {
      $("#back-to-top").fadeOut(800);
    }
  });

  $("#back-to-top").click(function (event) {
    event.preventDefault();

    $("html, body").animate({ scrollTop: 0 }, 800);
  });
});
