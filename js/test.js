$(document).ready(function(){
    $('#strength').click(function() {
        $('.img-circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('#searchbox').addClass('move-searchbar');
    });
});