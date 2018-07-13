/**
 * Created by 98414 on 2018/7/11.
 */
$(function () {
    var unslider = $('.banner').unslider({
        speed: 500,               //  The speed to animate each slide (in milliseconds)
        delay: 100,              //  The delay between slide animations (in milliseconds)
        complete: function () {
        },  //  A function that gets called after every slide animation
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        fluid: true              //  Support responsive design. May break non-responsive designs
    });
    $('.nexts1').click(function () {
        unslider.data('unslider').next();
    });
    $('.prevs1').click(function () {
        unslider.data('unslider').prev();
    });
    var unslider2 = $('.banner1').unslider({
        speed: 500,               //  The speed to animate each slide (in milliseconds)
        delay: 100,              //  The delay between slide animations (in milliseconds)
        complete: function () {
        },  //  A function that gets called after every slide animation
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        fluid: true              //  Support responsive design. May break non-responsive designs
    });
    $('.nexts2').click(function () {
        unslider2.data('unslider').next();
    });
    $('.prevs2').click(function () {
        unslider2.data('unslider').prev();
    });
    var country = $(".country")
    $(".topNavBox1").mouseover(function () {
        country.show();
        $(this).css("backgroundColor",'white')
    }).mouseout(function () {
        country.hide();
        $(this).css('backgroundColor','#eeefef')
    })
    country.mouseover(function () {
        country.show();
        $(".topNavBox1").css("backgroundColor",'white')
    }).mouseout(function () {
        country.hide();
        $(".topNavBox1").css('backgroundColor','#eeefef')
    })
    $(".country p").bind('click',function(){
        $('#country').text($(this).text());
        country.hide();
    })
    $(".myTB").hover(function () {
        $('.my-tb-drop').show();
        $(this).css('backgroundColor','white')
    },function () {
        $('.my-tb-drop').hide();
        $(this).css('backgroundColor','#eeefef')
    })
    $('.my-tb-drop').hover(function () {
        $(this).show();
        $('.myTB').css('backgroundColor','white')
    },function () {
        $(this).hide();
        $('.myTB').css('backgroundColor','#eeefef')
    })
    $('.my-tb-drop p').hover(function () {
        $(this).css('backgroundColor','#eeefef')
    },function () {
        $(this).css('backgroundColor','white')
    })
    $('.collect').hover(function () {
        $(this).css('backgroundColor','white')
        $('.collect-drop').show();
    },function () {
        $(this).css('backgroundColor','#eeefef')
        $('.collect-drop').hide();
    })
    $('.collect-drop').hover(function () {
        $(this).show()
    },function () {
    })
    $('.collect-drop p').hover(function () {
        $(this).css('backgroundColor','#eeefef');
    },function () {
        $(this).css('backgroundColor','white')
    })

    $('.seller').hover(function () {
        $(this).css('backgroundColor','white')
        $('.seller-drop').show();
    },function () {
        $(this).css('backgroundColor','#eeefef')
        $('.seller-drop').hide();
    })
    $('.seller-drop').hover(function () {
        $(this).show()
        $('.seller').css('backgroundColor','white')
    },function () {
        $(this).hide()
        $('.seller').css('backgroundColor','#eeefef')
    })
    $('.seller-drop p').hover(function () {
        $(this).css('backgroundColor','#eeefef');
    },function () {
        $(this).css('backgroundColor','white')
    })

    $('.contact').hover(function () {
        $(this).css('backgroundColor','white')
        $('.contact-drop').show();
    },function () {
        $(this).css('backgroundColor','#eeefef')
        $('.contact-drop').hide();
    })
    $('.contact-drop').hover(function () {
        $(this).show()
        $('.contact').css('backgroundColor','white')
    },function () {
    })
    $('.contact-drop p').hover(function () {
        $(this).css('backgroundColor','#eeefef');
    },function () {
        $(this).css('backgroundColor','white')
    })
    $('.announcement li').hover(function () {
        $(this).siblings('li').removeClass('announcement-active');
        $(this).addClass('announcement-active')
        $(this).css("color", '#F40')
    }, function () {
        $(this).css('color', 'black')
    })
})