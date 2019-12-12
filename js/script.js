$(document).ready(function() {
    $("#slider").owlCarousel({
        items:1,
        loop: true,
        margin: 10,
        nav:true,
        navText: [
            "<i class='icon-left-open-big'></i>",
            " <i class='icon-right-open-big'></i>"
        ]
    });
});



$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        type: 'iframe'

    });
});
