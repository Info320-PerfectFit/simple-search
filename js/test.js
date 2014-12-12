$(document).ready(function(){
    $('#strength').click(function() {
        search( 'weights', $( "#linkResults " ), $( ".template.result" ) );
        $('.thirdPrompt').removeClass('showThird');
        $('.secondPrompt').addClass('showSecond');
        $('.circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('h2.prompt').addClass('firstPrompt');
        $('div.container').addClass('changeHeight');
        $('.imgTitle').removeClass('keepName');
        $('div#workout1').addClass('keepName');
        $('.sectionResults').removeClass('showSection');
        $('div#strengthResults').addClass('showSection');
        $('div.resultV').removeClass('filter');
        $('#videoResults div.resultV:nth-child(n+6)').addClass('limit');
        $('a#tab2').text('Arms');
        $('a#tab3').text('Legs');
        $('a#tab4').text('Core');
        $('a#tab1').click(function() {
            search( 'weights', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').removeClass('filter');
            $('.secondPrompt').removeClass('showSecond');
            $('.thirdPrompt').addClass('showThird');
            $('#videoResults div.resultV:nth-child(n+6)').addClass('limit');
        });
        $('a#tab2').click(function() {
            search( 'arm', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.arms').removeClass('filter');
            $('.secondPrompt').removeClass('showSecond');
            $('.thirdPrompt').addClass('showThird');
            $('#videoResults div.resultV:nth-child(n+6)').removeClass('limit');
        });
        $('a#tab3').click(function() {
            search( 'leg', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.legs').removeClass('filter');
            $('.secondPrompt').removeClass('showSecond');
            $('.thirdPrompt').addClass('showThird');
            $('#videoResults div.resultV:nth-child(n+6)').removeClass('limit');
        });
        $('a#tab4').click(function() {
            search( 'core', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.core').removeClass('filter');
            $('.secondPrompt').removeClass('showSecond');
            $('.thirdPrompt').addClass('showThird');
            $('#videoResults div.resultV:nth-child(n+6)').removeClass('limit');
        });
        if (!$('li').first().hasClass('active')) {
            $('.opt').removeClass('active');
            $('li').first().addClass('active');
        }
    });
    $('#stretch').click(function() {
        search( 'stretch', $( "#linkResults" ), $( ".template.result" ) );
        $('.thirdPrompt').removeClass('showThird');
        $('.secondPrompt').addClass('showSecond');
        $('.circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('h2.prompt').addClass('firstPrompt');
        $('div.container').addClass('changeHeight');
        $('div.imgTitle').removeClass('keepName');
        $('div#workout2').addClass('keepName');
        $('.sectionResults').removeClass('showSection');
        $('div#stretchResults').addClass('showSection');
        $('div.resultV').removeClass('filter');
        $('#videoResults div.resultV:nth-child(n+6)').addClass('limit');
        $('a#tab2').text('Upper Body');
        $('a#tab3').text('Core');
        $('a#tab4').text('Lower Body');
        $('a#tab1').click(function() {
            search( 'stretch', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').removeClass('filter');
            $('.secondPrompt').removeClass('showSecond');
            $('.thirdPrompt').addClass('showThird');
            $('#videoResults div.resultV:nth-child(n+6)').addClass('limit');
        });
        $('a#tab2').click(function() {
            search( 'upper', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.upper').removeClass('filter');
            $('.secondPrompt').removeClass('showSecond');
            $('.thirdPrompt').addClass('showThird');
            $('#videoResults div.resultV:nth-child(n+6)').removeClass('limit');
        });
        $('a#tab3').click(function() {
            search( 'core', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.mid').removeClass('filter');
            $('.secondPrompt').removeClass('showSecond');
            $('.thirdPrompt').addClass('showThird');
            $('#videoResults div.resultV:nth-child(n+6)').removeClass('limit');
        });
        $('a#tab4').click(function() {
            search( 'lower', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.lower').removeClass('filter');
            $('.secondPrompt').removeClass('showSecond');
            $('.thirdPrompt').addClass('showThird');
            $('#videoResults div.resultV:nth-child(n+6)').removeClass('limit');
        });
        if (!$('li').first().hasClass('active')) {
	    	$('.opt').removeClass('active');
	    	$('li').first().addClass('active');
        }
    });
    $('#cardio').click(function() {
        search( 'cardio', $( "#linkResults " ), $( ".template.result" ) );
        $('.thirdPrompt').removeClass('showThird');
        $('.secondPrompt').addClass('showSecond');
        $('.circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('h2.prompt').addClass('firstPrompt');
        $('div.container').addClass('changeHeight');
        $('div.imgTitle').removeClass('keepName');
        $('div#workout3').addClass('keepName');
        $('.sectionResults').removeClass('showSection');
        $('div#cardioResults').addClass('showSection');
        $('div.resultV').removeClass('filter');
        $('#videoResults div.resultV:nth-child(n+6)').addClass('limit');
        $('a#tab2').text('At Home');
        $('a#tab3').text('In The Gym');
        $('a#tab4').text('Outdoors');
        $('a#tab1').click(function() {
            search( 'cardio', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').removeClass('filter');
            $('.secondPrompt').removeClass('showSecond');
            $('.thirdPrompt').addClass('showThird');
            $('#videoResults div.resultV:nth-child(n+6)').addClass('limit');
        });
        $('a#tab2').click(function() {
            search( 'home', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.home').removeClass('filter');
            $('.secondPrompt').removeClass('showSecond');
            $('.thirdPrompt').addClass('showThird');
            $('#videoResults div.resultV:nth-child(n+6)').removeClass('limit');
        });
        $('a#tab3').click(function() {
            search( 'gym', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.gym').removeClass('filter');
            $('.secondPrompt').removeClass('showSecond');
            $('.thirdPrompt').addClass('showThird');
            $('#videoResults div.resultV:nth-child(n+6)').removeClass('limit');
        });
        $('a#tab4').click(function() {
            search( 'out', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.out').removeClass('filter');
            $('.secondPrompt').removeClass('showSecond');
            $('.thirdPrompt').addClass('showThird');
            $('#videoResults div.resultV:nth-child(n+6)').removeClass('limit');
        });
        if (!$('li').first().hasClass('active')) {
	    	$('.opt').removeClass('active');
	    	$('li').first().addClass('active');
        }  
    });
    $('#quick').click(function() {
        search( 'quick', $( "#linkResults " ), $( ".template.result" ) );
        $('.thirdPrompt').removeClass('showThird');
        $('.secondPrompt').addClass('showSecond');
        $('.circle').addClass('move-button');
        $('#results').removeClass('hideme');
        $('h2.prompt').addClass('firstPrompt');
        $('div.container').addClass('changeHeight');
        $('div.imgTitle').removeClass('keepName');
        $('div#workout4').addClass('keepName');
        $('.sectionResults').removeClass('showSection');
        $('div#quickResults').addClass('showSection');
        $('div.resultV').removeClass('filter');
        $('#videoResults div.resultV:nth-child(n+6)').addClass('limit');
        $('a#tab2').text('5-10 Min');
        $('a#tab3').text('10-15 Min');
        $('a#tab4').text('15-30 Min');
        $('a#tab1').click(function() {
            search( 'quick', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').removeClass('filter');
            $('.secondPrompt').removeClass('showSecond');
            $('.thirdPrompt').addClass('showThird');
            $('#videoResults div.resultV:nth-child(n+6)').addClass('limit');
        });
        $('a#tab2').click(function() {
            search( 'intense', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.short').removeClass('filter');
            $('.secondPrompt').removeClass('showSecond');
            $('.thirdPrompt').addClass('showThird');
            $('#videoResults div.resultV:nth-child(n+6)').removeClass('limit');
        });
        $('a#tab3').click(function() {
            search( 'sprint', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.middle').removeClass('filter');
            $('.secondPrompt').removeClass('showSecond');
            $('.thirdPrompt').addClass('showThird');
            $('#videoResults div.resultV:nth-child(n+6)').removeClass('limit');
        });
        $('a#tab4').click(function() {
            search( 'endurance', $( "#linkResults " ), $( ".template.result" ) );
            $('div.resultV').addClass('filter');
            $('.long').removeClass('filter');
            $('.secondPrompt').removeClass('showSecond');
            $('.thirdPrompt').addClass('showThird');
            $('#videoResults div.resultV:nth-child(n+6)').removeClass('limit');
        });
        if (!$('li').first().hasClass('active')) {
	    	$('.opt').removeClass('active');
	    	$('li').first().addClass('active');
        }   
    });
    $(".opt").click(function() {
    	$('.opt').removeClass('active');
    	$(this).addClass('active');
    });
});