$item = $(".portfolio-nav");

$item.click(function () {
  $activeNav = $(".active.portfolio-nav");
  $activeItems = $(".active.portfolio__items");
  $disabledItems = $(".disabled.portfolio__items");
  // $items = $('.portfolio__items');
  $activeNav.removeClass("active");
  $(this).addClass("active");

  $activeItems.removeClass("active");
  $activeItems.addClass("disabled");

  $disabledItems.removeClass("disabled");
  $disabledItems.addClass("active");
});

$(".slider").slick();

// scroll
$(".header__btn").on("click", function () {
  let business = $(".business");

  $("html, body").animate(
    {
      scrollTop: $(business).offset().top
    },
    {
      duration: 450, // по умолчанию «400»
      easing: "linear" // по умолчанию «swing»
    }
  );

  return false;
});
