var answer_overlay = ".answer-overlay";
var answer_box;

$( document ).ready( function() {
	$( ".question" ).click( function( e ) {
        answer_box = $( e.target ).siblings()[ 0 ];
        show_answer_box();
    } );
    $( "label.container" ).click( function() { hide_answer_box(); } );
    $( "#check-ans" ).click( function() { evaluate_answers(); } );
    $( "#show-ans" ).click( function() { show_answers(); } );
} );

function show_answer_box() {
	$( answer_overlay ).fadeIn( 500 );
	$( answer_box ).stop().animate( { bottom: "0" }, 500 );
	$( answer_overlay ).click( hide_answer_box );
}

function hide_answer_box() {
	if ( !( $( answer_overlay ).is( ":animated" ) ) ) {
		$( answer_overlay ).fadeOut( 500 );
		$( answer_box ).stop().animate( { bottom: "-150px" }, 500 );
	}
}

function evaluate_answers() {
    var questions           = $( ".question" ).toArray();
    var checked_answers     = $( "input:checked ~ .ans" ).toArray();
    
    if ( questions.length != checked_answers.length ) {
        var question_boxes = $( ".quiz-row > div" );
        
        for ( var i = 0; question_boxes.length != i; ++i ) {
            var labels      = $( $( question_boxes[ i ] ).children()[ 1 ] ).children();
            var has_checked = false;
            
            for ( var j = 0; labels.length != j; ++j ) {
                if ( $( $( labels[ j ] ).children()[ 0 ] ).is( ":checked" ) ) {
                    has_checked = true;
                    
                    break;
                }
            }
            
            if ( !has_checked ) {
                $( $( question_boxes[ i ] ).children()[ 0 ] ).addClass( "unchecked-answer" );
            } else {
                $( $( question_boxes[ i ] ).children()[ 0 ] ).removeClass( "unchecked-answer" );
            }
        }
        
        show_notification( "Pirma privalote atsakyti į visus klausimus.", 4 );
        
        return;
    }
    
    var correct_answers = 0;
    
    for ( var i = 0; checked_answers.length != i; ++i ) {
        if ( $( checked_answers[ i ] ).attr( "class" ).includes( "correct" ) ) {
            $( $( checked_answers[ i ] ).parent().parent().siblings()[ 0 ] ).addClass( "correct-answer" );
            ++correct_answers;
        } else {
            $( $( checked_answers[ i ] ).parent().parent().siblings()[ 0 ] ).addClass( "incorrect-answer" );
        }
    }
    
    show_notification( "Teisingai atsakėte į " + correct_answers + " iš " + questions.length + " klausimų (" + ( correct_answers / questions.length * 100 ) + "%).", 10 );
}

function show_notification( message, hold_time ) {
    $( $( "#notification" ).children()[ 0 ] ).text( message );
    setTimeout( function() {
        $( "#notification" ).fadeIn();
        $( "#notification" ).stop().animate( {
            top:        "1em",
            opacity:    "0.95"
        }, 500 );
    }, 250 );
    setTimeout( function() {
		$( "#notification" ).stop().animate( {
			top:        "-200px",
			opacity:    "0"
		}, 500 );
    }, hold_time * 1000 );
}

function show_answers() {
    var answers         = $( ".correct" );
    var modal_content   = "<ol>";
    modal_body          = ".question-answers";
    
    for ( var i = 0; answers.length != i; ++i ) {
        modal_content += "<li>" + answers[ i ].textContent + "</li>";
    }
    
    modal_content += "</ol>";
    
    $( ".question-answers > .modal-content" ).empty();
    $( ".question-answers > .modal-content" ).append( modal_content );
    
    show_modal();
}