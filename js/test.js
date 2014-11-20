$(document).ready(function(){
    $('#strength').click(function() {
        $('.img-circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('a#tab1').text('Arms');
        $('a#tab2').text('Legs');
        $('a#tab3').text('Core');
    });
    $('#stretch').click(function() {
        $('.img-circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('a#tab1').text('Upper Body');
        $('a#tab2').text('Core');
        $('a#tab3').text('Lower Body');
    });
    $('#cardio').click(function() {
        $('.img-circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('a#tab1').text('At Home');
        $('a#tab2').text('In The Gym');
        $('a#tab3').text('Outdoors');
    });
    $('#quick').click(function() {
        $('.img-circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('a#tab1').text('5-10 Min');
        $('a#tab2').text('10-15 Min');
        $('a#tab3').text('15-30 Min');
    });


});

function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}