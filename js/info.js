
$(document).ready(function(){
    var clipboard = new ClipboardJS( '.copy' );
    clipboard.on( 'success', function() {
      alert( '복사되셨습니다!' );
    } );
    clipboard.on( 'error', function() {
      alert( '복사 실패' );
    } );
})
