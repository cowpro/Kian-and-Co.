$("*").hide().fadeIn(500);

$('.circle-img').hover(function() {
    if ($('.circle-img').is(':hover')) {
        $('.circle-img').attr("src", "pics/broadcom.jpeg")
    } else {
        $('.circle-img').attr("src", "pics/italyv.jpeg")
    }
});

$('.about-pic').hover(function() {
    if ($('.about-pic').is(':hover')) {
        $('.about-pic').attr("src", "pics/snow.jpg")
    } else {
        $('.about-pic').attr("src", "pics/ice.jpeg")
    }
});