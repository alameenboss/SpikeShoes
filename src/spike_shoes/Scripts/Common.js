addEventListener("load", function () {
    setTimeout(hideURLbar, 0);
}, false);
function hideURLbar() {
    window.scrollTo(0, 1);
}
$(document).ready(function () {
    $('#demo').hide();
    $('.vticker').easyTicker();
    $(".megamenu").megamenu();
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1200);
    });
    $('#jquery-demo').slippry({
        // general elements & wrapper
        slippryWrapper: '<div class="sy-box jquery-demo" />', // wrapper to wrap everything, including pager
        // options
        adaptiveHeight: false, // height of the sliders adapts to current slide
        useCSS: false, // true, false -> fallback to js if no browser support
        autoHover: false,
        transition: 'fade'
    });
    var $cart = $('#cart');
    $('#clickme').click(function (e) {
        e.stopPropagation();
        if ($cart.is(":hidden")) {
            $cart.slideDown("slow");
        } else {
            $cart.slideUp("slow");
        }
    });
    $(document.body).click(function () {
        if ($cart.not(":hidden")) {
            $cart.slideUp("slow");
        }
    });
    /*
    var defaults = {
	    containerID: 'toTop', // fading element id
	    containerHoverID: 'toTopHover', // fading element hover id
	    scrollSpeed: 1200,
	    easingType: 'linear'
    };
    */
    $().UItoTop({ easingType: 'easeOutQuart' });
    $("#owl-demo").owlCarousel({
        items: 3,
        lazyLoad: true,
        autoPlay: true,
        navigation: true,
        navigationText: ["", ""],
        rewindNav: false,
        scrollPerPage: false,
        pagination: false,
        paginationNumbers: false,
    });
    $('#etalage').etalage({
        thumb_image_width: 300,
        thumb_image_height: 400,
        source_image_width: 900,
        source_image_height: 1000,
        show_hint: true,
        click_callback: function (image_anchor, instance_id) {
            alert('Callback example:\nYou clicked on an image with the anchor: "' + image_anchor + '"\n(in Etalage instance: "' + instance_id + '")');
        }
    });
    // This is for the dropdown list example:
    $('.dropdownlist').change(function () {
        etalage_show($(this).find('option:selected').attr('class'));
    });
    $('#horizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion           
        width: 'auto', //auto or any width like 600px
        fit: true,   // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        activate: function (event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });

    $('#verticalTab').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true
    });
});

//<![CDATA[
$(window).load(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [100, 400],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));

});//]]>


$(function () {
    $('.starbox').each(function () {
        var starbox = $(this);
        starbox.starbox({
            average: starbox.attr('data-start-value'),
            changeable: starbox.hasClass('unchangeable') ? false : starbox.hasClass('clickonce') ? 'once' : true,
            ghosting: starbox.hasClass('ghosting'),
            autoUpdateAverage: starbox.hasClass('autoupdate'),
            buttons: starbox.hasClass('smooth') ? false : starbox.attr('data-button-count') || 5,
            stars: starbox.attr('data-star-count') || 5
        }).bind('starbox-value-changed', function (event, value) {
            if (starbox.hasClass('random')) {
                var val = Math.random();
                starbox.next().text(' ' + val);
                return val;
            }
        })
    });
});