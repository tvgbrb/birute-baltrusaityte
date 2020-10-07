items = [
    {
        src:    "./files/img/birute1.jpg",
        w:      300,
        h:      410
    },
    {
        src:    "./files/img/birute2.jpg",
        w:      297,
        h:      286
    },
    {
        src:    "./files/img/birute3.jpg",
        w:      508,
        h:      796
    },
    {
        src:    "./files/img/birute4.jpg",
        w:      750,
        h:      596
    },
    {
        src:    "./files/img/birute5.jpg",
        w:      550,
        h:      351
    },
    {
        src:    "./files/img/birute6.jpg",
        w:      550,
        h:      437
    }
];

$( document ).ready( function() {
	var items = $( ".img-container" ).toArray();

	for ( var i = 0; i < items.length; ++i ) {
		( function( index ) {
			$( items[ i ] ).click( function() { init_gallery( index ); } );
		} )( i );
	}
} );

function init_gallery( id ) {
    var pswpElement = document.querySelectorAll( ".pswp" )[ 0 ];
    var options     = {
        index:              id,
        showHideOpacity:    true,
        bgOpacity:          .9,
        shareButtons:       [ { id: "download" , label: "Atsisiųsti nuotrauką", url: "{{raw_image_url}}", download: true } ]
    };
    var gallery     = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options );
    
    gallery.init();
}