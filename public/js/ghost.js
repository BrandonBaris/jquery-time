$(function(){
var ghost_can_talk = true;
var randomTime = Math.floor((Math.random()*12000)+4000);
window.onload = function() {
  ghost_chat("Ooooo very spooky.");
};

$( "#stfu_ghost" ).click(function() {
  if (ghost_can_talk === true){
    $( "#ghost_talk" ).hide("fast");
    document.getElementById("stfu_ghost").innerHTML = "Talk to me!";
    ghost_can_talk = false;
    return false;
  } 
  if (ghost_can_talk === false){
    document.getElementById("stfu_ghost").innerHTML = "Be Quiet";
    ghost_can_talk = true;
    return true;    
  }
});

function ghost_chat(msg){
  if (ghost_can_talk === true){
    var randomer = Math.floor(Math.random()*ghostscript.length);
      document.getElementById("ghost_talk").innerHTML =  ghostscript[randomer];
    if (msg !== undefined){
      document.getElementById("ghost_talk").innerHTML = msg;
    }
      $( "#ghost_talk" ).show("slow").delay( 5000 ).fadeOut(2000);
  }
}

setInterval( function() {
  if (ghost_can_talk === true) {
  ghost_chat();
  }
},randomTime);

$( ".show_it" ).click(function() {
  $( "#ghost_dude" ).show( "slow" ); 
  // animation runs slow (600ms)
});

$( ".hide_it" ).click(function() {
  $( "#ghost_dude" ).hide( "fast" ); 
  // animation runs fast (200ms)
});

$( ".toggle_it" ).click(function() {
  $( "#ghost_dude" ).toggle( 3000 ); 
  // animations runs at a custom slow speed of 3secs
});

$( ".fade_in" ).click(function() {
  $( "#ghost_dude" ).fadeIn( 1000 );
});

$( ".fade_out" ).click(function() {
  $( "#ghost_dude" ).fadeOut( "slow" );
});

$( ".fade_toggle" ).click(function() {
  $( "#ghost_dude" ).fadeToggle( "slow" );
});

$( ".fade_low" ).click(function() {
  $( "#ghost_dude" ).fadeTo( "slow" , 0.25);
});

$( ".fade_high" ).click(function() {
  $( "#ghost_dude" ).fadeTo( "slow" , 1);
});

$( ".slide_down" ).click(function() {
  $( "#ghost_dude" ).slideDown( 3000, "easeInOutBounce");
    // adds an argument that changes the easing to easeInOutBounce
    // (requires jquery-ui)
});

$( ".slide_up" ).click(function() {
  $( "#ghost_dude" ).slideUp( "slow", ghost_chat("I SAY SOMETHING!") );
  // adds a callback function as an argument
});

$( ".slide_toggle" ).click(function() {
  $( "#ghost_dude" ).slideToggle( 2000, "easeInOutElastic", ghost_chat("I PUT AN EASE AND A CALLBACK"));
  // adds an easing style and callback function
});

$( "li button:nth-child(3)" ).click(function() {
  $( this ).next().slideToggle( 1000 ); 
});

$( "#tog_para" ).click(function() {
  $( "p" ).toggle( "fast" );
});

$( "#close_all" ).click(function() {
  $( "pre" ).hide( "fast" );
});

$( "#open_all" ).click(function() {
  $( "pre" ).show( "fast" );
});

$( "#hide_noneffects" ).click(function() {
  $( "p" ).hide( "fast" );
  $( "ul" ).hide( "fast" );
  $( "header" ).hide( "fast" );
  $( ".button_col").show( "fast" );
  $( "#ghost_dude" ).fadeIn( 1000 );
});

$( ".back_2_code" ).click(function() {
  $( "p" ).fadeIn( 1000 );
  $( "ul" ).fadeIn( 1000 );
  $( "header" ).fadeIn( 1000 );
  $( ".button_col").fadeOut( 1000 );
  $( "#ghost_dude" ).fadeOut( 1000);
});

$( "div#ghost_talk" ).click(function() {
  $( "div#ghost_talk" ).hide( "fast" );
});

}); // end closure