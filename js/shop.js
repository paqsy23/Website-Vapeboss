$(document).ready(function() {
    let p = document.querySelector(".vb-title");

    // Add overflow class if needed
    for (var i = 0; i < $('.vb-title').length; i++)
    {
        if ($('.vb-title').get(i).scrollWidth > $('.vb-title').get(i).offsetWidth) {
            $('.vb-title').eq(i).addClass('has-overflow')
        }
    }

    for (var i = 0; i < $('.vb-title').length; i++) {
        while ($('.vb-title').get(i).scrollWidth > $('.vb-title').get(i).offsetWidth) {
            // Remove characters from paragraph until the text and the overflow indicator fit
            $('.vb-title').get(i).innerHTML = $('.vb-title').get(i).innerHTML.slice(0, -1);
        }
    }
})

$('#vb-search').on('input', function() {
    if ($('#vb-search').val().length > 0) {
        $('#vb-clear-search').css('display', 'block')
    } else {
        $('#vb-clear-search').css('display', 'none')
    }
})

$('#vb-clear-search').on('click', function() {
    $('#vb-search').val('')
    $('#vb-clear-search').css('display', 'none')
})

$('#vb-btn-filter').on('click', function() {
    $('#vb-filter').toggle('slow')
})