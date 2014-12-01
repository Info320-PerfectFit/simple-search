$(document).ready(function(){
    $('img.img-circle').hover(
        function() {
            $(this).addClass('main-hover');
            $(this).next().addClass('showName');
        }, function() {
            $(this).removeClass('main-hover');
            $(this).next().removeClass('showName');
    });
    $('#strength').click(function() {
        search( 'beginner weight workouts', $( "#linkResults " ), $( ".template.result" ) );
        $('div#workout1').addClass('showName');
        $('.img-circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('h2.prompt').addClass('firstPrompt');
        $('div.container').addClass('afterHeight');
        $('img.img-circle').hover(
            function() {
                $(this).addClass('change-hover');
                $(this).next().addClass('showName');
            }, function() {
                $(this).removeClass('change-hover');
                $(this).next().removeClass('showName');
        });
        $('a#tab2').text('Arms');
        $('a#tab3').text('Legs');
        $('a#tab4').text('Core');
        $('a#tab2').click(function() {
            $('div.imgTitle').removeClass('showName');
            $('#workout2').addClass('showName');
            $('.misc').addClass('filter');
            $('.legs').addClass('filter');
            $('.core').addClass('filter');
            $('.arms').removeClass('filter');
        });
        $('a#tab3').click(function() {
            $('.misc').addClass('filter');
            $('.arms').addClass('filter');
            $('.core').addClass('filter');
            $('.legs').removeClass('filter');
        });
        $('a#tab4').click(function() {
            $('.misc').addClass('filter');
            $('.legs').addClass('filter');
            $('.arms').addClass('filter');
            $('.core').removeClass('filter');
        });
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