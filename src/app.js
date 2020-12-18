$(document).ready(function(){

    var source   = $("#cards-template").html();
    var template = Handlebars.compile(source);

    //Uso jquery per intercettare il cambio di genere su genres-filter
    $('#genres-filter').change(function() {
        //svuoto il card-container
        $('.card-container').empty();
        //Recupero il valore value delle option
        var genre_selected = $('#genres-filter').val();
    });

    $.ajax({
        url: '../versione-ajax/dischi.php',
        method: 'GET',
        data: {
            genre: genre_selected
        },
        success: function(element) {

            for (var i = 0; i < element.length; i++) {

                var context = {
                    poster: element[i].poster,
                    title: element[i].title,
                    author: element[i].author,
                    year: element[i].year
                };
                var html = template(context);
                $('.card-container').append(html);
            }
        },
        error: function() {
            console.log('error');
        }
    });



});
