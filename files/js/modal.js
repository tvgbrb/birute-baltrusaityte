var modal_overlay = "#modal-overlay";
var modal_body;

$( document ).ready( function() {
	$( ".trigger-modal" ).click( function( e ) {
        var class_list  = $( e.target ).attr( "class" ).split( /\s+/ );
        modal_body      = ".modal-" + class_list[ 1 ];
        show_modal();
    } );
    $( ".trigger-page-sel-modal" ).click( function() {
        modal_body = ".page-sel-modal";
        show_modal();
    } );
} );

function show_modal() {    
	$( modal_body ).fadeIn();
	$( modal_overlay ).fadeIn( 500 );
	$( modal_body ).stop().animate( {
		top:        "50%",
		opacity:    "1"
	}, 500 );
	$( modal_overlay ).click( function() { hide_modal(); } );
}

function hide_modal() {
	if ( !( $( modal_overlay ).is( ":animated" ) ) ) {
		$( modal_overlay ).fadeOut( 500 );
		$( modal_body ).stop().animate( {
			top:        "0%",
			opacity:    "0"
		}, 500 );
		setTimeout( function() { $( modal_body ).hide(); }, 600 );
		$( modal_overlay ).fadeOut();
	}
}