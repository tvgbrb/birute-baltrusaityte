$( document ).ready( function() {
    var current_page = $( "#current-page" );
    var text_content = $( current_page ).text();
    
    $( current_page ).text( text_content.length > 35 ? text_content.substr( 0, 32 ) + "..." : text_content );
    
    $( ".load-page" ).click( function( e ) {
        if ( e.target.textContent == "Biografija" ) {
            window.location.replace( "./index.html" );
        } else {
            window.location.replace( "./" + e.target.textContent.toLowerCase() + ".html" );
        }
    } );
} );