$('main section a').click(function(a) {
    $('main section a').removeClass("current");
    $(this).addClass("current");
})
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 0) {
        $('main section a').removeClass("current");
        $('main section a:nth-of-type(1)').addClass("current")
    }
    if (scroll >= $(window).height() - 500) {
        $('main section a').removeClass("current");
        $('main section a:nth-of-type(2)').addClass("current")
    }
    if (scroll >= $(window).height() + 10) {
        $('main section a').removeClass("current");
        $('main section a:nth-of-type(3)').addClass("current")
    }
});

data = '[{"theme":"https://i.imgur.com/iCehxaL.png"}]';
$('.preview').click(function(e) {
    for (let i = 1; i < 4; i++) {
       if ($(this).attr("class") == "preview " + i) {   
        var mydata = JSON.parse(data);
        $('.image-cont img').attr('src', mydata[i - 1].theme)
        $('.image-cont').css('display', 'grid')
       }
    }
})
$('.image-cont').click(function() {
    $(this).css('display', 'none')
})

/*
not my own code under here
*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});