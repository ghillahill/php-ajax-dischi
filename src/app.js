$(document).ready(function(){
    $.ajax({
        url: '../versione-ajax/dischi.php',
        method: 'GET',
        success: function() {
            console.log("ok");
        },
        error: function() {
            console.log('error');
        }
    });
});
