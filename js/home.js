$(document).ready(function() {
    const carousel = new bootstrap.Carousel('#section-1', {
        'interval': 5000,
        'pause': false
    })

    // Add overflow class if needed
    for (var i = 0; i < $('.content-detail').length; i++)
    {
        if ($('.content-detail').get(i).scrollWidth > $('.content-detail').get(i).offsetWidth || $('.content-detail').get(i).scrollHeight > $('.content-detail').get(i).offsetHeight) {
            $('.content-detail').eq(i).addClass('has-overflow')
        }
    }

    for (var i = 0; i < $('.has-overflow').length; i++) {
        while ($('.has-overflow').get(i).scrollWidth > $('.has-overflow').get(i).offsetWidth || $('.has-overflow').get(i).scrollHeight > $('.has-overflow').get(i).offsetHeight) {
            // Remove characters from paragraph until the text and the overflow indicator fit
            $('.has-overflow').get(i).innerHTML = $('.has-overflow').get(i).innerHTML.slice(0, -1);
        }
    }
})

window.addEventListener('scroll', function() {
    if (window.scrollY > 56) {
        $('nav').removeClass('bg-transparent')
        $('nav').removeClass('navbar-dark')
        $('.navbar-brand').children().removeClass('logo-dark')

        $('nav').addClass('bg-light')
        $('.navbar-brand').children().addClass('logo-light')
    } else if (window.scrollY == 0) {
        $('nav').removeClass('bg-light')
        $('.navbar-brand').children().removeClass('logo-light')

        $('nav').addClass('bg-transparent')
        $('nav').addClass('navbar-dark')
        $('.navbar-brand').children().addClass('logo-dark')
    }
})

function goto(e) {
    window.open($(e).attr('data-vb-link'), '_blank').focus()
}