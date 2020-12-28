//Sticky Header
$(window).on("scroll load", function() {
    $(window).scrollTop() > $(".siteHeader").outerHeight()
      ? $(".siteHeader").addClass("sticky")
      : $(".siteHeader").removeClass("sticky");
  });
  // mobile menu js
  $(".mobileMenuTrigger").click(function() {
    $(".mobileMenuWrapperOuter").addClass("on");
    $("body").addClass("mobileMenuActive");
  });
  $(".mobileMenuCloseWrapper").click(function() {
    $(".mobileMenuWrapperOuter").removeClass("on");
    $("body").removeClass("mobileMenuActive");
  });