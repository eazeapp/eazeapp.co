$(function() {
  $('.Button.CallToAction').click(function() {
    $('html, body').animate({
      scrollTop: $('#newsletter').offset().top
    }, 1000);
  });
})();
