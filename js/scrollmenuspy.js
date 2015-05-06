$(function(){
    $('.scrollclass a').click(function (event) {
        //Toggle Class
        $(".scrollitem").removeClass("active");
        $(this).closest('li').addClass("active");
        var theClass = $(this).attr("class");
        $('.'+theClass).parent('li').addClass('active');
        //Animate
        event.preventDefault();
        $($(this).attr('href'))[0].scrollIntoView();
        scrollBy(0, -108);
    });
});
