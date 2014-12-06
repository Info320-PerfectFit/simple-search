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
        search( 'easy beginner weight strength workouts', $( "#linkResults " ), $( ".template.result" ) );
        $('.img-circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('h2.prompt').addClass('firstPrompt');
        $('div.container').addClass('afterHeight');
        $('div.imgTitle').removeClass('showName');
        $('div#workout1').addClass('showName');
        $('.sectionResults').removeClass('showSection');
        $('div#strengthResults').addClass('showSection');
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
        $('a#tab1').click(function() {
            $('div.result').removeClass('filter');
        });
        $('a#tab2').click(function() {
            $('div.result').addClass('filter');
            $('.arms').removeClass('filter');
        });
        $('a#tab3').click(function() {
            $('div.result').addClass('filter');
            $('.legs').removeClass('filter');
        });
        $('a#tab4').click(function() {
            $('div.result').addClass('filter');
            $('.core').removeClass('filter');
        });
        if (!$('li').first().hasClass('active')) {
            $('.opt').removeClass('active');
            $('li').first().addClass('active');
        }
    });
    $('#stretch').click(function() {
        search( 'easy beginner stretch workouts', $( "#linkResults " ), $( ".template.result" ) );
        $('.img-circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('h2.prompt').addClass('firstPrompt');
        $('div.container').addClass('afterHeight');
        $('div.imgTitle').removeClass('showName');
        $('div#workout2').addClass('showName');
        $('.sectionResults').removeClass('showSection');
        $('div#stretchResults').addClass('showSection');
        $('img.img-circle').hover(
            function() {
                $(this).addClass('change-hover');
                $(this).next().addClass('showName');
            }, function() {
                $(this).removeClass('change-hover');
                $(this).next().removeClass('showName');
        });
        $('a#tab2').text('Upper Body');
        $('a#tab3').text('Core');
        $('a#tab4').text('Lower Body');
        $('a#tab1').click(function() {
            $('div.result').removeClass('filter');
        });
        $('a#tab2').click(function() {
            $('div.result').addClass('filter');
            $('.upper').removeClass('filter');
        });
        $('a#tab3').click(function() {
            $('div.result').addClass('filter');
            $('.mid').removeClass('filter');
        });
        $('a#tab4').click(function() {
            $('div.result').addClass('filter');
            $('.lower').removeClass('filter');
        });
        if (!$('li').first().hasClass('active')) {
	    	$('.opt').removeClass('active');
	    	$('li').first().addClass('active');
        }
    });
    $('#cardio').click(function() {
        search( 'easy beginner stretch workouts', $( "#linkResults " ), $( ".template.result" ) );
        $('.img-circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('h2.prompt').addClass('firstPrompt');
        $('div.container').addClass('afterHeight');
        $('div.imgTitle').removeClass('showName');
        $('div#workout3').addClass('showName');
        $('.sectionResults').removeClass('showSection');
        $('div#cardioResults').addClass('showSection');
        $('img.img-circle').hover(
            function() {
                $(this).addClass('change-hover');
                $(this).next().addClass('showName');
            }, function() {
                $(this).removeClass('change-hover');
                $(this).next().removeClass('showName');
        });
        $('a#tab2').text('At Home');
        $('a#tab3').text('In The Gym');
        $('a#tab4').text('Outdoors');
        $('a#tab1').click(function() {
            $('div.result').removeClass('filter');
        });
        $('a#tab2').click(function() {
            $('div.result').addClass('filter');
            $('.home').removeClass('filter');
        });
        $('a#tab3').click(function() {
            $('div.result').addClass('filter');
            $('.gym').removeClass('filter');
        });
        $('a#tab4').click(function() {
            $('div.result').addClass('filter');
            $('.out').removeClass('filter');
        });
        if (!$('li').first().hasClass('active')) {
	    	$('.opt').removeClass('active');
	    	$('li').first().addClass('active');
        }  
    });
    $('#quick').click(function() {
        search( 'easy beginner stretch workouts', $( "#linkResults " ), $( ".template.result" ) );
        $('.img-circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('h2.prompt').addClass('firstPrompt');
        $('div.container').addClass('afterHeight');
        $('div.imgTitle').removeClass('showName');
        $('div#workout4').addClass('showName');
        $('.sectionResults').removeClass('showSection');
        $('div#quickResults').addClass('showSection');
        $('img.img-circle').hover(
            function() {
                $(this).addClass('change-hover');
                $(this).next().addClass('showName');
            }, function() {
                $(this).removeClass('change-hover');
                $(this).next().removeClass('showName');
        });
        $('a#tab2').text('5-10 Min');
        $('a#tab3').text('10-15 Min');
        $('a#tab4').text('15-30 Min');
        $('a#tab1').click(function() {
            $('div.result').removeClass('filter');
        });
        $('a#tab2').click(function() {
            $('div.result').addClass('filter');
            $('.short').removeClass('filter');
        });
        $('a#tab3').click(function() {
            $('div.result').addClass('filter');
            $('.middle').removeClass('filter');
        });
        $('a#tab4').click(function() {
            $('div.result').addClass('filter');
            $('.long').removeClass('filter');
        });
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