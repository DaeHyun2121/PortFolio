// sidenav
function openNav() {
  document.getElementById("Sidenav").style.width = "100%";
  document.getElementById("layout").style.marginLeft = "350px";
  document.getElementById("layout").style.transition = "0.4s";
}

function closeNav() {
  document.getElementById("Sidenav").style.width = "0%";
  document.getElementById("layout").style.marginLeft = "0px";
  document.getElementById("layout").style.transition = "0.4s";
}

// slide
jQuery(document).ready(function ($) {
  var slideCount = $("#slider ul li").length;
  var slideWidth = $("#slider ul li > img").width();
  var slideHeight = (document.getElementById("li").style.height = "700px");
  var sliderUlWidth = slideCount * slideWidth;

  $("#slider").css({ width: slideWidth, height: slideHeight });

  $("#slider ul").css({
    width: sliderUlWidth,
    marginLeft: -slideWidth,
  });

  $("#slider ul li:last-child").prependTo("#slider ul");

  function moveLeft() {
    $("#slider ul").animate(
      {
        left: +slideWidth,
      },
      300,
      function () {
        $("#slider ul li:last-child").prependTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }

  function moveRight() {
    $("#slider ul").animate(
      {
        left: -slideWidth,
      },
      300,
      function () {
        $("#slider ul li:first-child").appendTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }

  $("a.control_prev").click(function () {
    moveLeft();
  });

  $("a.control_next").click(function () {
    moveRight();
  });
});

// circle progress
