// Doc ready
$(function(){
    // Shortcut function that performs search with the correct parameters.
    // Can be called without any arguments inline 
    function simpleSearch() {
        search( $( "input#query" ).val(), $( "#linkResults " ), $( ".template.result" ) );
    };

    $( "button#search" ).click(function() {
        simpleSearch();
    });

    // Performs search when 'enter' key is pressed
    $( "input#query" ).keypress(function( event ) {
        if ( event.which == 13 ) simpleSearch();
    });
})

// Input: query string, results container, result HTML template
// Effect: makes an AJAX call to the server to get the results of the
// query, and then injects results into the DOM
// Output: void
function search(query, $container, $template){
    $.ajax({
        type: 'GET',
        url: 'http://is-info320t6.ischool.uw.edu:8080/solr-example/collection1/select',
        dataType: 'JSONP',
        data: {
            'q': query ,
            'qf': 'content title^3.0',
            'wt': 'json',
            'indent': 'false',
            'defType': 'edismax',
            'hl': 'true',
            'hl.fl': 'title content',
            'hl.simple.pre': "<em>",
            'hl.simple.post': "</em>",
            'stopwords' : "true",
            "ps": "4",
            "lowercaseOperators": "true"
        },
        jsonp: 'json.wrf',
        success: function (data) {
            constructSuggestions(data.spellcheck.suggestions);
            renderResults(data.response.docs, data.highlighting, $container, $template);
        }
    });
}

// Input: JSON array of results, results container, result HTML template
// Effect: Replaces results container with new results, and renders
// the appropriate HTML
// Output: void
function renderResults(docs, highlighting, $container, $template){
    $container.empty(); // If there are any previous results, remove them
    var result;
    $.each(docs, function(index, doc){
        result = $template.clone();
        result.find( ".title > a" )
            .prop( "href", doc.url)
            .find( "h3" )
            .append( doc.title );
        result.find( ".url" ).append( doc.url );
        result.find( ".content" ).append( highlighting[doc.url].content );
        result.removeClass( "template" );
        $container.append(result);
    });
}

// Cuts off lengthy content to a given maximum number of words
// Input: string of words, maximum number of words
// Effects: none
// Output: the trimmed words
function maxWords(content, max) {
    var words = content.split(' ', max);
    var idx;
    var cutContent = "";
    for (idx = 0; idx < words.length; idx++) {
    cutContent += words[idx];
    cutContent += (idx + 1 == words.length ? "" : " ");
    }
    return cutContent + "...";
}

function constructSuggestions(data) {
    if (data.length > 0) {
        $("#suggestions").show();
        var pString = "Did you mean:"
        console.log(data);
        $.each(data[1].suggestion, function(index, info) {
            console.log(info + ", " + info.suggestion);
            pString += " <span class=\"singleSuggestion\">" + info + "</span>";
        });
        pString += " ?"
        $("#suggestions").html(pString);
        $(".singleSuggestion").click(suggestionSearch);
        $(".singleSuggestion").mouseenter(function () {
            $(this).css("font-weight", "bold");
        });
        $(".singleSuggestion").mouseleave(function () {
            $(this).css("font-weight", "");
        });
    } else {
        $("#suggestions").hide();
    };
}

function suggestionSearch() {
    var html = $(this).html();
    $( "input#query" ).val(html)
    search( html, $( "#linkResults " ), $( ".template.result" ) )
}