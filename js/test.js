$(document).ready(function(){
    $('#strength').click(function() {
        $('.img-circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('h3.prompt').addClass('firstPrompt');
        $('img.img-circle').hover(
            function() {
                $(this).addClass('change-hover');
            }, function() {
                $(this).removeClass('change-hover');
        });
        $('a#tab2').text('Arms');
        $('a#tab3').text('Legs');
        $('a#tab4').text('Core');
        if (!$('li').first().hasClass('active')) {
	    	$('.opt').removeClass('active');
	    	$('li').first().addClass('active');
        }
    });
    $('#stretch').click(function() {
        $('.img-circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('h3.prompt').addClass('firstPrompt');
                $('img.img-circle').hover(
            function() {
                $(this).addClass('change-hover');
            }, function() {
                $(this).removeClass('change-hover');
        });
        $('a#tab2').text('Upper Body');
        $('a#tab3').text('Core');
        $('a#tab4').text('Lower Body');
        if (!$('li').first().hasClass('active')) {
	    	$('.opt').removeClass('active');
	    	$('li').first().addClass('active');
        }
    });
    $('#cardio').click(function() {
        $('.img-circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('h3.prompt').addClass('firstPrompt');
                $('img.img-circle').hover(
            function() {
                $(this).addClass('change-hover');
            }, function() {
                $(this).removeClass('change-hover');
        });
        $('a#tab2').text('At Home');
        $('a#tab3').text('In The Gym');
        $('a#tab4').text('Outdoors');
        if (!$('li').first().hasClass('active')) {
	    	$('.opt').removeClass('active');
	    	$('li').first().addClass('active');
        }  
    });
    $('#quick').click(function() {
        $('.img-circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('h3.prompt').addClass('firstPrompt');
                $('img.img-circle').hover(
            function() {
                $(this).addClass('change-hover');
            }, function() {
                $(this).removeClass('change-hover');
        });
        $('a#tab2').text('5-10 Min');
        $('a#tab3').text('10-15 Min');
        $('a#tab4').text('15-30 Min');
        if (!$('li').first().hasClass('active')) {
	    	$('.opt').removeClass('active');
	    	$('li').first().addClass('active');
        }   
    });
    $('.opt').click(function() {
    	$('.opt').removeClass('active');
    	$(this).addClass('active');
    });
});