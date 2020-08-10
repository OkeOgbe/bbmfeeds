$('#footer').load('footer.html');

$(function () {
    $(".menu_icon").on("click", function () {
        $(".side_nav").toggleClass("slide_out");
    });
})



