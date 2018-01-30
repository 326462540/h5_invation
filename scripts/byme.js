$(function(){
    var height=$('.main .card').height();
        var width=$('.main .card').width();
        $('.main .box span').css({'width':width});
    $(".top img").addClass('animated fadeInDown');
    setTimeout(function(){
        $('.jt').fadeOut(500);
            $('.main .zhuan img').css({
                'transform':'rotateX(180deg)'
            })
            setTimeout(function(){
                $('.main .zhuan img').animate({
                    //'transform':'rotateX(180deg)',
                    "top":'14.8em'
                },function(){
                    $('.main .box span').animate({
                        'top':'14.6em'
                        //'margin-bottom':'-14.7em'
                    },2000);
                    $('.main>div.content .card').animate({
                        'top':'-14.7em',
                        'margin-bottom':'-14.7em'
                    },2000);

                    $('.main>div.content .word').animate({
                        'height':'22em',
                        'top':'-4em'
                    },2000);
                })
            },600);
    },5000);
    // var a=1;
    // $(".main>div.content .card").click(function(){
    //     if(a==1){
    //         $('.jt').fadeOut(500);
    //         $('.main .zhuan img').css({
    //             'transform':'rotateX(180deg)'
    //         })
    //         setTimeout(function(){
    //             $('.main .zhuan img').animate({
    //                 //'transform':'rotateX(180deg)',
    //                 "top":'14.8em'
    //             },function(){
    //                 $('.main .box span').animate({
    //                     'top':'14.6em'
    //                     //'margin-bottom':'-14.7em'
    //                 },2000);
    //                 $('.main>div.content .card').animate({
    //                     'top':'-14.7em',
    //                     'margin-bottom':'-14.7em'
    //                 },2000);

    //                 $('.main>div.content .word').animate({
    //                     'height':'22em',
    //                     'top':'-4em'
    //                 },2000);
    //             })
    //         },600);

    //     }
    //     a++;
    // });
});