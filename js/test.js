$(document).ready(function(){
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
        $('div.resultV').removeClass('filter');
        $('a#tab2').text('Arms');
        $('a#tab3').text('Legs');
        $('a#tab4').text('Core');
        $('a#tab1').click(function() {
            search( 'weights', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').removeClass('filter');
        });
        $('a#tab2').click(function() {
            search( 'arms', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.arms').removeClass('filter');
        });
        $('a#tab3').click(function() {
            search( 'legs', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.legs').removeClass('filter');
        });
        $('a#tab4').click(function() {
            search( 'core', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
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
        $('div.resultV').removeClass('filter');
        $('a#tab2').text('Upper Body');
        $('a#tab3').text('Core');
        $('a#tab4').text('Lower Body');
        $('a#tab1').click(function() {
            search( 'stretch', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').removeClass('filter');
        });
        $('a#tab2').click(function() {
            search( 'yoga', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.upper').removeClass('filter');
        });
        $('a#tab3').click(function() {
            search( 'pilates', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.mid').removeClass('filter');
        });
        $('a#tab4').click(function() {
            search( 'vinyasa', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
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
        $('div.resultV').removeClass('filter');
        $('a#tab2').text('At Home');
        $('a#tab3').text('In The Gym');
        $('a#tab4').text('Outdoors');
        $('a#tab1').click(function() {
            search( 'cardio', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').removeClass('filter');
        });
        $('a#tab2').click(function() {
            search( 'dance', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.home').removeClass('filter');
        });
        $('a#tab3').click(function() {
            search( 'tredmill', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.gym').removeClass('filter');
        });
        $('a#tab4').click(function() {
            search( 'cycling', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
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
        $('div.resultV').removeClass('filter');
        $('a#tab2').text('5-10 Min');
        $('a#tab3').text('10-15 Min');
        $('a#tab4').text('15-30 Min');
        $('a#tab1').click(function() {
            search( 'quick', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').removeClass('filter');
        });
        $('a#tab2').click(function() {
            search( 'intense', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.short').removeClass('filter');
        });
        $('a#tab3').click(function() {
            search( 'sprint', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.middle').removeClass('filter');
        });
        $('a#tab4').click(function() {
            search( 'endurance', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
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