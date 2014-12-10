$(document).ready(function(){
    // $('img.circle').hover(
    //     function() {
    //         $(this).addClass('main-hover');
    //         $(this).next().addClass('showName');
    //     }, function() {
    //         $(this).removeClass('main-hover');
    //         $(this).next().removeClass('showName');
    // });
    $('#strength').click(function() {
        search( 'weights', $( "#linkResults " ), $( ".template.result" ) );
        $('.circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('h2.prompt').addClass('firstPrompt');
        $('div.container').addClass('afterHeight');
        $('.imgTitle').removeClass('keepName');
        $('div#workout1').addClass('keepName');
        $('.sectionResults').removeClass('showSection');
        $('div#strengthResults').addClass('showSection');
        $('div.result').removeClass('filter');
        // $('img.img-circle').hover(
        //     function() {
        //         $(this).addClass('change-hover');
        //         $(this).next().addClass('showName');
        //     }, function() {
        //         $(this).removeClass('change-hover');
        //         $(this).next().removeClass('showName');
        // });
        $('a#tab2').text('Arms');
        $('a#tab3').text('Legs');
        $('a#tab4').text('Core');
        $('a#tab1').click(function() {
            $('div.result').removeClass('filter');
        });
        $('a#tab2').click(function() {
            // search( 'arms', $( "#linkResults " ), $( ".template.result" ) );
            $('div.result').addClass('filter');
            $('.arms').removeClass('filter');
        });
        $('a#tab3').click(function() {
            // search( 'legs', $( "#linkResults " ), $( ".template.result" ) );
            $('div.result').addClass('filter');
            $('.legs').removeClass('filter');
        });
        $('a#tab4').click(function() {
            // search( 'core', $( "#linkResults " ), $( ".template.result" ) );
            $('div.result').addClass('filter');
            $('.core').removeClass('filter');
        });
        if (!$('li').first().hasClass('active')) {
            $('.opt').removeClass('active');
            $('li').first().addClass('active');
        }
    });
    $('#stretch').click(function() {
        search( 'stretch', $( "#linkResults" ), $( ".template.result" ) );
        $('.circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('h2.prompt').addClass('firstPrompt');
        $('div.container').addClass('afterHeight');
        $('div.imgTitle').removeClass('keepName');
        $('div#workout2').addClass('keepName');
        $('.sectionResults').removeClass('showSection');
        $('div#stretchResults').addClass('showSection');
        $('div.result').removeClass('filter');
        // $('img.img-circle').hover(
        //     function() {
        //         $(this).addClass('change-hover');
        //         $(this).next().addClass('showName');
        //     }, function() {
        //         $(this).removeClass('change-hover');
        //         $(this).next().removeClass('showName');
        // });
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
        search( 'cardio', $( "#linkResults " ), $( ".template.result" ) );
        $('.circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('h2.prompt').addClass('firstPrompt');
        $('div.container').addClass('afterHeight');
        $('div.imgTitle').removeClass('keepName');
        $('div#workout3').addClass('keepName');
        $('.sectionResults').removeClass('showSection');
        $('div#cardioResults').addClass('showSection');
        $('div.result').removeClass('filter');
        // $('img.img-circle').hover(
        //     function() {
        //         $(this).addClass('change-hover');
        //         $(this).next().addClass('showName');
        //     }, function() {
        //         $(this).removeClass('change-hover');
        //         $(this).next().removeClass('showName');
        // });
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
        search( 'quick', $( "#linkResults " ), $( ".template.result" ) );
        $('.circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('h2.prompt').addClass('firstPrompt');
        $('div.container').addClass('afterHeight');
        $('div.imgTitle').removeClass('keepName');
        $('div#workout4').addClass('keepName');
        $('.sectionResults').removeClass('showSection');
        $('div#quickResults').addClass('showSection');
        $('div.result').removeClass('filter');
        // $('img.img-circle').hover(
        //     function() {
        //         $(this).addClass('change-hover');
        //         $(this).next().addClass('showName');
        //     }, function() {
        //         $(this).removeClass('change-hover');
        //         $(this).next().removeClass('showName');
        // });
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