var $numbers = $('numbers');

$numbers.waypoint(function() {
  $numbers.addClass('js-numbers-animate');
  console.log('waypoint');
}, {offset: '30%'});
