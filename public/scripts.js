$(function() {

  $.ajax({
    url: '/balance',
    type: 'GET'

  }).done(function(response) {
    $('#bal').text(response);
  })

})
