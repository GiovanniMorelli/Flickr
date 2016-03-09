$( document ).ready(function() {


    checkForChanges();
    $('.scroll-top-wrapper').on('click', scrollToTop);

});

function checkForChanges()
{
    if ($('#mCSB_1_scrollbar_vertical').hasClass('mCSB_scrollTools_onDrag')){
        if ($('#mCSB_1_dragger_vertical').css("top").replace("px","") > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    }
    setTimeout(checkForChanges, 500);

}


function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $("#mCSB_1_dragger_vertical").animate({top: "0px",}, 500 );
    $("#mCSB_1_container").animate({top: "0px",}, 500 );
    $('.scroll-top-wrapper').removeClass('show');
}
