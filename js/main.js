var $numbers = $('.numbers');

var $numbersLeft = $('.numbers-left');
var $numbersRight = $('.numbers-right');

$numbers.waypoint(function() {
  $numbersLeft.addClass('js-numbers-animate');
  console.log('waypoint');
}, {offset: '30%'});

$('.click').localScroll();
